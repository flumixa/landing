"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { useConsent } from "@/lib/CookieConsentContext";
import { CONSENT_DICT, type ConsentRegime } from "@/lib/consent";
import { CookieSettingsModal } from "./CookieSettingsModal";

function messageFor(regime: ConsentRegime, t: typeof CONSENT_DICT.en): string {
  if (regime === "gdpr") return t.bannerMessageGdpr;
  if (regime === "ru") return t.bannerMessage;
  if (regime === "ccpa") return t.bannerMessageCcpa;
  return t.bannerMessageDefault;
}

export function CookieConsentBanner() {
  const { lang } = useLang();
  const { bannerOpen, modalOpen, regime, acceptAll, rejectAll, openModal } = useConsent();
  const t = CONSENT_DICT[lang];

  // Tiny delay so the banner doesn't flash before LCP renders.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!bannerOpen) {
      setVisible(false);
      return;
    }
    const id = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(id);
  }, [bannerOpen]);

  return (
    <>
      <CookieSettingsModal />
      {bannerOpen && visible && !modalOpen && (
        <div className="consent-banner" role="dialog" aria-label={t.bannerTitle}>
          <div className="container consent-banner-inner">
            <div className="consent-banner-text">
              <strong>{t.bannerTitle}</strong>
              <p>{messageFor(regime, t)}</p>
            </div>
            <div className="consent-banner-actions">
              <button type="button" className="btn btn-secondary" onClick={rejectAll}>
                {t.rejectAll}
              </button>
              <button type="button" className="btn btn-secondary" onClick={openModal}>
                {t.manage}
              </button>
              <button type="button" className="btn btn-primary" onClick={acceptAll}>
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
