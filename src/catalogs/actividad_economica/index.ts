import { createCatalog } from "../../core/createCatalog";
import type { ActividadEconomicaRecord } from "./types";
import data from "./data.json";

export type { ActividadEconomicaRecord };

export const actividadEconomica = createCatalog(data as ActividadEconomicaRecord[], "value");
