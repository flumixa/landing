"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export function Nav() {
  const { lang, setLang, t } = useLang();
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top" aria-label="Flumixa">
          <Image src="/logo.svg" alt="Flumixa" width={125} height={56} priority />
        </a>
        <div className="nav-links">
          <a href="#features">{t.nav.features}</a>
          <a href="#screenshots">{t.nav.screenshots}</a>
          <a href="#install">{t.nav.install}</a>
          <a href="#roadmap">{t.nav.roadmap}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-spacer" />
        <div className="nav-actions">
          <div className="lang-toggle" role="tablist">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              type="button"
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={lang === "ru" ? "active" : ""}
              onClick={() => setLang("ru")}
              type="button"
              aria-pressed={lang === "ru"}
            >
              RU
            </button>
          </div>
          <a
            className="btn btn-ghost"
            href="https://github.com/flumixa/fms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="icon" aria-hidden />
            GitHub
          </a>
          <a
            className="btn btn-primary"
            href="https://github.com/flumixa/fms/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cta.download}
          </a>
        </div>
      </div>
    </nav>
  );
}
