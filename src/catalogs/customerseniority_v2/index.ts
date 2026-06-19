import { createCatalog } from "../../core/createCatalog";
import type { CustomerseniorityV2Record } from "./types";
import data from "./data.json";

export type { CustomerseniorityV2Record };

export const customerseniorityV2 = createCatalog(data as CustomerseniorityV2Record[], "value");
