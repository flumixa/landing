import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#features", "#screenshots", "#install", "#roadmap", "#faq"];
  return sections.map((hash) => ({
    url: `${SITE.url}/${hash}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: hash === "" ? 1 : 0.7,
    alternates: {
      languages: {
        "en-US": `${SITE.url}/${hash}`,
        "ru-RU": `${SITE.url}/${hash}`,
      },
    },
  }));
}
