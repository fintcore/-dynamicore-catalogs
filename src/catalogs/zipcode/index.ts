import { createCatalog } from "../../core/createCatalog";
import type { ZipcodeRecord } from "./types";
import data from "./data.json";

export type { ZipcodeRecord };

const base = createCatalog(data as ZipcodeRecord[], "codigo");

export const zipcode = {
  ...base,
  getByCode: (codigo: string): ZipcodeRecord[] =>
    (data as ZipcodeRecord[]).filter((r) => r.codigo === codigo),
};
