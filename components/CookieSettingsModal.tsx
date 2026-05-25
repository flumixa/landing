"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { useConsent } from "@/lib/CookieConsentContext";
import { CONSENT_DICT } from "@/lib/consent";

export function CookieSettingsModal() {
  const { lang } = useLang();
  const { consent, modalOpen, closeModal, saveCustom } = useConsent();
  const t = CONSENT_DICT[lang];

  const [functional, setFunctional] = useState(consent?.functional === true);
  const [analytics, setAnalytics] = useState(consent?.analytics === true);
  const [marketing, setMarketing] = useState(consent?.marketing === true);

  // Re-sync local toggles when the modal opens (in case consent changed elsewhere).
  useEffect(() => {
    if (modalOpen) {
      setFunctional(consent?.functional === true);
      setAnalytics(consent?.analytics === true);
      setMarketing(consent?.marketing === true);
    }
  }, [modalOpen, consent]);

  // Close on Escape.
  useEffect(() => {
    if (!modalOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, closeModal]);

  if (!modalOpen) return null;

  function handleSave() {
    saveCustom({ functional, analytics, marketing });
  }

  return (
    <div
      className="consent-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-modal-title"
      onClick={closeModal}
    >
      <div className="consent-modal" onClick={(e) => e.stopPropagation()}>
        <header className="consent-modal-header">
          <h2 id="consent-modal-title">{t.modalTitle}</h2>
          <button
            type="button"
            className="consent-modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </header>
        <p className="consent-modal-intro">{t.modalIntro}</p>

        <ul className="consent-categories">
          <li>
            <div className="consent-category-text">
              <div className="consent-category-head">
                <span className="consent-category-title">{t.categoryNecessaryTitle}</span>
                <span className="consent-badge">{t.always}</span>
              </div>
              <p>{t.categoryNecessaryDesc}</p>
            </div>
            <span className="consent-switch consent-switch-locked" aria-disabled="true" />
          </li>

          <ConsentRow
            title={t.categoryFunctionalTitle}
            desc={t.categoryFunctionalDesc}
            value={functional}
            onChange={setFunctional}
          />
          <ConsentRow
            title={t.categoryAnalyticsTitle}
            desc={t.categoryAnalyticsDesc}
            value={analytics}
            onChange={setAnalytics}
          />
          <ConsentRow
            title={t.categoryMarketingTitle}
            desc={t.categoryMarketingDesc}
            value={marketing}
            onChange={setMarketing}
          />
        </ul>

        <footer className="consent-modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeModal}>
            {t.manage}
          </button>
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            {t.save}
          </button>
        </footer>
      </div>
    </div>
  );
}

function ConsentRow({
  title,
  desc,
  value,
  onChange,
}: {
  title: string;
  desc: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <li>
      <div className="consent-category-text">
        <div className="consent-category-head">
          <span className="consent-category-title">{title}</span>
        </div>
        <p>{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        className={`consent-switch${value ? " on" : ""}`}
        onClick={() => onChange(!value)}
      >
        <span className="consent-switch-thumb" />
      </button>
    </li>
  );
}
