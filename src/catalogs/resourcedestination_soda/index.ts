import { createCatalog } from "../../core/createCatalog";
import type { ResourcedestinationSodaRecord } from "./types";
import data from "./data.json";

export type { ResourcedestinationSodaRecord };

export const resourcedestinationSoda = createCatalog(data as ResourcedestinationSodaRecord[], "value");
