import { createCatalog } from "../../core/createCatalog";
import type { StatesRecord } from "./types";
import data from "./data.json";

export type { StatesRecord };

export const states = createCatalog(data as StatesRecord[], "value");
