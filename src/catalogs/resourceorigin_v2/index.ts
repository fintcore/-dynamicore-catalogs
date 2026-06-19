import { createCatalog } from "../../core/createCatalog";
import type { ResourceoriginV2Record } from "./types";
import data from "./data.json";

export type { ResourceoriginV2Record };

export const resourceoriginV2 = createCatalog(data as ResourceoriginV2Record[], "value");
