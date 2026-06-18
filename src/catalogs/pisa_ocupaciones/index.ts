import { createCatalog } from "../../core/createCatalog";
import type { PisaOcupacionesRecord } from "./types";
import data from "./data.json";

export type { PisaOcupacionesRecord };

export const pisaOcupaciones = createCatalog(data as PisaOcupacionesRecord[], "value");
