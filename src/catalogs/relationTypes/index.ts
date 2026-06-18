import { createCatalog } from "../../core/createCatalog";
import type { RelationTypesRecord } from "./types";
import data from "./data.json";

export type { RelationTypesRecord };

export const relationTypes = createCatalog(data as RelationTypesRecord[], "value");
