import { createCatalog } from "../../core/createCatalog";
import type { OrigenRecursoRecord } from "./types";
import data from "./data.json";

export type { OrigenRecursoRecord };

export const origenRecurso = createCatalog(data as OrigenRecursoRecord[], "value");
