export type MccLang = "es" | "en";

export interface MccRecord {
  id: number;
  mcc: string;
  edited_description: string;
  combined_description: string;
  usda_description: string;
  irs_description: string;
  irs_reportable: string;
}
