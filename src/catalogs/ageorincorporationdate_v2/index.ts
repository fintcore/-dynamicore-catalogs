import { createCatalog } from "../../core/createCatalog";
import type { AgeorincorporationdateV2Record } from "./types";
import data from "./data.json";

export type { AgeorincorporationdateV2Record };

export const ageorincorporationdateV2 = createCatalog(data as AgeorincorporationdateV2Record[], "value");
