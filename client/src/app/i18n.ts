import * as querystring from "querystring";
import { getFirstValue } from "../utils/first-value";
import { getInArray } from "../utils/safe-get";
import { TRANSLATIONS } from "./translations";

export type ReplaceParams = Array<string | number> | { [key: string]: string };
const replaceMsgFormat = (input: any, args: ReplaceParams = []): string => {
  if (typeof input !== "string") {
    return input;
  }
  let result = input;
  Object.keys(args).forEach(key => {
    const regex = new RegExp(`\\{${key}\\}`, "g");
    result = result.replace(regex, args[key]);
  });
  return result;
};

export const DEFAULT_UI_LOCALE = "en";
const ALLOWED_LOCALES = Object.keys(TRANSLATIONS);

let globalUiLocale: string = DEFAULT_UI_LOCALE;

export function setGlobalUiLocale(locale: string) {
  globalUiLocale = locale;
}

export function setGlobalUiLocaleFromQueryString(queryString: string = "") {
  const parsedUrlQuery = querystring.parse(queryString.replace(/^\?/, ""));
  const locale = getFirstValue(parsedUrlQuery.locale);
  if (!!locale && ALLOWED_LOCALES.indexOf(locale) !== -1) {
    globalUiLocale = locale;
  }
}

export function getGlobalUiLocale() {
  return globalUiLocale;
}

export const i18n = function(msgKey: string, ...args: any[]) {
  return replaceMsgFormat(
    getInArray(TRANSLATIONS, [
      getGlobalUiLocale(),
      ...msgKey.trim().split(".")
    ]),
    args
  );
};
