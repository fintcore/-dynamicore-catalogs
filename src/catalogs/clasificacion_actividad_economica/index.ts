import { createCatalog } from "../../core/createCatalog";
import type { ClasificacionActividadEconomicaRecord } from "./types";
import data from "./data.json";

export type { ClasificacionActividadEconomicaRecord };

export const clasificacionActividadEconomica = createCatalog(data as ClasificacionActividadEconomicaRecord[], "value");
