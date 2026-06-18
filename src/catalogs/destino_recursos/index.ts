import { createCatalog } from "../../core/createCatalog";
import type { DestinoRecursosRecord } from "./types";
import data from "./data.json";

export type { DestinoRecursosRecord };

export const destinoRecursos = createCatalog(data as DestinoRecursosRecord[], "value");
