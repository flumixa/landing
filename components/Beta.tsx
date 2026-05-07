"use client";

import { useLang } from "@/lib/LanguageContext";

export function Beta() {
  const { t } = useLang();
  return (
    <section className="beta-section" id="beta">
      <div className="container">
        <div className="beta-card">
          <span className="beta-badge">{t.beta.badge}</span>
          <h2>{t.beta.title}</h2>
          <p>{t.beta.body}</p>
          <div className="beta-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/flumixa/fms/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.beta.cta_download}
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/flumixa/fms/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.beta.cta_issues}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
