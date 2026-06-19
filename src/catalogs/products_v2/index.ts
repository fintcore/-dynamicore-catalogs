import { createCatalog } from "../../core/createCatalog";
import type { ProductsV2Record } from "./types";
import data from "./data.json";

export type { ProductsV2Record };

export const productsV2 = createCatalog(data as ProductsV2Record[], "value");
