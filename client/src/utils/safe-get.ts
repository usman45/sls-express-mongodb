export const getInArray = (object: any, paths: Array<string>) => {
  let index = 0;
  while (object != null && index < paths.length) {
    object = object[paths[index++]];
  }
  return index && index === paths.length ? object : undefined;
};

export type Maybe<T> = T | undefined;

/**
 * Safely gets a deep value with type-safe key references.
 * @param {T | undefined} obj the root object to traverse
 * @param {K} key the key of the object to get
 * @return {Maybe<T[K][L][M]>} the possible return value at the end of the reference
 */
export function safeGet<T, K extends keyof Required<T>>(
  obj: T | undefined,
  key: K
): Maybe<Required<T>[K]>;
export function safeGet<
  T,
  K extends keyof Required<T>,
  L extends keyof Required<Required<T>[K]>
>(obj: T | undefined, key: K, key2: L): Maybe<Required<Required<T>[K]>[L]>;
export function safeGet<
  T,
  K extends keyof Required<T>,
  L extends keyof Required<Required<T>[K]>,
  M extends keyof Required<Required<Required<T>[K]>[L]>
>(
  obj: T | undefined,
  key: K,
  key2: L,
  key3: M
): Maybe<Required<Required<Required<T>[K]>[L]>[M]>;
export function safeGet(obj: any, ...keys: string[]) {
  return getInArray(obj, keys);
}
