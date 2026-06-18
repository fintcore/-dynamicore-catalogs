import { createCatalog } from "../../core/createCatalog";
import type { TransactionsorsendingchannelsSodaRecord } from "./types";
import data from "./data.json";

export type { TransactionsorsendingchannelsSodaRecord };

export const transactionsorsendingchannelsSoda = createCatalog(data as TransactionsorsendingchannelsSodaRecord[], "value");
