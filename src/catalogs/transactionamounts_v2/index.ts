import { createCatalog } from "../../core/createCatalog";
import type { TransactionamountsV2Record } from "./types";
import data from "./data.json";

export type { TransactionamountsV2Record };

export const transactionamountsV2 = createCatalog(data as TransactionamountsV2Record[], "value");
