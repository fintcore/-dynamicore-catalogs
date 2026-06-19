import { createCatalog } from "../../core/createCatalog";
import type { GuaranteesV2Record } from "./types";
import data from "./data.json";

export type { GuaranteesV2Record };

export const guaranteesV2 = createCatalog(data as GuaranteesV2Record[], "value");
