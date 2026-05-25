import { NextResponse, type NextRequest } from "next/server";

export const LANG_COOKIE = "flumixa-lang";
export const REGION_COOKIE = "flumixa-region";

function detectFromAcceptLanguage(header: string | null): "en" | "ru" {
  if (!header) return "en";
  const tags = header.toLowerCase().split(",").map((t) => t.trim().split(";")[0]);
  return tags.some((t) => t.startsWith("ru")) ? "ru" : "en";
}

function detectCountry(req: NextRequest): string {
  const headers = req.headers;
  const raw =
    headers.get("cf-ipcountry") ||
    headers.get("x-vercel-ip-country") ||
    headers.get("x-country-code") ||
    headers.get("x-real-ip-country") ||
    "";
  const cc = raw.toUpperCase();
  // Some CDNs return "XX" or "T1" for unknown / Tor — treat as empty.
  if (!cc || cc === "XX" || cc === "T1") return "";
  return cc;
}

export function proxy(req: NextRequest) {
  const existingLang = req.cookies.get(LANG_COOKIE)?.value;
  const existingRegion = req.cookies.get(REGION_COOKIE);

  const langValid = existingLang === "en" || existingLang === "ru";
  const needsLang = !langValid;
  const needsRegion = !existingRegion;

  if (!needsLang && !needsRegion) {
    return NextResponse.next();
  }

  const lang = langValid
    ? (existingLang as "en" | "ru")
    : detectFromAcceptLanguage(req.headers.get("accept-language"));
  const country = existingRegion?.value ?? detectCountry(req);

  // Mirror onto the incoming request so the layout's cookies() reads fresh values.
  req.cookies.set(LANG_COOKIE, lang);
  req.cookies.set(REGION_COOKIE, country);

  const res = NextResponse.next({ request: { headers: req.headers } });

  if (needsLang) {
    res.cookies.set({
      name: LANG_COOKIE,
      value: lang,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  if (needsRegion) {
    res.cookies.set({
      name: REGION_COOKIE,
      value: country,
      path: "/",
      sameSite: "lax",
      // Re-check daily — IP may change, but no need to hit upstream every request.
      maxAge: 60 * 60 * 24,
    });
  }
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|mark.svg|logo.svg|opengraph-image|twitter-image|robots.txt|sitemap.xml|manifest.webmanifest).*)",
  ],
};
