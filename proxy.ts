import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"] as const;
const defaultLocale = "es";

function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language") ?? "";
  // Prefer Spanish for Spanish speakers; otherwise default to Spanish (firm language).
  if (/^es/i.test(accept)) return "es";
  if (/^en/i.test(accept)) return "en";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already has a locale prefix
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  // Redirect non-locale paths to default locale, but never touch Next internals
  const locale = getLocale(request);
  const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPath;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip internal Next paths, static files, and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico)$).*)",
  ],
};
