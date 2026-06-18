import { createCatalog } from "../../core/createCatalog";
import type { NacionalidadRecord } from "./types";
import data from "./data.json";

export type { NacionalidadRecord };

export const nacionalidad = createCatalog(data as NacionalidadRecord[], "value");
