import type { Locale } from "./config";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

export type Messages = typeof en;

const dictionaries: Record<Locale, Messages> = { en, es };

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale] ?? en;
}