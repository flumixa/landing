export function SourcesScreen() {
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="600" height="380" fill="#FAFBFC" />
      <rect x="0" y="0" width="600" height="40" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="16" y="13" width="60" height="14" rx="3" fill="#0D55F6" />
      <rect x="510" y="11" width="74" height="18" rx="4" fill="#0D55F6" />
      <text x="547" y="24" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#fff">GO LIVE</text>
      <rect x="0" y="40" width="120" height="340" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="8" y="52" width="104" height="22" rx="4" fill="#E5EDFE" />
      <text x="20" y="67" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0838A6">Sources</text>
      <text x="20" y="92" fontFamily="Inter" fontSize="10" fill="#7B8290">Mixer</text>
      <text x="20" y="112" fontFamily="Inter" fontSize="10" fill="#7B8290">Recordings</text>
      <text x="20" y="132" fontFamily="Inter" fontSize="10" fill="#7B8290">Schedule</text>
      <text x="20" y="152" fontFamily="Inter" fontSize="10" fill="#7B8290">Destinations</text>
      <rect x="136" y="56" width="190" height="60" rx="6" fill="#FFFFFF" stroke="#0D55F6" strokeWidth="1.5" />
      <rect x="144" y="64" width="44" height="44" rx="3" fill="#14161A" />
      <circle cx="178" cy="74" r="3" fill="#E5484D">
        <animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <text x="196" y="78" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">Camera A</text>
      <text x="196" y="92" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">RTMP · 1080p30</text>
      <text x="196" y="106" fontFamily="JetBrains Mono" fontSize="9" fill="#2BB673">5.9 Mbps · 0 drops</text>
      <rect x="136" y="124" width="190" height="60" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="144" y="132" width="44" height="44" rx="3" fill="#14161A" />
      <circle cx="178" cy="142" r="3" fill="#E5484D" />
      <text x="196" y="146" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">Camera B</text>
      <text x="196" y="160" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">RTMP · 720p30</text>
      <text x="196" y="174" fontFamily="JetBrains Mono" fontSize="9" fill="#2BB673">3.2 Mbps · 0 drops</text>
      <rect x="136" y="192" width="190" height="60" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="144" y="200" width="44" height="44" rx="3" fill="#14161A" />
      <text x="196" y="214" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">intro.mp4</text>
      <text x="196" y="228" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">File · loop</text>
      <text x="196" y="242" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">04:23 / 12:00</text>
      <rect x="340" y="56" width="244" height="160" rx="6" fill="#0A0B0D" />
      <text x="356" y="74" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#fff" opacity=".7">PREVIEW</text>
      <circle cx="462" cy="140" r="20" fill="none" stroke="#fff" strokeWidth="2" opacity=".4" />
      <path d="M 458 132 L 470 140 L 458 148 Z" fill="#fff" opacity=".6" />
      <rect x="346" y="200" width="80" height="10" rx="2" fill="#E5484D" />
      <text x="386" y="208" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fontWeight="700" fill="#fff">LIVE 1080p</text>
      <rect x="340" y="226" width="116" height="60" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="350" y="244" fontFamily="JetBrains Mono" fontSize="8" fill="#7B8290">FPS</text>
      <text x="350" y="266" fontFamily="Inter" fontSize="18" fontWeight="700" fill="#14161A">29.97</text>
      <rect x="468" y="226" width="116" height="60" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="478" y="244" fontFamily="JetBrains Mono" fontSize="8" fill="#7B8290">BITRATE</text>
      <text x="478" y="266" fontFamily="Inter" fontSize="18" fontWeight="700" fill="#14161A">5.9</text>
      <text x="513" y="266" fontFamily="JetBrains Mono" fontSize="11" fill="#7B8290">Mbps</text>
      <rect x="340" y="296" width="244" height="60" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="350" y="314" fontFamily="JetBrains Mono" fontSize="8" fill="#7B8290">UPTIME</text>
      <text x="350" y="336" fontFamily="Inter" fontSize="18" fontWeight="700" fill="#14161A">02:14:37</text>
    </svg>
  );
}
