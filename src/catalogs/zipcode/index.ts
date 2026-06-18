import { createCatalog } from "../../core/createCatalog";
import type { ZipcodeRecord } from "./types";
import data from "./data.json";

export type { ZipcodeRecord };

export const zipcode = createCatalog(data as ZipcodeRecord[], "value");
