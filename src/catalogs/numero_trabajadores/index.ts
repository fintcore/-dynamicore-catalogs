import { createCatalog } from "../../core/createCatalog";
import type { NumeroTrabajadoresRecord } from "./types";
import data from "./data.json";

export type { NumeroTrabajadoresRecord };

export const numeroTrabajadores = createCatalog(data as NumeroTrabajadoresRecord[], "value");
