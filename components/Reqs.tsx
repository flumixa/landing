"use client";

import { useLang } from "@/lib/LanguageContext";
import { OsIconEl } from "./icons/OsIcons";

export function Reqs() {
  const { t } = useLang();
  return (
    <section id="reqs">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.reqs.eyebrow}</div>
          <h2 className="section-title">{t.reqs.title}</h2>
          <p className="section-sub">{t.reqs.sub}</p>
        </div>
        <div className="reqs">
          <div className="reqs-row head">
            <span>{t.reqs.head.os}</span>
            <span>{t.reqs.head.ver}</span>
            <span className="reqs-note">{t.reqs.head.notes}</span>
          </div>
          {t.reqs.rows.map((r) => (
            <div className="reqs-row" key={r.os}>
              <span className="reqs-os">
                <span className="os-icon">
                  <OsIconEl name={r.icon} />
                </span>
                {r.os}
              </span>
              <span className="reqs-ver">{r.ver}</span>
              <span className="reqs-note">{r.notes}</span>
            </div>
          ))}
        </div>
        <p className="reqs-foot">{t.reqs.foot}</p>
      </div>
    </section>
  );
}
