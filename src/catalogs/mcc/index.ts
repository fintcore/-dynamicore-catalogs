import { createCatalog } from "../../core/createCatalog";
import type { MccRecord, MccLang } from "./types";
import dataEs from "./data_es.json";
import dataEn from "./data_en.json";

export type { MccRecord, MccLang };

const datasets: Record<MccLang, MccRecord[]> = {
  es: dataEs as MccRecord[],
  en: dataEn as MccRecord[],
};

export function mcc(lang: MccLang = "es") {
  return createCatalog(datasets[lang], "mcc");
}
