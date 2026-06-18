import { createCatalog } from "../../core/createCatalog";
import type { ActividadesVulnerablesRecord } from "./types";
import data from "./data.json";

export type { ActividadesVulnerablesRecord };

export const actividadesVulnerables = createCatalog(data as ActividadesVulnerablesRecord[], "value");
