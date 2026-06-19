import { createCatalog } from "../../core/createCatalog";
import type { GuaratortypesV2Record } from "./types";
import data from "./data.json";

export type { GuaratortypesV2Record };

export const guaratortypesV2 = createCatalog(data as GuaratortypesV2Record[], "value");
