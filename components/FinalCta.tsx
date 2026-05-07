"use client";

import { useLang } from "@/lib/LanguageContext";

export function FinalCta() {
  const { t } = useLang();
  return (
    <section className="final-cta">
      <div className="container">
        <h2>{t.finalcta.title}</h2>
        <p>{t.finalcta.sub}</p>
        <div className="ctas">
          <a
            className="btn btn-primary btn-lg"
            href="https://github.com/flumixa/fms/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.finalcta.cta_dl}
          </a>
          <a
            className="btn btn-secondary btn-lg"
            href="https://github.com/flumixa/fms"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.finalcta.cta_gh}
          </a>
        </div>
      </div>
    </section>
  );
}
