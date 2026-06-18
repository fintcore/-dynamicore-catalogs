#!/usr/bin/env node
// Processes every .csv inside /csv and generates its catalog.
// Usage: node scripts/add-all-catalogs.js [--build] [--overwrite]

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const csvDir = path.join(__dirname, "..", "csv");
const shouldBuild = process.argv.includes("--build");
const shouldOverwrite = process.argv.includes("--overwrite");

if (!fs.existsSync(csvDir)) {
  console.error(`\n❌  Folder not found: ${csvDir}\n`);
  process.exit(1);
}

const files = fs
  .readdirSync(csvDir)
  .filter((f) => f.toLowerCase().endsWith(".csv"))
  .sort();

if (files.length === 0) {
  console.log(`\n⚠️  No CSV files found in ${csvDir}\n`);
  process.exit(0);
}

console.log(`\n🗂️  Found ${files.length} CSV files\n`);

const results = { ok: [], skipped: [], failed: [] };

for (const file of files) {
  const csvPath = path.join(csvDir, file);
  const flags = shouldOverwrite ? "--overwrite" : "";

  process.stdout.write(`  ⏳  ${file} ... `);

  try {
    execSync(
      `node "${path.join(__dirname, "add-catalog.js")}" "${csvPath}" ${flags}`,
      { cwd: path.join(__dirname, ".."), stdio: "pipe" }
    );
    console.log("✅");
    results.ok.push(file);
  } catch (err) {
    const stderr = err.stderr?.toString() ?? "";
    if (stderr.includes("already exists")) {
      console.log("⏭️  skipped (already exists, use --overwrite)");
      results.skipped.push(file);
    } else {
      console.log("❌  FAILED");
      console.error(`     ${stderr.trim()}`);
      results.failed.push(file);
    }
  }
}

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅  Generated : ${results.ok.length}
  ⏭️   Skipped   : ${results.skipped.length}
  ❌  Failed    : ${results.failed.length}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

if (results.failed.length > 0) {
  console.log("\nFailed files:");
  results.failed.forEach((f) => console.log(`  - ${f}`));
}

if (shouldBuild && results.ok.length > 0) {
  console.log("\n🔨  Building...\n");
  try {
    execSync("npm run build", {
      cwd: path.join(__dirname, ".."),
      stdio: "inherit",
    });
  } catch {
    console.error("❌  Build failed.");
    process.exit(1);
  }
} else if (results.ok.length > 0) {
  console.log('\nRun "npm run build" to compile all catalogs.\n');
}
