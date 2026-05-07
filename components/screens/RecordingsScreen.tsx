export function RecordingsScreen() {
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="600" height="380" fill="#FAFBFC" />
      <rect x="0" y="0" width="600" height="40" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="16" y="13" width="60" height="14" rx="3" fill="#0D55F6" />
      <rect x="0" y="40" width="120" height="340" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="8" y="116" width="104" height="22" rx="4" fill="#E5EDFE" />
      <text x="20" y="131" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0838A6">Recordings</text>
      <rect x="140" y="56" width="444" height="40" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="148" y="64" width="48" height="24" rx="12" fill="#E5EDFE" />
      <text x="172" y="80" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#0838A6">All</text>
      <rect x="200" y="64" width="62" height="24" rx="12" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="231" y="80" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="#4A5160">Saved</text>
      <rect x="266" y="64" width="62" height="24" rx="12" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="297" y="80" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="#4A5160">Failed</text>
      <rect x="490" y="64" width="86" height="24" rx="4" fill="#E5484D" />
      <circle cx="504" cy="76" r="4" fill="#fff" />
      <text x="514" y="80" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#fff">Record</text>
      <g transform="translate(140, 108)">
        <rect width="444" height="56" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
        <rect x="12" y="12" width="60" height="32" rx="3" fill="#14161A" />
        <circle cx="42" cy="28" r="6" fill="none" stroke="#fff" strokeWidth="1.5" />
        <path d="M 39 25 L 46 28 L 39 31 Z" fill="#fff" />
        <text x="84" y="28" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">2026-05-07_evening-show.mp4</text>
        <text x="84" y="42" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">1080p30 · H.264 · 1.4 GB · 47:21</text>
        <rect x="346" y="20" width="50" height="18" rx="9" fill="#E5FEEA" />
        <text x="371" y="32" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#19794D">saved</text>
        <text x="404" y="33" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">19:42</text>
      </g>
      <g transform="translate(140, 172)">
        <rect width="444" height="56" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
        <rect x="12" y="12" width="60" height="32" rx="3" fill="#14161A" />
        <circle cx="42" cy="28" r="3" fill="#E5484D">
          <animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="84" y="28" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">2026-05-07_live-feed.mp4</text>
        <text x="84" y="42" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">1080p30 · recording · 02:14:37</text>
        <rect x="334" y="20" width="62" height="18" rx="9" fill="#FCE5E5" />
        <circle cx="346" cy="29" r="3" fill="#E5484D" />
        <text x="380" y="32" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#9F2126">live</text>
      </g>
      <g transform="translate(140, 236)">
        <rect width="444" height="56" rx="6" fill="#FFFFFF" stroke="#E3E5EA" />
        <rect x="12" y="12" width="60" height="32" rx="3" fill="#14161A" />
        <circle cx="42" cy="28" r="6" fill="none" stroke="#fff" strokeWidth="1.5" />
        <path d="M 39 25 L 46 28 L 39 31 Z" fill="#fff" />
        <text x="84" y="28" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#14161A">2026-05-06_morning.mp4</text>
        <text x="84" y="42" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">720p60 · H.264 · 820 MB · 28:04</text>
        <rect x="346" y="20" width="50" height="18" rx="9" fill="#E5FEEA" />
        <text x="371" y="32" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#19794D">saved</text>
        <text x="404" y="33" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">10:05</text>
      </g>
      <text x="148" y="316" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#7B8290" letterSpacing="1">FOLDER</text>
      <text x="148" y="334" fontFamily="JetBrains Mono" fontSize="11" fill="#14161A">~/Videos/Flumixa/</text>
      <text x="148" y="350" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">12 files · 18.4 GB · 124 GB free</text>
    </svg>
  );
}
