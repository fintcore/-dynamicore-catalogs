#!/usr/bin/env node
// Usage:
//   node scripts/add-catalog.js <path/to/file.csv> [--key <fieldName>] [--build]

const fs = require("fs");
const path = require("path");

// ─── CLI ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === "--help") {
  console.log(`
Usage: node scripts/add-catalog.js <path/to/file.csv> [options]

Options:
  --key <field>   Force the primary key field (auto-detected if omitted)
  --build         Run "npm run build" after generating files
  --overwrite     Overwrite existing catalog files

Example:
  node scripts/add-catalog.js ./actividad_economica.csv --key value --build
`);
  process.exit(0);
}

const csvPath = path.resolve(args[0]);
const keyArg = getFlag("--key");
const shouldBuild = args.includes("--build");
const shouldOverwrite = args.includes("--overwrite");

if (!fs.existsSync(csvPath)) {
  die(`File not found: ${csvPath}`);
}

// ─── CSV Parser ─────────────────────────────────────────────────────────────

function parseCSV(raw) {
  const lines = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim().split("\n");
  if (lines.length < 2) die("CSV must have at least a header row and one data row.");

  const headers = parseLine(lines[0]);
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = parseLine(line);
    const record = {};
    headers.forEach((h, idx) => {
      const raw = values[idx];
      // Unquoted NULL → null; anything else stays as the string value
      record[h] = raw === undefined || raw === "NULL" ? null : raw;
    });
    records.push(record);
  }

  return { headers, records };
}

function parseLine(line) {
  const fields = [];
  let cur = "";
  let inQ = false;

  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      // escaped quote inside quoted field
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === "," && !inQ) {
      fields.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  fields.push(cur);
  return fields;
}

// ─── Type Inference ─────────────────────────────────────────────────────────

function inferTypes(headers, records) {
  const result = {};

  for (const h of headers) {
    const all = records.map((r) => r[h]);
    const nonNull = all.filter((v) => v !== null);
    const hasNull = all.some((v) => v === null);

    let base = "string";

    if (nonNull.length > 0) {
      const allNumeric = nonNull.every((v) => v !== "" && !isNaN(Number(v)));
      // Treat as number only when no leading zeros (would be a code otherwise)
      const hasLeadingZero = nonNull.some((v) => /^0\d/.test(v));

      if (allNumeric && !hasLeadingZero) {
        base = "number";
      }
    }

    // If every value is null this column is always null → type null
    if (nonNull.length === 0) {
      result[h] = "null";
    } else {
      result[h] = hasNull ? `${base} | null` : base;
    }
  }

  return result;
}

// ─── Key Detection ───────────────────────────────────────────────────────────

// Preferred key column names, checked before falling back to "first unique"
const KEY_HINTS = ["id", "value", "code", "codigo", "clave", "key", "cve", "num"];

function detectKey(headers, records) {
  const candidates = headers.filter((h) => {
    const vals = records.map((r) => r[h]);
    return vals.every((v) => v !== null) && new Set(vals).size === vals.length;
  });

  if (candidates.length === 0) return headers[0];

  // Prefer a candidate whose name matches a known key hint
  const hinted = candidates.find((h) =>
    KEY_HINTS.some((hint) => h.toLowerCase().includes(hint))
  );

  return hinted ?? candidates[0];
}

// ─── Name helpers ────────────────────────────────────────────────────────────

