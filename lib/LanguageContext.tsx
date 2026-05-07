"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DICT, type Dict, type Lang } from "./i18n";
import { SEO_EN, SEO_RU } from "./seo";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const COOKIE_NAME = "flumixa-lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function writeCookie(value: Lang) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export function LanguageProvider({ children, initialLang = "en" }: { children: ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.setAttribute("data-lang", lang);
      const seo = lang === "ru" ? SEO_RU : SEO_EN;
      document.title = seo.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", seo.description);
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    writeCookie(l);
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: DICT[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
