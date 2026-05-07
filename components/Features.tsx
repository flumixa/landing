"use client";

import { CalendarClock, CircleDot, RadioTower, Sliders, Split, Wifi } from "lucide-react";
import type { ComponentType } from "react";
import { useLang } from "@/lib/LanguageContext";
import type { FeatureIcon } from "@/lib/i18n";

const ICONS: Record<FeatureIcon, ComponentType<{ size?: number; strokeWidth?: number; "aria-hidden"?: boolean }>> = {
  "radio-tower": RadioTower,
  sliders: Sliders,
  "circle-dot": CircleDot,
  "calendar-clock": CalendarClock,
  split: Split,
  wifi: Wifi,
};

export function Features() {
  const { t } = useLang();
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.features.eyebrow}</div>
          <h2 className="section-title">{t.features.title}</h2>
          <p className="section-sub">{t.features.sub}</p>
        </div>
        <div className="feature-grid">
          {t.features.items.map((it) => {
            const Icon = ICONS[it.icon];
            return (
              <div className="feature" key={it.t}>
                <div className="ficon">
                  <Icon size={22} strokeWidth={2} aria-hidden />
                </div>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
