# @dynamicore/catalogs

Librería de catálogos de datos para aplicaciones financieras y regulatorias en México y Latinoamérica. Incluye geografía, actividades económicas, códigos MCC, fiscalidad, ocupaciones y más — con una API uniforme y soporte completo para TypeScript.

## Instalación

```bash
npm install @dynamicore/catalogs
# yarn
yarn add @dynamicore/catalogs
# pnpm
pnpm add @dynamicore/catalogs
```

## Uso rápido

```ts
import { pais, municipios, actividadEconomica, mcc } from "@dynamicore/catalogs";

pais.getAll();                    // todos los registros
pais.count();                     // 229
pais.getById("MX");               // registro exacto por clave
pais.search("mexico");            // búsqueda en todos los campos
pais.search("mexico", ["name"]); // búsqueda en campos específicos
pais.filter(p => p.code1 !== null); // predicado personalizado

// MCC es especial — recibe idioma como argumento
mcc("es").getById("5812");
mcc("en").search("restaurant");
```

> **Tree-shaking:** importa solo lo que necesitas por subpath para cargar únicamente ese catálogo.
>
> ```ts
> import { actividadEconomica } from "@dynamicore/catalogs/actividad_economica";
> ```

---

## API

Todos los catálogos exponen la misma interfaz:

```ts
interface Catalog<T, K extends keyof T> {
  getAll(): T[];
  getById(id: T[K]): T | undefined;
  search(query: string, fields?: (keyof T)[]): T[];
  filter(predicate: (item: T) => boolean): T[];
  count(): number;
}
```

| Método | Descripción |
|--------|-------------|
| `getAll()` | Devuelve todos los registros del catálogo |
| `getById(id)` | Busca un registro por su clave primaria |
| `search(query, fields?)` | Búsqueda de texto libre (case-insensitive). Sin `fields` busca en todas las columnas |
| `filter(fn)` | Filtra con un predicado arbitrario |
| `count()` | Número total de registros |

---

## Catálogos disponibles

### Geografía — México

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `colonia` | `colonia` | 143,875 | Colonias de México |
| `municipios` | `municipios` | 2,464 | Municipios oficiales INEGI |
| `municipioMulaware` | `municipio_mulaware` | 2,458 | Municipios (formato Mulaware) |
| `entidadFederativa` | `entidad_federativa` | 33 | Entidades federativas |
| `states` | `states` | 32 | Estados de México |
| `statesSoda` | `states_soda` | 33 | Estados (formato SODA) |
| `zipcode` | `zipcode` | 31,949 | Códigos postales |
| `zipcodeMulaware` | `zipcode_mulaware` | 32,539 | Códigos postales (Mulaware) |
| `localidadMulaware` | `localidad_mulaware` | 665 | Localidades (Mulaware) |
| `cityMexMulaware` | `city_mex_mulaware` | 32 | Ciudades principales MX (Mulaware) |
| `cityMulaware` | `city_mulaware` | 709 | Ciudades (Mulaware) |
| `enpagosMunicupio` | `enpagos_municupio` | 2,313 | Municipios (formato Enpagos) |

### Geografía — Internacional

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `pais` | `pais` | 229 | Países |
| `ccPais` | `cc_pais` | 207 | Países con códigos de área |
| `countriesSoda` | `countries_soda` | 249 | Países (formato SODA) |
| `countryMulaware` | `country_mulaware` | 250 | Países (formato Mulaware) |
| `enpagosPais` | `enpagos_pais` | 198 | Países (formato Enpagos) |
| `nacionalidad` | `nacionalidad` | 244 | Nacionalidades |
| `nacionalidad1` | `Nacionalidad-1` | 241 | Nacionalidades (variante) |
| `nationalitySoda` | `nationality_soda` | 2 | Tipos de nacionalidad (SODA) |

### Divisas

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `currency` | `currency` | 161 | Monedas internacionales |
| `claveMoneda` | `clave_moneda` | 161 | Claves de moneda SAT |
| `currencySoda` | `currency_soda` | 3 | Monedas (formato SODA) |

