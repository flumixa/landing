import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import { JsonLd } from "@/components/JsonLd";
import { YandexMetrika } from "@/components/YandexMetrika";
import { KEYWORDS_ALL, SEO_EN, SEO_RU, SITE } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { LANG_COOKIE } from "@/proxy";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

async function detectLang(): Promise<Lang> {
  const c = await cookies();
  const cookieLang = c.get(LANG_COOKIE)?.value;
  if (cookieLang === "en" || cookieLang === "ru") return cookieLang;
  const h = await headers();
  const al = (h.get("accept-language") || "").toLowerCase();
  return al.split(",").some((t) => t.trim().split(";")[0].startsWith("ru")) ? "ru" : "en";
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await detectLang();
  const seo = lang === "ru" ? SEO_RU : SEO_EN;
  const ogLocale = lang === "ru" ? "ru_RU" : "en_US";
  const altLocale = lang === "ru" ? "en_US" : "ru_RU";
  return {
    metadataBase: new URL(SITE.url),
    title: { default: seo.title, template: `%s — ${SITE.name}` },
    description: seo.description,
    keywords: KEYWORDS_ALL,
    authors: [{ name: SITE.author }],
    creator: SITE.author,
    publisher: SITE.author,
    applicationName: SITE.name,
    generator: "Next.js",
    category: "technology",
    classification: "Live streaming software",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
        "ru-RU": "/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: SITE.url,
      siteName: SITE.name,
      title: seo.ogTitle,
      description: seo.ogDescription,
      locale: ogLocale,
      alternateLocale: [altLocale],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Flumixa Media Server — Multi-stream broadcasting",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      creator: SITE.twitter,
      site: SITE.twitter,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: SITE.shortName,
      statusBarStyle: "default",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0B0D" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await detectLang();
  return (
    <html lang={lang} data-lang={lang} className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
        <JsonLd />
        <YandexMetrika />
      </body>
    </html>
  );
}
