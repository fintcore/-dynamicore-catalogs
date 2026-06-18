import { createCatalog } from "../../core/createCatalog";
import type { EnpagosPaisRecord } from "./types";
import data from "./data.json";

export type { EnpagosPaisRecord };

export const enpagosPais = createCatalog(data as EnpagosPaisRecord[], "value");
