import { createCatalog } from "../../core/createCatalog";
import type { CustomersenioritySodaRecord } from "./types";
import data from "./data.json";

export type { CustomersenioritySodaRecord };

export const customersenioritySoda = createCatalog(data as CustomersenioritySodaRecord[], "value");
