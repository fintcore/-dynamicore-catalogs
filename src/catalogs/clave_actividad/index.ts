import { createCatalog } from "../../core/createCatalog";
import type { ClaveActividadRecord } from "./types";
import data from "./data.json";

export type { ClaveActividadRecord };

export const claveActividad = createCatalog(data as ClaveActividadRecord[], "value");
