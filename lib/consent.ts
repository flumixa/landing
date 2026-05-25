import type { Lang } from "./i18n";

// Bump this when policy categories/processors change. All users see banner again.
export const CONSENT_VERSION = "2026-05-11";
export const CONSENT_STORAGE_KEY = "flumixa-consent";
export const CONSENT_COOKIE = "flumixa-consent";

export type ConsentRegime = "gdpr" | "ru" | "ccpa" | "default";

export type ConsentCategory = "necessary" | "functional" | "analytics" | "marketing";

export interface ConsentState {
  version: string;
  timestamp: number;
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const EU_EEA = new Set([
  // EU
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA non-EU
  "IS", "LI", "NO",
  // UK GDPR + PECR
  "GB", "UK",
  // Swiss FADP — close to GDPR
  "CH",
]);

export function regimeFor(country: string): ConsentRegime {
  if (!country) return "default";
  const cc = country.toUpperCase();
  if (EU_EEA.has(cc)) return "gdpr";
  if (cc === "RU") return "ru";
  if (cc === "US") return "ccpa";
  return "default";
}

export interface ConsentDict {
  bannerTitle: string;
  bannerMessageGdpr: string;
  bannerMessage: string; // ru regime
  bannerMessageCcpa: string;
  bannerMessageDefault: string;
  acceptAll: string;
  rejectAll: string;
  manage: string;
  save: string;
  footerLink: string;
  modalTitle: string;
  modalIntro: string;
  categoryNecessaryTitle: string;
  categoryNecessaryDesc: string;
  categoryFunctionalTitle: string;
  categoryFunctionalDesc: string;
  categoryAnalyticsTitle: string;
  categoryAnalyticsDesc: string;
  categoryMarketingTitle: string;
  categoryMarketingDesc: string;
  always: string;
}

export const CONSENT_DICT: Record<Lang, ConsentDict> = {
  en: {
    bannerTitle: "Cookies & privacy",
    bannerMessageGdpr:
      "We use cookies to remember your language and (optionally) measure how the page performs. Under the GDPR you control what runs: choose Necessary only, or Accept all. You can revisit this anytime via Cookie settings in the footer.",
    bannerMessage:
      "Мы используем cookies (Federal Law 152-FZ — persistent technical and analytics cookies count as personal data). Choose what you allow: Necessary only or Accept all. You can change this in Cookie settings.",
    bannerMessageCcpa:
      "We use cookies — including analytics. You can opt out of non-essential cookies by choosing Necessary only, or accept all to help us improve the site. Revisit anytime from Cookie settings.",
    bannerMessageDefault:
      "We use cookies to keep your preferences and measure how the page performs. Choose Necessary only, or Accept all. You can revisit this in Cookie settings.",
    acceptAll: "Accept all",
    rejectAll: "Necessary only",
    manage: "Preferences",
    save: "Save choices",
    footerLink: "Cookie settings",
    modalTitle: "Cookie preferences",
    modalIntro:
      "Toggle each category. Necessary cookies are always on — without them the site can't work.",
    categoryNecessaryTitle: "Strictly necessary",
    categoryNecessaryDesc:
      "Language preference, region detection, security. Cannot be disabled.",
    categoryFunctionalTitle: "Functional",
    categoryFunctionalDesc:
      "Remembered UI choices and preferences. Off by default.",
    categoryAnalyticsTitle: "Analytics",
    categoryAnalyticsDesc:
      "Yandex Metrika — anonymous traffic and interaction statistics so we can improve the site.",
    categoryMarketingTitle: "Marketing",
    categoryMarketingDesc:
      "Not used right now. Reserved for future ad-attribution or retargeting; we'll ask again before enabling.",
    always: "Always on",
  },
  ru: {
    bannerTitle: "Cookies и приватность",
    bannerMessageGdpr:
      "We use cookies for language preference and (optionally) site analytics. Under the GDPR you control what runs — choose Necessary only or Accept all. You can revisit this anytime via Cookie settings in the footer.",
    bannerMessage:
      "Мы используем cookies. По позиции Роскомнадзора и положениям 152-ФЗ долговременные технические и аналитические cookies относятся к персональным данным — поэтому спрашиваем согласие. Выберите: только необходимые или принять всё. Изменить выбор можно в «Настройки cookie» в футере.",
    bannerMessageCcpa:
      "Мы используем cookies, включая аналитику. Вы можете отключить необязательные — «Только необходимые», или принять всё. Изменить выбор можно в «Настройки cookie».",
    bannerMessageDefault:
      "Мы используем cookies, чтобы запомнить настройки и измерять работу сайта. Выберите «Только необходимые» или «Принять всё». Изменить выбор можно в «Настройки cookie».",
    acceptAll: "Принять всё",
    rejectAll: "Только необходимые",
    manage: "Настройки",
    save: "Сохранить выбор",
    footerLink: "Настройки cookie",
    modalTitle: "Настройки cookies",
    modalIntro:
      "Переключайте категории. Необходимые включены всегда — без них сайт работать не сможет.",
    categoryNecessaryTitle: "Строго необходимые",
    categoryNecessaryDesc:
      "Языковая настройка, определение региона, безопасность. Отключить нельзя.",
    categoryFunctionalTitle: "Функциональные",
    categoryFunctionalDesc:
      "Запоминание выборов и настроек интерфейса. По умолчанию выключено.",
    categoryAnalyticsTitle: "Аналитика",
    categoryAnalyticsDesc:
      "Яндекс Метрика — анонимная статистика по трафику и взаимодействиям, чтобы улучшать сайт.",
    categoryMarketingTitle: "Маркетинг",
    categoryMarketingDesc:
      "Сейчас не используется. Зарезервировано на будущее (атрибуция рекламы, ретаргетинг); запросим согласие повторно перед подключением.",
    always: "Всегда включено",
  },
};

export function defaultConsent(): ConsentState {
  return {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  };
}

export function allConsent(): ConsentState {
  return {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true,
  };
}

export function isCategoryAllowed(
  consent: ConsentState | null,
  category: ConsentCategory,
): boolean {
  if (category === "necessary") return true;
  if (!consent) return false;
  return consent[category] === true;
}
