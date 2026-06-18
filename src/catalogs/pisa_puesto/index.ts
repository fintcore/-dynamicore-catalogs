import { createCatalog } from "../../core/createCatalog";
import type { PisaPuestoRecord } from "./types";
import data from "./data.json";

export type { PisaPuestoRecord };

export const pisaPuesto = createCatalog(data as PisaPuestoRecord[], "value");
