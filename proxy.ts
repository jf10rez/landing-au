import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/app/lib/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest, pathLocale?: string): Locale {
  if (pathLocale && isLocale(pathLocale)) return pathLocale;

  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const first = acceptLanguage.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";

  if (first.startsWith("es")) return "es";
  if (first.startsWith("en")) return "en";

  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, locale, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    });
    return response;
  }

  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl, 308);
  response.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  // Run on app routes only: skip API, Next internals and static assets.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};