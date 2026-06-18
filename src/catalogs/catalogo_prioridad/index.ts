import { createCatalog } from "../../core/createCatalog";
import type { CatalogoPrioridadRecord } from "./types";
import data from "./data.json";

export type { CatalogoPrioridadRecord };

export const catalogoPrioridad = createCatalog(data as CatalogoPrioridadRecord[], "value");
