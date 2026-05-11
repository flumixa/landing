import { NextResponse, type NextRequest } from "next/server";

export const LANG_COOKIE = "flumixa-lang";

function detectFromAcceptLanguage(header: string | null): "en" | "ru" {
  if (!header) return "en";
  const tags = header.toLowerCase().split(",").map((t) => t.trim().split(";")[0]);
  return tags.some((t) => t.startsWith("ru")) ? "ru" : "en";
}

export function proxy(req: NextRequest) {
  const existing = req.cookies.get(LANG_COOKIE)?.value;
  if (existing === "en" || existing === "ru") {
    return NextResponse.next();
  }

  const lang = detectFromAcceptLanguage(req.headers.get("accept-language"));

  // Mirror onto the incoming request so the layout's cookies() reads the fresh value.
  req.cookies.set(LANG_COOKIE, lang);
  const res = NextResponse.next({ request: { headers: req.headers } });
  res.cookies.set({
    name: LANG_COOKIE,
    value: lang,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|mark.svg|logo.svg|opengraph-image|twitter-image|robots.txt|sitemap.xml|manifest.webmanifest).*)",
  ],
};
