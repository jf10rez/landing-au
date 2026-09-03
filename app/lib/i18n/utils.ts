import type { Locale } from "./config";

export const SITE_URL = "https://ilaxus.com";

type InterpolationValues = Record<string, string | number>;

export function format(message: string, values?: InterpolationValues): string {
  if (!values) return message;
  return message.replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
    values[key] !== undefined ? String(values[key]) : match,
  );
}

export function localizedHref(locale: Locale, href: string): string {
  if (href.startsWith("/")) {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  }
  return href;
}

export function canonicalPath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export function languagesFor(path = ""): Record<string, string> {
  return {
    en: `${SITE_URL}/en${path}`,
    es: `${SITE_URL}/es${path}`,
    "x-default": `${SITE_URL}/en${path}`,
  };
}