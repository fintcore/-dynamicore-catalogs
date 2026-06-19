import { createCatalog } from "../../core/createCatalog";
import type { EconomicactivityV2Record } from "./types";
import data from "./data.json";

export type { EconomicactivityV2Record };

export const economicactivityV2 = createCatalog(data as EconomicactivityV2Record[], "value");
