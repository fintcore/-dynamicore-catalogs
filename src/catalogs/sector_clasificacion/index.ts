import { createCatalog } from "../../core/createCatalog";
import type { SectorClasificacionRecord } from "./types";
import data from "./data.json";

export type { SectorClasificacionRecord };

export const sectorClasificacion = createCatalog(data as SectorClasificacionRecord[], "value");
