import { createCatalog } from "../../core/createCatalog";
import type { GuaratortypesSodaRecord } from "./types";
import data from "./data.json";

export type { GuaratortypesSodaRecord };

export const guaratortypesSoda = createCatalog(data as GuaratortypesSodaRecord[], "value");
