import { createCatalog } from "../../core/createCatalog";
import type { PrioridadRecord } from "./types";
import data from "./data.json";

export type { PrioridadRecord };

export const prioridad = createCatalog(data as PrioridadRecord[], "value");
