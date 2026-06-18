import { createCatalog } from "../../core/createCatalog";
import type { GuaranteesSodaRecord } from "./types";
import data from "./data.json";

export type { GuaranteesSodaRecord };

export const guaranteesSoda = createCatalog(data as GuaranteesSodaRecord[], "value");
