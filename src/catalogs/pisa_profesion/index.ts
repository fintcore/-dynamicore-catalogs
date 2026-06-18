import { createCatalog } from "../../core/createCatalog";
import type { PisaProfesionRecord } from "./types";
import data from "./data.json";

export type { PisaProfesionRecord };

export const pisaProfesion = createCatalog(data as PisaProfesionRecord[], "value");
