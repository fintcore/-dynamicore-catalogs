import { createCatalog } from "../../core/createCatalog";
import type { PaisRecord } from "./types";
import data from "./data.json";

export type { PaisRecord };

export const pais = createCatalog(data as PaisRecord[], "value");
