import { createCatalog } from "../../core/createCatalog";
import type { TaxonomyRecord } from "./types";
import data from "./data.json";

export type { TaxonomyRecord };

export const taxonomy = createCatalog(data as TaxonomyRecord[], "value");
