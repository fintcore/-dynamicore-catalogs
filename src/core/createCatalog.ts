import type { Catalog, CatalogRecord } from "./types";

export function createCatalog<T extends CatalogRecord, K extends keyof T>(
  data: T[],
  keyField: K
): Catalog<T, K> {
  return {
    getAll: () => data,

    getById: (id) => data.find((item) => item[keyField] === id),

    search: (query, fields) => {
      const q = query.toLowerCase();
      return data.filter((item) => {
        const keys = fields ?? (Object.keys(item) as (keyof T)[]);
        return keys.some((k) => String(item[k]).toLowerCase().includes(q));
      });
    },

    filter: (predicate) => data.filter(predicate),

    count: () => data.length,
  };
}
