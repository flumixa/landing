"use client";

import { useConsent } from "@/lib/CookieConsentContext";
import { isCategoryAllowed } from "@/lib/consent";
import { YandexMetrika } from "./YandexMetrika";

export function YandexMetrikaIfConsented() {
  const { consent } = useConsent();
  if (!isCategoryAllowed(consent, "analytics")) return null;
  return <YandexMetrika />;
}
