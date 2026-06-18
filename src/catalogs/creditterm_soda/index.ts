import { createCatalog } from "../../core/createCatalog";
import type { CredittermSodaRecord } from "./types";
import data from "./data.json";

export type { CredittermSodaRecord };

export const credittermSoda = createCatalog(data as CredittermSodaRecord[], "value");
