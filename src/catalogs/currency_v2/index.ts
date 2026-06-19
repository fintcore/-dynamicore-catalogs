import { createCatalog } from "../../core/createCatalog";
import type { CurrencyV2Record } from "./types";
import data from "./data.json";

export type { CurrencyV2Record };

export const currencyV2 = createCatalog(data as CurrencyV2Record[], "value");
