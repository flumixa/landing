"use client";

import { useLang } from "@/lib/LanguageContext";
import { SourcesScreen } from "./screens/SourcesScreen";
import { DestinationsScreen } from "./screens/DestinationsScreen";
import { RecordingsScreen } from "./screens/RecordingsScreen";

const SCREENS = [SourcesScreen, DestinationsScreen, RecordingsScreen];

export function Screenshots() {
  const { t } = useLang();
  return (
    <section className="gallery" id="screenshots">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t.shots.eyebrow}</div>
          <h2 className="section-title">{t.shots.title}</h2>
          <p className="section-sub">{t.shots.sub}</p>
        </div>
        <div>
          {t.shots.rows.map((r, i) => {
            const Screen = SCREENS[i];
            const flip = i % 2 === 1;
            return (
              <div className={`shot-row${flip ? " flip" : ""}`} key={r.t}>
                <div className="shot-text">
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <ul>
                    {r.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="shot">
                  <Screen />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
