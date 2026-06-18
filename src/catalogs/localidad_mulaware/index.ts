import { createCatalog } from "../../core/createCatalog";
import type { LocalidadMulawareRecord } from "./types";
import data from "./data.json";

export type { LocalidadMulawareRecord };

export const localidadMulaware = createCatalog(data as LocalidadMulawareRecord[], "value");
