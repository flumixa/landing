"use client";

import { Download as DownloadIcon } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { OsIconEl } from "./icons/OsIcons";

export function Download() {
  const { t } = useLang();
  return (
    <section className="download" id="install">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.download.eyebrow}</div>
          <h2 className="section-title">{t.download.title}</h2>
          <p className="section-sub">{t.download.sub}</p>
        </div>
        <div className="dl-grid">
          {t.download.cards.map((c) => (
            <div className="dl-card" key={c.os}>
              <div className="os-mark">
                <OsIconEl name={c.icon} />
              </div>
              <div>
                <h4>{c.os}</h4>
                <div className="arch">{c.arch}</div>
              </div>
              <p>{c.desc}</p>
              <a
                className="btn btn-primary"
                href="https://github.com/flumixa/fms/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon className="icon" aria-hidden />
                <span>{t.cta.download}</span>
              </a>
              <div className="filename">{c.file}</div>
            </div>
          ))}
        </div>
        <p className="dl-docs">
          <a href="https://github.com/flumixa/fms#installation" target="_blank" rel="noopener noreferrer">
            {t.download.docs}
          </a>
        </p>
      </div>
    </section>
  );
}
