import { createCatalog } from "../../core/createCatalog";
import type { AgeorincorporationdateSodaRecord } from "./types";
import data from "./data.json";

export type { AgeorincorporationdateSodaRecord };

export const ageorincorporationdateSoda = createCatalog(data as AgeorincorporationdateSodaRecord[], "value");
