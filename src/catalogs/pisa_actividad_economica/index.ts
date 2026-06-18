import { createCatalog } from "../../core/createCatalog";
import type { PisaActividadEconomicaRecord } from "./types";
import data from "./data.json";

export type { PisaActividadEconomicaRecord };

export const pisaActividadEconomica = createCatalog(data as PisaActividadEconomicaRecord[], "value");
