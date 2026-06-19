import { createCatalog } from "../../core/createCatalog";
import type { TransactionsorsendingchannelsV2Record } from "./types";
import data from "./data.json";

export type { TransactionsorsendingchannelsV2Record };

export const transactionsorsendingchannelsV2 = createCatalog(data as TransactionsorsendingchannelsV2Record[], "value");
