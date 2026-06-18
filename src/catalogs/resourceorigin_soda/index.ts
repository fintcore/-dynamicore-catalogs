import { createCatalog } from "../../core/createCatalog";
import type { ResourceoriginSodaRecord } from "./types";
import data from "./data.json";

export type { ResourceoriginSodaRecord };

export const resourceoriginSoda = createCatalog(data as ResourceoriginSodaRecord[], "value");
