export function PipelineSvg() {
  return (
    <svg viewBox="0 0 1100 360" xmlns="http://www.w3.org/2000/svg" id="pipeline-svg" aria-hidden>
      <defs>
        <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0D55F6" stopOpacity="0.20" />
          <stop offset="50%" stopColor="#0D55F6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0D55F6" stopOpacity="0.20" />
        </linearGradient>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path id="wL1" d="M 200 80 C 320 80, 380 180, 500 180" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />
      <path id="wL2" d="M 200 180 C 320 180, 380 180, 500 180" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />
      <path id="wL3" d="M 200 280 C 320 280, 380 180, 500 180" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />
      <path id="wR1" d="M 600 180 C 720 180, 780 80, 900 80" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />
      <path id="wR2" d="M 600 180 C 720 180, 780 180, 900 180" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />
      <path id="wR3" d="M 600 180 C 720 180, 780 280, 900 280" stroke="url(#wireGrad)" strokeWidth="2" fill="none" />

      <circle r="5" fill="#0D55F6" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
          <mpath href="#wL1" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#0D55F6" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.4s">
          <mpath href="#wL2" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#0D55F6" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s">
          <mpath href="#wL3" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#4E29FE" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.0s">
          <mpath href="#wR1" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#4E29FE" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.4s">
          <mpath href="#wR2" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#4E29FE" filter="url(#softGlow)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.8s">
          <mpath href="#wR3" />
        </animateMotion>
      </circle>

      {/* Source nodes */}
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#E5EDFE" />
        <path d="M 17 27 L 17 33 L 22 35 L 22 25 Z M 24 27 L 28 25 L 28 35 L 24 33 Z" fill="#0D55F6" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">Camera A</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">RTMP · 1080p</text>
      </g>
      <g transform="translate(60, 150)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#E5EDFE" />
        <path d="M 17 27 L 17 33 L 22 35 L 22 25 Z M 24 27 L 28 25 L 28 35 L 24 33 Z" fill="#0D55F6" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">Camera B</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">RTMP · 720p</text>
      </g>
      <g transform="translate(60, 250)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#E5EDFE" />
        <rect x="17" y="25" width="10" height="10" rx="1.5" fill="#0D55F6" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">Loop file</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">intro.mp4</text>
      </g>

      {/* Mixer */}
      <g transform="translate(450, 110)">
        <rect x="0" y="0" width="150" height="140" rx="14" fill="#FFFFFF" stroke="#0D55F6" strokeWidth="1.5" />
        <rect x="0" y="0" width="150" height="140" rx="14" fill="#0D55F6" opacity="0.04" />
        <text x="75" y="34" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#0838A6" letterSpacing="1.4">FLUMIXA</text>
        <line x1="20" y1="48" x2="130" y2="48" stroke="#E3E5EA" />
        <text x="75" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#14161A">Mix</text>
        <text x="75" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#4A5160">Record · Schedule</text>
        <circle cx="75" cy="116" r="4" fill="#E5484D">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="84" y="119" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#E5484D" letterSpacing="1.2">LIVE</text>
      </g>

      {/* Destination nodes */}
      <g transform="translate(900, 50)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#FFE5E5" />
        <path d="M 18 26 L 28 30 L 18 34 Z" fill="#E5484D" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">YouTube</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">live · 6 Mbps</text>
      </g>
      <g transform="translate(900, 150)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#EFE5FE" />
        <path d="M 18 24 L 18 36 L 28 30 Z" fill="#4E29FE" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">Twitch</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">live · 6 Mbps</text>
      </g>
      <g transform="translate(900, 250)">
        <rect x="0" y="0" width="140" height="60" rx="10" fill="#FFFFFF" stroke="#E3E5EA" strokeWidth="1" />
        <circle cx="22" cy="30" r="11" fill="#E5FEEA" />
        <path d="M 17 25 L 17 35 L 27 35 L 27 27 L 25 25 Z" fill="#2BB673" />
        <text x="42" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#14161A">Kick</text>
        <text x="42" y="43" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7B8290">live · 6 Mbps</text>
      </g>

      <text x="130" y="338" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#7B8290" letterSpacing="1.5">SOURCES</text>
      <text x="525" y="338" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#7B8290" letterSpacing="1.5">MEDIA SERVER</text>
      <text x="970" y="338" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#7B8290" letterSpacing="1.5">DESTINATIONS</text>
    </svg>
  );
}
