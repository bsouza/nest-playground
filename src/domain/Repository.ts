export interface Repository<T> {
  add(t: T): T;
  remove(t: T): boolean;
  first(): T | null;
  all(): readonly T[];
}
