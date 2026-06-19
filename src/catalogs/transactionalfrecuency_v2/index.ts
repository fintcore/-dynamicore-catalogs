import { createCatalog } from "../../core/createCatalog";
import type { TransactionalfrecuencyV2Record } from "./types";
import data from "./data.json";

export type { TransactionalfrecuencyV2Record };

export const transactionalfrecuencyV2 = createCatalog(data as TransactionalfrecuencyV2Record[], "value");
