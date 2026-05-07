"use client";

import { Download as DownloadIcon, Github } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { PipelineSvg } from "./PipelineSvg";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="hero-pill">
          <span className="beta-tag">{t.hero.pill_beta}</span>
          <span className="free-tag">{t.hero.pill_free}</span>
        </span>
        <h1>
          <span>{t.hero.h1_pre}</span>
          <br />
          <span className="grad">{t.hero.h1_grad}</span>
        </h1>
        <p className="lede">{t.hero.lede}</p>
        <div className="hero-cta">
          <a
            className="btn btn-primary btn-lg"
            href="https://github.com/flumixa/fms/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon className="icon" aria-hidden />
            <span>{t.hero.cta_primary}</span>
          </a>
          <a
            className="btn btn-secondary btn-lg"
            href="https://github.com/flumixa/fms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="icon" aria-hidden />
            <span>{t.hero.cta_secondary}</span>
          </a>
        </div>
        <div className="hero-meta">
          <span><strong>{t.hero.meta_platforms}</strong></span>
          <span className="dot">·</span>
          <span>{t.hero.meta_size}</span>
          <span className="dot">·</span>
          <span>{t.hero.meta_lang}</span>
        </div>
        <div className="pipeline-wrap">
          <PipelineSvg />
        </div>
      </div>
    </section>
  );
}