function toValidIdentifier(str) {
  return (
    str
      // hyphen/underscore/space followed by letter or digit → remove separator
      .replace(/[-_\s]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
      // strip any remaining non-word characters
      .replace(/[^a-zA-Z0-9$_]/g, "")
  );
}

function toCamelCase(str) {
  const id = toValidIdentifier(str);
  // lowercase first char (handles "Nacionalidad-1" → "nacionalidad1")
  return id.charAt(0).toLowerCase() + id.slice(1);
}

function toPascalCase(str) {
  const id = toValidIdentifier(str);
  return id.charAt(0).toUpperCase() + id.slice(1);
}

// A valid JS identifier (keeps original casing of first char after camelCase)
function toVarName(catalogName) {
  return toCamelCase(catalogName);
}

// ─── Code generation ─────────────────────────────────────────────────────────

function genTypesFile(typeName, headers, types) {
  const fields = headers.map((h) => `  ${h}: ${types[h]};`).join("\n");
  return `export interface ${typeName} {\n${fields}\n}\n`;
}

function genIndexFile(catalogName, varName, typeName, keyField) {
  return `import { createCatalog } from "../../core/createCatalog";
import type { ${typeName} } from "./types";
import data from "./data.json";

export type { ${typeName} };

export const ${varName} = createCatalog(data as ${typeName}[], "${keyField}");
`;
}

// ─── Convert records (apply numeric coercion) ────────────────────────────────

function convertRecords(records, headers, types) {
  return records.map((r) => {
    const out = {};
    for (const h of headers) {
      const v = r[h];
      if (v === null) {
        out[h] = null;
      } else if (types[h] === "number" || types[h] === "number | null") {
        out[h] = Number(v);
      } else {
        out[h] = v;
      }
    }
    return out;
  });
}

// ─── src/index.ts update ─────────────────────────────────────────────────────

function updateSrcIndex(catalogName, varName, typeName) {
  const srcIndexPath = path.join(__dirname, "..", "src", "index.ts");

  if (!fs.existsSync(srcIndexPath)) {
    console.warn(`⚠️  src/index.ts not found, skipping re-export.`);
    return;
  }

  const current = fs.readFileSync(srcIndexPath, "utf8");
  const marker = `"./catalogs/${catalogName}"`;

  if (current.includes(marker)) {
    console.log(`  ⏭️  src/index.ts already exports ${catalogName}`);
    return;
  }

  const lines = [
    `export { ${varName} } from "./catalogs/${catalogName}";`,
    `export type { ${typeName} } from "./catalogs/${catalogName}";`,
  ];

  fs.writeFileSync(srcIndexPath, current.trimEnd() + "\n" + lines.join("\n") + "\n");
  console.log(`  ✅ src/index.ts updated`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

const raw = fs.readFileSync(csvPath, "utf8");
const { headers, records } = parseCSV(raw);

if (headers.length === 0) die("No headers found in CSV.");
if (records.length === 0) die("No records found in CSV.");

const catalogName = path.basename(csvPath, ".csv");
const varName = toVarName(catalogName);
const typeName = toPascalCase(catalogName) + "Record";
const types = inferTypes(headers, records);
const keyField = keyArg || detectKey(headers, records);

if (!headers.includes(keyField)) {
  die(`Key field "${keyField}" not found. Available columns: ${headers.join(", ")}`);
}

const targetDir = path.join(__dirname, "..", "src", "catalogs", catalogName);

console.log(`\n📂  Catalog : ${catalogName}`);
console.log(`📦  Variable: ${varName}`);
console.log(`🏷️   Type    : ${typeName}`);
console.log(`🔑  Key     : ${keyField}`);
console.log(`📊  Records : ${records.length}`);
console.log(`📋  Columns : ${headers.join(", ")}\n`);

// Guard: already exists
if (fs.existsSync(targetDir) && !shouldOverwrite) {
  console.warn(`⚠️  ${targetDir} already exists. Use --overwrite to replace it.`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

// data.json
const clean = convertRecords(records, headers, types);
fs.writeFileSync(path.join(targetDir, "data.json"), JSON.stringify(clean, null, 2));
console.log(`  ✅ data.json`);

// types.ts
fs.writeFileSync(path.join(targetDir, "types.ts"), genTypesFile(typeName, headers, types));
console.log(`  ✅ types.ts`);

// index.ts
fs.writeFileSync(path.join(targetDir, "index.ts"), genIndexFile(catalogName, varName, typeName, keyField));
console.log(`  ✅ index.ts`);

// src/index.ts
updateSrcIndex(catalogName, varName, typeName);

if (shouldBuild) {
  console.log("\n🔨 Building...");
  const { execSync } = require("child_process");
  try {
    execSync("npm run build", { cwd: path.join(__dirname, ".."), stdio: "inherit" });
  } catch {
    die("Build failed.");
  }
}

console.log(`\n✨ Done! Run "npm run build" to compile.\n`);

// ─── Helpers ────────────────────────────────────────────────────────────────

function getFlag(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : null;
}

function die(msg) {
  console.error(`\n❌ Error: ${msg}\n`);
  process.exit(1);
}
