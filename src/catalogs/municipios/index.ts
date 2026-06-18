import { createCatalog } from "../../core/createCatalog";
import type { MunicipiosRecord } from "./types";
import data from "./data.json";

export type { MunicipiosRecord };

export const municipios = createCatalog(data as MunicipiosRecord[], "value");
