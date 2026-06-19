import { createCatalog } from "../../core/createCatalog";
import type { NationalityV2Record } from "./types";
import data from "./data.json";

export type { NationalityV2Record };

export const nationalityV2 = createCatalog(data as NationalityV2Record[], "value");
