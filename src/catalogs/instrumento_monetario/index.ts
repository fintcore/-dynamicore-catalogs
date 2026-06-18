import { createCatalog } from "../../core/createCatalog";
import type { InstrumentoMonetarioRecord } from "./types";
import data from "./data.json";

export type { InstrumentoMonetarioRecord };

export const instrumentoMonetario = createCatalog(data as InstrumentoMonetarioRecord[], "value");
