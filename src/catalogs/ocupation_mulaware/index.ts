import { createCatalog } from "../../core/createCatalog";
import type { OcupationMulawareRecord } from "./types";
import data from "./data.json";

export type { OcupationMulawareRecord };

export const ocupationMulaware = createCatalog(data as OcupationMulawareRecord[], "value");
