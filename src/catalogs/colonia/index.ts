import { createCatalog } from "../../core/createCatalog";
import type { ColoniaRecord } from "./types";
import data from "./data.json";

export type { ColoniaRecord };

export const colonia = createCatalog(data as ColoniaRecord[], "value");
