"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CONSENT_COOKIE,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type ConsentRegime,
  type ConsentState,
  allConsent,
  defaultConsent,
  regimeFor,
} from "./consent";

interface CookieConsentValue {
  consent: ConsentState | null;
  bannerOpen: boolean;
  modalOpen: boolean;
  regime: ConsentRegime;
  country: string;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustom: (overrides: Partial<Omit<ConsentState, "version" | "timestamp" | "necessary">>) => void;
  openModal: () => void;
  closeModal: () => void;
}

const CookieConsentContext = createContext<CookieConsentValue | null>(null);

function readStored(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed?.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persist(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* Safari private mode / quota — ignore. */
  }
  // Mirror to cookie so server can read on next request if needed.
  try {
    const value = encodeURIComponent(JSON.stringify(state));
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; samesite=lax`;
  } catch {
    /* ignore */
  }
}

export function CookieConsentProvider({
  children,
  country,
}: {
  children: ReactNode;
  country: string;
}) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setConsent(readStored());
    setHydrated(true);
  }, []);

  // Cross-tab sync — listen for storage changes on the same key.
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== CONSENT_STORAGE_KEY) return;
      setConsent(readStored());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = useCallback((next: ConsentState) => {
    persist(next);
    setConsent(next);
    setModalOpen(false);
  }, []);

  const acceptAll = useCallback(() => update(allConsent()), [update]);
  const rejectAll = useCallback(() => update(defaultConsent()), [update]);

  const saveCustom = useCallback(
    (overrides: Partial<Omit<ConsentState, "version" | "timestamp" | "necessary">>) => {
      update({
        ...defaultConsent(),
        functional: overrides.functional === true,
        analytics: overrides.analytics === true,
        marketing: overrides.marketing === true,
      });
    },
    [update],
  );

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const value = useMemo<CookieConsentValue>(
    () => ({
      consent,
      bannerOpen: hydrated && consent === null,
      modalOpen,
      regime: regimeFor(country),
      country,
      acceptAll,
      rejectAll,
      saveCustom,
      openModal,
      closeModal,
    }),
    [consent, hydrated, modalOpen, country, acceptAll, rejectAll, saveCustom, openModal, closeModal],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useConsent(): CookieConsentValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <CookieConsentProvider>");
  return ctx;
}
