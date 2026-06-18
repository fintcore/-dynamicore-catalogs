import { createCatalog } from "../../core/createCatalog";
import type { CcPaisRecord } from "./types";
import data from "./data.json";

export type { CcPaisRecord };

export const ccPais = createCatalog(data as CcPaisRecord[], "value");
