import { createCatalog } from "../../core/createCatalog";
import type { EntidadFederativaRecord } from "./types";
import data from "./data.json";

export type { EntidadFederativaRecord };

export const entidadFederativa = createCatalog(data as EntidadFederativaRecord[], "value");