### Actividad Económica

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `actividadEconomica` | `actividad_economica` | 1,246 | Catálogo CNBV de actividades económicas |
| `actividadesVulnerables` | `actividades_vulnerables` | 21 | Actividades vulnerables (antilavado) |
| `clasificacionActividadEconomica` | `clasificacion_actividad_economica` | 10 | Clasificaciones de actividad |
| `subclasificacionActividad` | `subclasificacion_actividad` | 149 | Subclasificaciones de actividad |
| `claveActividad` | `clave_actividad` | 387 | Claves de actividad económica |
| `economicactivitySoda` | `economicactivity_soda` | 1,281 | Actividades económicas (SODA) |
| `enpagosActividadEconomica` | `enpagos_actividad_economica` | 1,251 | Actividades económicas (Enpagos) |
| `pisaActividadEconomica` | `pisa_actividad_economica` | 1,320 | Actividades económicas (PISA) |
| `sectorClasificacion` | `sector_clasificacion` | 4 | Sectores de clasificación |
| `girosPagaqui` | `giros_pagaqui` | 237 | Giros comerciales (Pagaqui) |

### Fiscal / SAT / CFDI

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `cfdiuses` | `cfdiuses` | 25 | Usos de CFDI (SAT) |
| `paymentForms` | `paymentForms` | 22 | Formas de pago SAT |
| `paymentMethods` | `paymentMethods` | 2 | Métodos de pago |
| `regimenfiscal` | `regimenfiscal` | 23 | Regímenes fiscales SAT |
| `tipoSociedad` | `tipo_sociedad` | 46 | Tipos de sociedad mercantil |

### Ocupaciones y Personas

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `ocupationMulaware` | `ocupation_mulaware` | 1,284 | Ocupaciones (Mulaware) |
| `pisaOcupaciones` | `pisa_ocupaciones` | 94 | Ocupaciones (PISA) |
| `pisaProfesion` | `pisa_profesion` | 534 | Profesiones (PISA) |
| `pisaPuesto` | `pisa_puesto` | 360 | Puestos laborales (PISA) |
| `numeroTrabajadores` | `numero_trabajadores` | 4 | Rangos de número de trabajadores |

### Operaciones Financieras

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `destinoRecursos` | `destino_recursos` | 6 | Destino de recursos |
| `origenRecurso` | `origen_recurso` | 6 | Origen del recurso |
| `instrumentoMonetario` | `instrumento_monetario` | 8 | Instrumentos monetarios |
| `tipoOperacion` | `tipo_operacion` | 6 | Tipos de operación |
| `catalogoPrioridad` | `catalogo_prioridad` | 8 | Prioridades |
| `prioridad` | `prioridad` | 8 | Niveles de prioridad |
| `relationTypes` | `relationTypes` | 9 | Tipos de relación entre personas |

### SODA (Sistema de Originación Digital)

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `ageorincorporationdateSoda` | `ageorincorporationdate_soda` | 8 | Antigüedad / fecha de incorporación |
| `credittermSoda` | `creditterm_soda` | 59 | Plazos de crédito |
| `customersenioritySoda` | `customerseniority_soda` | 3 | Antigüedad del cliente |
| `guaranteesSoda` | `guarantees_soda` | 8 | Tipos de garantía |
| `guaratortypesSoda` | `guaratortypes_soda` | 7 | Tipos de garante |
| `persontypeSoda` | `persontype_soda` | 4 | Tipos de persona |
| `productsSoda` | `products_soda` | 5 | Productos financieros |
| `resourcedestinationSoda` | `resourcedestination_soda` | 7 | Destino de recursos (SODA) |
| `resourceoriginSoda` | `resourceorigin_soda` | 8 | Origen de recursos (SODA) |
| `transactionalfrecuencySoda` | `transactionalfrecuency_soda` | 4 | Frecuencia transaccional |
| `transactionamountsSoda` | `transactionamounts_soda` | 5 | Montos de transacción |
| `transactionsorsendingchannelsSoda` | `transactionsorsendingchannels_soda` | 4 | Canales de envío |
| `taxonomy` | `taxonomy` | 2 | Taxonomías |

