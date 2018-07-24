export const getFirstValue = (t: string | string[]): string =>
  Array.isArray(t) ? t[0] : t;
