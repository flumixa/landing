"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.faq.eyebrow}</div>
          <h2 className="section-title">{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={it.q}>
              <button
                className="faq-q"
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{it.q}</span>
                <ChevronDown className="chev" aria-hidden />
              </button>
              <div className="faq-a" dangerouslySetInnerHTML={{ __html: it.a }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
