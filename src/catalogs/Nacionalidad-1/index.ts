import { createCatalog } from "../../core/createCatalog";
import type { Nacionalidad1Record } from "./types";
import data from "./data.json";

export type { Nacionalidad1Record };

export const nacionalidad1 = createCatalog(data as Nacionalidad1Record[], "value");
