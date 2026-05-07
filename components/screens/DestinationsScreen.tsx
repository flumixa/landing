export function DestinationsScreen() {
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="600" height="380" fill="#FAFBFC" />
      <rect x="0" y="0" width="600" height="40" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="16" y="13" width="60" height="14" rx="3" fill="#0D55F6" />
      <text x="510" y="24" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#E5484D">● LIVE</text>
      <rect x="0" y="40" width="120" height="340" fill="#FFFFFF" stroke="#E3E5EA" />
      <rect x="8" y="172" width="104" height="22" rx="4" fill="#E5EDFE" />
      <text x="20" y="187" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0838A6">Destinations</text>
      <g transform="translate(140, 56)">
        <rect width="220" height="92" rx="8" fill="#FFFFFF" stroke="#E3E5EA" />
        <circle cx="22" cy="22" r="13" fill="#FFE5E5" />
        <path d="M 16 16 L 30 22 L 16 28 Z" fill="#E5484D" />
        <text x="44" y="20" fontFamily="Inter" fontSize="12" fontWeight="700" fill="#14161A">YouTube Live</text>
        <text x="44" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">a/v/streamkey/...</text>
        <rect x="14" y="52" width="60" height="20" rx="10" fill="#E5FEEA" />
        <circle cx="24" cy="62" r="3" fill="#2BB673" />
        <text x="34" y="65" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#19794D">live</text>
        <text x="86" y="66" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">5.9 Mbps · 02:14</text>
      </g>
      <g transform="translate(370, 56)">
        <rect width="214" height="92" rx="8" fill="#FFFFFF" stroke="#E3E5EA" />
        <circle cx="22" cy="22" r="13" fill="#EFE5FE" />
        <path d="M 18 14 L 18 30 L 30 22 Z" fill="#4E29FE" />
        <text x="44" y="20" fontFamily="Inter" fontSize="12" fontWeight="700" fill="#14161A">Twitch</text>
        <text x="44" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">live_*****</text>
        <rect x="14" y="52" width="60" height="20" rx="10" fill="#E5FEEA" />
        <circle cx="24" cy="62" r="3" fill="#2BB673" />
        <text x="34" y="65" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#19794D">live</text>
        <text x="86" y="66" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">5.9 Mbps · 02:14</text>
      </g>
      <g transform="translate(140, 160)">
        <rect width="220" height="92" rx="8" fill="#FFFFFF" stroke="#E3E5EA" />
        <circle cx="22" cy="22" r="13" fill="#E5FEEA" />
        <rect x="16" y="16" width="12" height="12" rx="2" fill="#2BB673" />
        <text x="44" y="20" fontFamily="Inter" fontSize="12" fontWeight="700" fill="#14161A">Kick</text>
        <text x="44" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#7B8290">sk_*****</text>
        <rect x="14" y="52" width="86" height="20" rx="10" fill="#FEF4DA" />
        <circle cx="24" cy="62" r="3" fill="#F5A524" />
        <text x="34" y="65" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#9A6512">reconnecting</text>
      </g>
      <g transform="translate(370, 160)">
        <rect width="214" height="92" rx="8" fill="#FFFFFF" stroke="#E3E5EA" strokeDasharray="4 4" />
        <text x="107" y="44" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#7B8290">+ Add destination</text>
        <text x="107" y="60" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#ADB3BC">RTMP · YT · Twitch · Kick</text>
      </g>
      <rect x="140" y="270" width="444" height="86" rx="8" fill="#FFFFFF" stroke="#E3E5EA" />
      <text x="156" y="290" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#7B8290" letterSpacing="1">COMBINED OUTPUT</text>
      <text x="156" y="318" fontFamily="Inter" fontSize="22" fontWeight="700" fill="#14161A">17.7</text>
      <text x="200" y="318" fontFamily="JetBrains Mono" fontSize="11" fill="#7B8290">Mbps total upstream</text>
      <text x="156" y="342" fontFamily="Inter" fontSize="11" fill="#4A5160">3 destinations · 1 reconnecting · 0 dropped</text>
    </svg>
  );
}
