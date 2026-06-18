export type CatalogRecord = object;

export interface Catalog<T extends CatalogRecord, K extends keyof T> {
  getAll(): T[];
  getById(id: T[K]): T | undefined;
  search(query: string, fields?: (keyof T)[]): T[];
  filter(predicate: (item: T) => boolean): T[];
  count(): number;
}