### MCC (Merchant Category Codes)

Catálogo especial con soporte bilingüe (español / inglés).

| Variable | Catálogo | Registros | Descripción |
|----------|----------|-----------|-------------|
| `mcc(lang)` | `mcc` | 1,056 | Códigos MCC — `"es"` o `"en"` |

```ts
import { mcc } from "@dynamicore/catalogs";

const catalog = mcc("es"); // o mcc("en")

catalog.getById("5812");
// { mcc: "5812", edited_description: "Lugares para comer y restaurantes", ... }

catalog.search("farmacia");
catalog.count(); // 1056
```

---

## Ejemplos

### TypeScript

```ts
import { pais, municipios, colonia, zipcode } from "@dynamicore/catalogs";
import type { PaisRecord } from "@dynamicore/catalogs";

// Buscar país por código
const mexico: PaisRecord | undefined = pais.getById("MX");

// Buscar municipios de Jalisco
const jalisco = municipios.search("jalisco", ["name"]);

// Filtrar colonias con código postal específico
const colonias = colonia.filter(c => c.code1 === "44100");

// Primer código postal que empiece con "064"
const cp = zipcode.search("064")[0];
```

### JavaScript (CommonJS)

```js
const { pais, actividadEconomica, mcc } = require("@dynamicore/catalogs");

console.log(pais.count());            // 229
console.log(actividadEconomica.count()); // 1246

const restaurant = mcc("es").getById("5812");
console.log(restaurant.edited_description);
// "Lugares para comer y restaurantes"
```

### Subpath import (recomendado para bundles grandes)

```ts
// Solo carga el catálogo que necesitas
import { colonia }  from "@dynamicore/catalogs/colonia";
import { municipios } from "@dynamicore/catalogs/municipios";
import { zipcode } from "@dynamicore/catalogs/zipcode";
```

---

## Estructura del proyecto

```
src/
├── core/
│   ├── createCatalog.ts   # Factory con API uniforme
│   └── types.ts           # Interfaces base
├── catalogs/
│   ├── pais/
│   │   ├── data.json      # Datos del catálogo
│   │   ├── types.ts       # Tipos TypeScript específicos
│   │   └── index.ts       # Punto de entrada
│   └── ...                # Un directorio por catálogo
├── index.ts               # Barrel con todos los exports
csv/                       # CSV fuente de cada catálogo
scripts/
├── add-catalog.js         # Convierte un CSV a catálogo
└── add-all-catalogs.js    # Procesa todos los CSVs en /csv
```

---

## Agregar un catálogo nuevo

1. Coloca el archivo CSV en la carpeta `csv/`
2. Ejecuta el script de generación:

```bash
# Un catálogo individual
node scripts/add-catalog.js csv/mi_catalogo.csv --build

# Todos los CSVs en /csv de una sola vez
npm run catalog:add-all:build
```

El script detecta automáticamente:
- La clave primaria (primera columna única sin nulos, preferencia por `id`, `value`, `code`, `clave`)
- Los tipos TypeScript de cada columna
- Si hay valores nulos

Para forzar la clave primaria:
```bash
node scripts/add-catalog.js csv/mi_catalogo.csv --key codigo --build
```

---

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run build` | Compila el proyecto (ESM + CJS + tipos) |
| `npm run dev` | Compilación en modo watch |
| `npm run typecheck` | Verifica tipos sin compilar |
| `npm run catalog:add` | Agrega un catálogo desde CSV |
| `npm run catalog:add-all` | Procesa todos los CSVs en `/csv` |
| `npm run catalog:add-all:build` | Procesa todos los CSVs y compila |

---

## Publicar en npm

```bash
# 1. Login
npm login

# 2. Compilar
npm run build

# 3. Publicar (paquete público)
npm publish --access public

# 4. Para versiones futuras
npm version patch   # 1.0.0 → 1.0.1
npm publish --access public
```

---

## Licencia

MIT
