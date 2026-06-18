import { createCatalog } from "../../core/createCatalog";
import type { TipoOperacionRecord } from "./types";
import data from "./data.json";

export type { TipoOperacionRecord };

export const tipoOperacion = createCatalog(data as TipoOperacionRecord[], "value");
