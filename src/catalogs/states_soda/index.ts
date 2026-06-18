import { createCatalog } from "../../core/createCatalog";
import type { StatesSodaRecord } from "./types";
import data from "./data.json";

export type { StatesSodaRecord };

export const statesSoda = createCatalog(data as StatesSodaRecord[], "value");
