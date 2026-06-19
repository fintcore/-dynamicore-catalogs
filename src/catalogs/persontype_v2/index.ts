import { createCatalog } from "../../core/createCatalog";
import type { PersontypeV2Record } from "./types";
import data from "./data.json";

export type { PersontypeV2Record };

export const persontypeV2 = createCatalog(data as PersontypeV2Record[], "value");
