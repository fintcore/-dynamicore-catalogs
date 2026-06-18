import { createCatalog } from "../../core/createCatalog";
import type { CountryMulawareRecord } from "./types";
import data from "./data.json";

export type { CountryMulawareRecord };

export const countryMulaware = createCatalog(data as CountryMulawareRecord[], "value");
