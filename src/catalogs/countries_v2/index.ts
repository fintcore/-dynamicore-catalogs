import { createCatalog } from "../../core/createCatalog";
import type { CountriesV2Record } from "./types";
import data from "./data.json";

export type { CountriesV2Record };

export const countriesV2 = createCatalog(data as CountriesV2Record[], "value");
