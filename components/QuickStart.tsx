"use client";

import { useLang } from "@/lib/LanguageContext";

export function QuickStart() {
  const { t } = useLang();
  return (
    <section id="quickstart">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.quickstart.eyebrow}</div>
          <h2 className="section-title">{t.quickstart.title}</h2>
          <p className="section-sub">{t.quickstart.sub}</p>
        </div>
        <div className="steps">
          {t.quickstart.steps.map((s) => (
            <div className="step" key={s.t}>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
