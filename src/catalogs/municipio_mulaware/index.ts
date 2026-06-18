import { createCatalog } from "../../core/createCatalog";
import type { MunicipioMulawareRecord } from "./types";
import data from "./data.json";

export type { MunicipioMulawareRecord };

export const municipioMulaware = createCatalog(data as MunicipioMulawareRecord[], "value");
