import { createCatalog } from "../../core/createCatalog";
import type { CountriesSodaRecord } from "./types";
import data from "./data.json";

export type { CountriesSodaRecord };

export const countriesSoda = createCatalog(data as CountriesSodaRecord[], "value");
