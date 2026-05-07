import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Multi-stream broadcasting desktop app. Ingest RTMP, mix, record, schedule, broadcast to many destinations at once.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0D55F6",
    icons: [
      { src: "/mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
    lang: "en",
    categories: ["productivity", "utilities", "multimedia"],
  };
}
