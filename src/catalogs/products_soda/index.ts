import { createCatalog } from "../../core/createCatalog";
import type { ProductsSodaRecord } from "./types";
import data from "./data.json";

export type { ProductsSodaRecord };

export const productsSoda = createCatalog(data as ProductsSodaRecord[], "value");
