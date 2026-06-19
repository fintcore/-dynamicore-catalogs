import { createCatalog } from "../../core/createCatalog";
import type { ResourcedestinationV2Record } from "./types";
import data from "./data.json";

export type { ResourcedestinationV2Record };

export const resourcedestinationV2 = createCatalog(data as ResourcedestinationV2Record[], "value");
