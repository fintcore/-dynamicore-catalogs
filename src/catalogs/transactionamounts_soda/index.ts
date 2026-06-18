import { createCatalog } from "../../core/createCatalog";
import type { TransactionamountsSodaRecord } from "./types";
import data from "./data.json";

export type { TransactionamountsSodaRecord };

export const transactionamountsSoda = createCatalog(data as TransactionamountsSodaRecord[], "value");
