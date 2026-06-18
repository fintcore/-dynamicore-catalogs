import { createCatalog } from "../../core/createCatalog";
import type { PersontypeSodaRecord } from "./types";
import data from "./data.json";

export type { PersontypeSodaRecord };

export const persontypeSoda = createCatalog(data as PersontypeSodaRecord[], "value");
