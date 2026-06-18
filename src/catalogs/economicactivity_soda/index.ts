import { createCatalog } from "../../core/createCatalog";
import type { EconomicactivitySodaRecord } from "./types";
import data from "./data.json";

export type { EconomicactivitySodaRecord };

export const economicactivitySoda = createCatalog(data as EconomicactivitySodaRecord[], "value");
