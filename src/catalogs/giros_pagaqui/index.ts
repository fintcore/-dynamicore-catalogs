import { createCatalog } from "../../core/createCatalog";
import type { GirosPagaquiRecord } from "./types";
import data from "./data.json";

export type { GirosPagaquiRecord };

export const girosPagaqui = createCatalog(data as GirosPagaquiRecord[], "value");
