import { createCatalog } from "../../core/createCatalog";
import type { SubclasificacionActividadRecord } from "./types";
import data from "./data.json";

export type { SubclasificacionActividadRecord };

export const subclasificacionActividad = createCatalog(data as SubclasificacionActividadRecord[], "value");
