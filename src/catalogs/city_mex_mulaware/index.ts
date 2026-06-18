import { createCatalog } from "../../core/createCatalog";
import type { CityMexMulawareRecord } from "./types";
import data from "./data.json";

export type { CityMexMulawareRecord };

export const cityMexMulaware = createCatalog(data as CityMexMulawareRecord[], "value");
