import { createCatalog } from "../../core/createCatalog";
import type { EnpagosMunicupioRecord } from "./types";
import data from "./data.json";

export type { EnpagosMunicupioRecord };

export const enpagosMunicupio = createCatalog(data as EnpagosMunicupioRecord[], "value");
