import { createCatalog } from "../../core/createCatalog";
import type { ZipcodeMulawareRecord } from "./types";
import data from "./data.json";

export type { ZipcodeMulawareRecord };

export const zipcodeMulaware = createCatalog(data as ZipcodeMulawareRecord[], "value");
