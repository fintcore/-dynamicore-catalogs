import { createCatalog } from "../../core/createCatalog";
import type { StatesV2Record } from "./types";
import data from "./data.json";

export type { StatesV2Record };

export const statesV2 = createCatalog(data as StatesV2Record[], "value");
