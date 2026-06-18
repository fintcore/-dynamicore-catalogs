import { createCatalog } from "../../core/createCatalog";
import type { TransactionalfrecuencySodaRecord } from "./types";
import data from "./data.json";

export type { TransactionalfrecuencySodaRecord };

export const transactionalfrecuencySoda = createCatalog(data as TransactionalfrecuencySodaRecord[], "value");
