import { SEO_EN, SITE } from "@/lib/seo";

export function JsonLd() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    alternateName: "Flumixa FMS",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Live streaming software",
    operatingSystem: "macOS, Windows, Linux",
    description: SEO_EN.description,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    softwareVersion: "0.1",
    releaseNotes: `${SITE.url}/#roadmap`,
    downloadUrl: "https://github.com/flumixa/fms/releases",
    installUrl: "https://github.com/flumixa/fms#installation",
    license: "https://github.com/flumixa/fms",
    isAccessibleForFree: true,
    inLanguage: ["en", "ru"],
    author: {
      "@type": "Person",
      name: SITE.author,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: undefined,
    featureList: [
      "Multi-source RTMP ingest",
      "A/V mixer with sync offset",
      "One-click recording to MP4",
      "One-shot and recurring scheduler",
      "Multi-destination broadcast (YouTube, Twitch, Kick, RTMP)",
      "LAN preview over HLS",
    ],
    screenshot: [`${SITE.url}/opengraph-image`],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    sameAs: ["https://github.com/flumixa/fms"],
    founder: { "@type": "Person", name: SITE.author },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: ["en", "ru"],
    publisher: { "@type": "Organization", name: SITE.shortName },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "During public beta — yes, fully free with no limits. Eventually FMS will move to a freemium model. The free tier will retain core mixing, streaming, and recording.",
        },
      },
      {
        "@type": "Question",
        name: "How does this compare to OBS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OBS is a single-machine production switcher with a scene composer. FMS is a media server: it ingests RTMP from upstream encoders, mixes/records/schedules them, and pushes to multiple destinations.",
        },
      },
      {
        "@type": "Question",
        name: "Where are recordings saved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A folder you choose, set in Recordings → Change folder. Default is your OS’s Videos directory. Files are written as native MP4 with full broadcast quality.",
        },
      },
      {
        "@type": "Question",
        name: "How many destinations can I push to at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No hard limit. The practical cap is your upstream bandwidth — each destination gets the full encoded stream.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
