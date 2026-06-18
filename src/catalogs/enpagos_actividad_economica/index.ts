import { createCatalog } from "../../core/createCatalog";
import type { EnpagosActividadEconomicaRecord } from "./types";
import data from "./data.json";

export type { EnpagosActividadEconomicaRecord };

export const enpagosActividadEconomica = createCatalog(data as EnpagosActividadEconomicaRecord[], "value");
