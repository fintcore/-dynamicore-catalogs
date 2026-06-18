import { createCatalog } from "../../core/createCatalog";
import type { NationalitySodaRecord } from "./types";
import data from "./data.json";

export type { NationalitySodaRecord };

export const nationalitySoda = createCatalog(data as NationalitySodaRecord[], "value");
