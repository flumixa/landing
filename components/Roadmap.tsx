"use client";

import { useLang } from "@/lib/LanguageContext";

export function Roadmap() {
  const { t } = useLang();
  return (
    <section id="roadmap">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.roadmap.eyebrow}</div>
          <h2 className="section-title">{t.roadmap.title}</h2>
          <p className="section-sub">{t.roadmap.sub}</p>
        </div>
        <div className="roadmap-grid">
          <div className="roadmap-col near">
            <h4>{t.roadmap.near_h}</h4>
            <ul>
              {t.roadmap.near.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-col mid">
            <h4>{t.roadmap.mid_h}</h4>
            <ul>
              {t.roadmap.mid.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
