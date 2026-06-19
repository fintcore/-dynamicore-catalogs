import { createCatalog } from "../../core/createCatalog";
import type { CredittermV2Record } from "./types";
import data from "./data.json";

export type { CredittermV2Record };

export const credittermV2 = createCatalog(data as CredittermV2Record[], "value");
