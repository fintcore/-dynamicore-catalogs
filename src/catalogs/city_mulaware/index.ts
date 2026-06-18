import { createCatalog } from "../../core/createCatalog";
import type { CityMulawareRecord } from "./types";
import data from "./data.json";

export type { CityMulawareRecord };

export const cityMulaware = createCatalog(data as CityMulawareRecord[], "value");
