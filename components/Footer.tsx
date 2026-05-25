"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { useConsent } from "@/lib/CookieConsentContext";
import { CONSENT_DICT } from "@/lib/consent";

export function Footer() {
  const { lang, t } = useLang();
  const { openModal } = useConsent();
  const tc = CONSENT_DICT[lang];
  const link = ([label, href]: [string, string]) => (
    <li key={label}>
      <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {label}
      </a>
    </li>
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Image src="/logo.svg" alt="Flumixa" width={98} height={44} />
            <p>{t.footer.tagline}</p>
          </div>
          <div className="foot-col">
            <h5>{t.footer.product_h}</h5>
            <ul>{t.footer.product.map(link)}</ul>
          </div>
          <div className="foot-col">
            <h5>{t.footer.community_h}</h5>
            <ul>{t.footer.community.map(link)}</ul>
          </div>
          <div className="foot-col">
            <h5>{t.footer.docs_h}</h5>
            <ul>{t.footer.docs.map(link)}</ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.footer.copy}</span>
          <button type="button" className="foot-cookie-link" onClick={openModal}>
            {tc.footerLink}
          </button>
          <span>{t.footer.version}</span>
        </div>
      </div>
    </footer>
  );
}
