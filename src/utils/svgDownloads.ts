// ===== DOWNLOAD HELPER =====
export function downloadSVG(svgContent: string, filename: string) {
  const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadAllAsZipFallback(items: { svg: string; name: string }[]) {
  items.forEach((item, i) => {
    setTimeout(() => downloadSVG(item.svg, item.name), i * 300);
  });
}

// ===== LOGO SVGs =====

export const logoFullColorSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <circle cx="50" cy="55" r="32" fill="none" stroke="#2c3e50" stroke-width="5"/>
  <path d="M35 62 L50 45 L65 62" fill="none" stroke="#c41e3a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="40" y="58" width="20" height="14" fill="none" stroke="#2c3e50" stroke-width="3" rx="1"/>
  <rect x="47" y="63" width="6" height="9" fill="#4da6cc" rx="1"/>
  <line x1="73" y1="78" x2="88" y2="93" stroke="#2c3e50" stroke-width="5" stroke-linecap="round"/>
  <path d="M58 52 L62 56 L70 44" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="110" y="50" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#2c3e50">Fair Let</text>
  <text x="110" y="80" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#c41e3a">Inventory</text>
  <text x="110" y="100" font-family="Segoe UI, sans-serif" font-size="11" fill="#555555" letter-spacing="2">VERIFICATION · TRANSPARENCY · TRUST</text>
</svg>`;

export const logoMonochromeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <circle cx="50" cy="55" r="32" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M35 62 L50 45 L65 62" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="40" y="58" width="20" height="14" fill="none" stroke="#1a1a1a" stroke-width="3" rx="1"/>
  <rect x="47" y="63" width="6" height="9" fill="#1a1a1a" rx="1" opacity="0.3"/>
  <line x1="73" y1="78" x2="88" y2="93" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
  <path d="M58 52 L62 56 L70 44" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="110" y="50" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#1a1a1a">Fair Let</text>
  <text x="110" y="80" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#1a1a1a">Inventory</text>
  <text x="110" y="100" font-family="Segoe UI, sans-serif" font-size="11" fill="#1a1a1a" letter-spacing="2" opacity="0.6">VERIFICATION · TRANSPARENCY · TRUST</text>
</svg>`;

export const logoWhiteOnDarkSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <rect width="400" height="120" fill="#2c3e50" rx="8"/>
  <circle cx="50" cy="55" r="32" fill="none" stroke="#ffffff" stroke-width="5"/>
  <path d="M35 62 L50 45 L65 62" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="40" y="58" width="20" height="14" fill="none" stroke="#ffffff" stroke-width="3" rx="1"/>
  <rect x="47" y="63" width="6" height="9" fill="#ffffff" rx="1" opacity="0.3"/>
  <line x1="73" y1="78" x2="88" y2="93" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
  <path d="M58 52 L62 56 L70 44" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="110" y="50" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#ffffff">Fair Let</text>
  <text x="110" y="80" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#ffffff">Inventory</text>
  <text x="110" y="100" font-family="Segoe UI, sans-serif" font-size="11" fill="#ffffff" letter-spacing="2" opacity="0.6">VERIFICATION · TRANSPARENCY · TRUST</text>
</svg>`;

export const logoIconOnlySVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">
  <circle cx="42" cy="42" r="30" fill="none" stroke="#2c3e50" stroke-width="5"/>
  <path d="M28 50 L42 34 L56 50" fill="none" stroke="#c41e3a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="33" y="46" width="18" height="12" fill="none" stroke="#2c3e50" stroke-width="3" rx="1"/>
  <rect x="39" y="50" width="6" height="8" fill="#4da6cc" rx="1"/>
  <line x1="63" y1="63" x2="82" y2="82" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/>
  <path d="M50 40 L54 44 L62 32" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const logoVariantsReferenceSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="900" height="500">
  <rect width="900" height="500" fill="#f8f9fa" rx="12"/>
  <text x="450" y="40" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#2c3e50" text-anchor="middle">FLI Logo Variants Reference</text>
  
  <!-- Full Color -->
  <rect x="30" y="60" width="260" height="180" fill="#ffffff" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <text x="160" y="85" font-family="Segoe UI, sans-serif" font-size="11" fill="#c41e3a" text-anchor="middle" font-weight="600">FULL COLOR</text>
  <circle cx="120" cy="145" r="28" fill="none" stroke="#2c3e50" stroke-width="4"/>
  <path d="M107 152 L120 138 L133 152" fill="none" stroke="#c41e3a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="112" y="149" width="16" height="11" fill="none" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <rect x="117" y="153" width="5" height="7" fill="#4da6cc" rx="1"/>
  <line x1="140" y1="165" x2="152" y2="177" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>
  <path d="M127 143 L130 146 L137 136" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="170" y="138" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#2c3e50">Fair Let</text>
  <text x="170" y="158" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#c41e3a">Inventory</text>

  <!-- Monochrome -->
  <rect x="320" y="60" width="260" height="180" fill="#ffffff" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <text x="450" y="85" font-family="Segoe UI, sans-serif" font-size="11" fill="#555555" text-anchor="middle" font-weight="600">MONOCHROME</text>
  <circle cx="410" cy="145" r="28" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M397 152 L410 138 L423 152" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="402" y="149" width="16" height="11" fill="none" stroke="#1a1a1a" stroke-width="2.5" rx="1"/>
  <rect x="407" y="153" width="5" height="7" fill="#1a1a1a" rx="1" opacity="0.3"/>
  <line x1="430" y1="165" x2="442" y2="177" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
  <path d="M417 143 L420 146 L427 136" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="460" y="138" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#1a1a1a">Fair Let</text>
  <text x="460" y="158" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#1a1a1a">Inventory</text>

  <!-- Icon Only -->
  <rect x="610" y="60" width="260" height="180" fill="#ffffff" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <text x="740" y="85" font-family="Segoe UI, sans-serif" font-size="11" fill="#4da6cc" text-anchor="middle" font-weight="600">ICON ONLY</text>
  <circle cx="740" cy="130" r="28" fill="none" stroke="#2c3e50" stroke-width="4"/>
  <path d="M727 138 L740 124 L753 138" fill="none" stroke="#c41e3a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="732" y="135" width="16" height="11" fill="none" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <rect x="737" y="139" width="5" height="7" fill="#4da6cc" rx="1"/>
  <line x1="760" y1="150" x2="775" y2="165" stroke="#2c3e50" stroke-width="5" stroke-linecap="round"/>
  <path d="M748 128 L751 131 L758 121" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Color Palette -->
  <text x="450" y="280" font-family="Segoe UI, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle" font-weight="600">Brand Color Palette</text>
  <rect x="120" y="300" width="100" height="60" fill="#c41e3a" rx="6"/>
  <text x="170" y="385" font-family="Segoe UI, sans-serif" font-size="10" fill="#555" text-anchor="middle">Primary Red</text>
  <text x="170" y="398" font-family="monospace" font-size="9" fill="#999" text-anchor="middle">#c41e3a</text>
  <rect x="240" y="300" width="100" height="60" fill="#4da6cc" rx="6"/>
  <text x="290" y="385" font-family="Segoe UI, sans-serif" font-size="10" fill="#555" text-anchor="middle">Secondary Blue</text>
  <text x="290" y="398" font-family="monospace" font-size="9" fill="#999" text-anchor="middle">#4da6cc</text>
  <rect x="360" y="300" width="100" height="60" fill="#2c3e50" rx="6"/>
  <text x="410" y="385" font-family="Segoe UI, sans-serif" font-size="10" fill="#555" text-anchor="middle">Neutral Dark</text>
  <text x="410" y="398" font-family="monospace" font-size="9" fill="#999" text-anchor="middle">#2c3e50</text>
  <rect x="480" y="300" width="100" height="60" fill="#22c55e" rx="6"/>
  <text x="530" y="385" font-family="Segoe UI, sans-serif" font-size="10" fill="#555" text-anchor="middle">Check Green</text>
  <text x="530" y="398" font-family="monospace" font-size="9" fill="#999" text-anchor="middle">#22c55e</text>
  <rect x="600" y="300" width="100" height="60" fill="#d4d4d4" rx="6"/>
  <text x="650" y="385" font-family="Segoe UI, sans-serif" font-size="10" fill="#555" text-anchor="middle">Light Gray</text>
  <text x="650" y="398" font-family="monospace" font-size="9" fill="#999" text-anchor="middle">#d4d4d4</text>

  <!-- Footer -->
  <text x="450" y="460" font-family="Segoe UI, sans-serif" font-size="10" fill="#999" text-anchor="middle">Fair Let Inventory Brand Kit v1.0 — Logo Studio // AC LLC</text>
  <text x="450" y="480" font-family="Segoe UI, sans-serif" font-size="9" fill="#bbb" text-anchor="middle">All variants maintain brand recognition across different contexts and applications</text>
</svg>`;


// ===== ICON SVGs =====

export const iconCheckMarkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="28" stroke="#2c3e50" stroke-width="3"/>
  <path d="M20 32 L28 40 L44 24" stroke="#22c55e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconApprovedBadgeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M32 4 L38 16 L52 12 L46 26 L58 32 L46 38 L52 52 L38 48 L32 60 L26 48 L12 52 L18 38 L6 32 L18 26 L12 12 L26 16 Z" stroke="#2c3e50" stroke-width="2.5"/>
  <path d="M22 32 L28 38 L42 26" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconShieldCheckSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M32 6 L52 16 L52 34 C52 46 42 56 32 60 C22 56 12 46 12 34 L12 16 Z" stroke="#2c3e50" stroke-width="3"/>
  <path d="M22 32 L28 38 L42 26" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconVerifiedDocSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M16 8 L40 8 L48 16 L48 56 L16 56 Z" stroke="#2c3e50" stroke-width="3" stroke-linejoin="round"/>
  <path d="M40 8 L40 16 L48 16" stroke="#2c3e50" stroke-width="3" stroke-linejoin="round"/>
  <line x1="24" y1="28" x2="40" y2="28" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="36" x2="36" y2="36" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <path d="M26 44 L30 48 L38 40" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconLocationPinSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M32 58 C32 58 50 38 50 26 C50 16 42 8 32 8 C22 8 14 16 14 26 C14 38 32 58 32 58Z" stroke="#4da6cc" stroke-width="3"/>
  <circle cx="32" cy="26" r="8" stroke="#4da6cc" stroke-width="3"/>
</svg>`;

export const iconMapMarkerSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <rect x="8" y="12" width="48" height="40" rx="4" stroke="#2c3e50" stroke-width="3"/>
  <path d="M32 44 C32 44 42 34 42 28 C42 22 38 18 32 18 C26 18 22 22 22 28 C22 34 32 44 32 44Z" stroke="#4da6cc" stroke-width="2.5" fill="#4da6cc" fill-opacity="0.15"/>
  <circle cx="32" cy="28" r="4" fill="#4da6cc"/>
</svg>`;

export const iconHouseLocationSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M32 56 C32 56 48 40 48 30 C48 20 41 12 32 12 C23 12 16 20 16 30 C16 40 32 56 32 56Z" stroke="#4da6cc" stroke-width="3"/>
  <path d="M24 34 L32 26 L40 34" stroke="#c41e3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="26" y="32" width="12" height="8" stroke="#2c3e50" stroke-width="2" rx="1"/>
</svg>`;

export const iconGlobalLocationSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="24" stroke="#2c3e50" stroke-width="3"/>
  <ellipse cx="32" cy="32" rx="12" ry="24" stroke="#2c3e50" stroke-width="2"/>
  <line x1="8" y1="32" x2="56" y2="32" stroke="#2c3e50" stroke-width="2"/>
  <path d="M12 20 Q32 24 52 20" stroke="#2c3e50" stroke-width="1.5"/>
  <path d="M12 44 Q32 40 52 44" stroke="#2c3e50" stroke-width="1.5"/>
  <circle cx="44" cy="46" r="8" fill="white" stroke="#4da6cc" stroke-width="2.5"/>
  <circle cx="44" cy="44" r="2" fill="#4da6cc"/>
  <path d="M44 50 L44 47" stroke="#4da6cc" stroke-width="2"/>
</svg>`;

export const iconHouseSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M8 32 L32 12 L56 32" stroke="#c41e3a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="16" y="30" width="32" height="24" stroke="#2c3e50" stroke-width="3" rx="1"/>
  <rect x="27" y="38" width="10" height="16" stroke="#2c3e50" stroke-width="2" rx="1"/>
  <rect x="20" y="34" width="6" height="6" stroke="#2c3e50" stroke-width="1.5" rx="1"/>
  <rect x="38" y="34" width="6" height="6" stroke="#2c3e50" stroke-width="1.5" rx="1"/>
</svg>`;

export const iconBuildingSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <rect x="14" y="10" width="24" height="46" stroke="#2c3e50" stroke-width="3" rx="2"/>
  <rect x="38" y="24" width="14" height="32" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <rect x="20" y="16" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="28" y="16" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="20" y="26" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="28" y="26" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="20" y="36" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="28" y="36" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="42" y="30" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="42" y="40" width="5" height="5" fill="#4da6cc" rx="1"/>
  <rect x="23" y="46" width="6" height="10" stroke="#2c3e50" stroke-width="2" rx="1"/>
</svg>`;

export const iconApartmentSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <rect x="12" y="8" width="40" height="48" rx="3" stroke="#2c3e50" stroke-width="3"/>
  <rect x="18" y="14" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="30" y="14" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="42" y="14" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="18" y="24" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="30" y="24" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="42" y="24" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="18" y="34" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="30" y="34" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="42" y="34" width="8" height="6" rx="1" fill="#4da6cc"/>
  <rect x="26" y="46" width="12" height="10" rx="1" stroke="#2c3e50" stroke-width="2"/>
</svg>`;

export const iconPropertyDetailsSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M8 28 L28 12 L48 28" stroke="#c41e3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="14" y="26" width="28" height="20" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <line x1="50" y1="20" x2="50" y2="56" stroke="#2c3e50" stroke-width="2"/>
  <line x1="50" y1="26" x2="58" y2="26" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <line x1="50" y1="34" x2="58" y2="34" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <line x1="50" y1="42" x2="56" y2="42" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="58" y2="50" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export const iconMagnifyingGlassSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <circle cx="28" cy="28" r="18" stroke="#2c3e50" stroke-width="3"/>
  <line x1="40" y1="40" x2="56" y2="56" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/>
  <path d="M20 28 L28 20" stroke="#4da6cc" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
</svg>`;

export const iconChecklistSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <rect x="12" y="6" width="40" height="52" rx="4" stroke="#2c3e50" stroke-width="3"/>
  <path d="M20 22 L24 26 L32 18" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="36" y1="22" x2="46" y2="22" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <path d="M20 34 L24 38 L32 30" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="36" y1="34" x2="46" y2="34" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
  <rect x="19" y="43" width="14" height="6" rx="1" stroke="#2c3e50" stroke-width="2"/>
  <line x1="36" y1="46" x2="46" y2="46" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export const iconReportSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M14 8 L42 8 L50 16 L50 56 L14 56 Z" stroke="#2c3e50" stroke-width="3" stroke-linejoin="round"/>
  <path d="M42 8 L42 16 L50 16" stroke="#2c3e50" stroke-width="3" stroke-linejoin="round"/>
  <rect x="22" y="26" width="4" height="18" fill="#4da6cc" rx="1"/>
  <rect x="30" y="30" width="4" height="14" fill="#c41e3a" rx="1"/>
  <rect x="38" y="22" width="4" height="22" fill="#2c3e50" rx="1"/>
</svg>`;

export const iconAnalyticsSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <line x1="10" y1="54" x2="54" y2="54" stroke="#2c3e50" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="54" x2="10" y2="10" stroke="#2c3e50" stroke-width="3" stroke-linecap="round"/>
  <polyline points="16,44 26,30 36,36 46,16" stroke="#c41e3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="44" r="3" fill="#c41e3a"/>
  <circle cx="26" cy="30" r="3" fill="#c41e3a"/>
  <circle cx="36" cy="36" r="3" fill="#c41e3a"/>
  <circle cx="46" cy="16" r="3" fill="#c41e3a"/>
</svg>`;

// ===== COLOR PALETTE GUIDE SVG =====

export const colorPaletteGuideSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#f8f9fa" rx="12"/>
  <text x="400" y="40" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#2c3e50" text-anchor="middle">FLI Color Palette Guide</text>
  <text x="400" y="62" font-family="Segoe UI, sans-serif" font-size="12" fill="#555" text-anchor="middle">Complete color reference with hex codes, RGB values, and usage guidelines</text>

  <!-- Primary Colors -->
  <text x="40" y="100" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50">PRIMARY COLORS</text>
  
  <rect x="40" y="115" width="220" height="120" fill="#c41e3a" rx="8"/>
  <text x="150" y="165" font-family="Georgia, serif" font-weight="700" font-size="18" fill="white" text-anchor="middle">Primary Red</text>
  <text x="150" y="185" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">#c41e3a</text>
  <text x="150" y="200" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">RGB: 196, 30, 58</text>
  <text x="150" y="215" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">CMYK: 5/100/80/0</text>

  <rect x="280" y="115" width="220" height="120" fill="#4da6cc" rx="8"/>
  <text x="390" y="165" font-family="Georgia, serif" font-weight="700" font-size="18" fill="white" text-anchor="middle">Secondary Blue</text>
  <text x="390" y="185" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">#4da6cc</text>
  <text x="390" y="200" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">RGB: 77, 166, 204</text>
  <text x="390" y="215" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">CMYK: 70/30/0/0</text>

  <rect x="520" y="115" width="220" height="120" fill="#2c3e50" rx="8"/>
  <text x="630" y="165" font-family="Georgia, serif" font-weight="700" font-size="18" fill="white" text-anchor="middle">Neutral Dark</text>
  <text x="630" y="185" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">#2c3e50</text>
  <text x="630" y="200" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">RGB: 44, 62, 80</text>
  <text x="630" y="215" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.6)" text-anchor="middle">CMYK: 75/65/40/25</text>

  <!-- Secondary Colors -->
  <text x="40" y="280" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50">SECONDARY COLORS</text>

  <rect x="40" y="295" width="160" height="100" fill="#22c55e" rx="8"/>
  <text x="120" y="340" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="white" text-anchor="middle">Check Green</text>
  <text x="120" y="358" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.8)" text-anchor="middle">#22c55e</text>
  <text x="120" y="375" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.6)" text-anchor="middle">RGB: 34, 197, 94</text>

  <rect x="220" y="295" width="160" height="100" fill="#d4d4d4" rx="8"/>
  <text x="300" y="340" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#333" text-anchor="middle">Light Gray</text>
  <text x="300" y="358" font-family="monospace" font-size="11" fill="#555" text-anchor="middle">#d4d4d4</text>
  <text x="300" y="375" font-family="monospace" font-size="9" fill="#777" text-anchor="middle">RGB: 212, 212, 212</text>

  <rect x="400" y="295" width="160" height="100" fill="#555555" rx="8"/>
  <text x="480" y="340" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="white" text-anchor="middle">Dark Gray</text>
  <text x="480" y="358" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.8)" text-anchor="middle">#555555</text>
  <text x="480" y="375" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.6)" text-anchor="middle">RGB: 85, 85, 85</text>

  <rect x="580" y="295" width="160" height="100" fill="#f8f9fa" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <text x="660" y="340" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#333" text-anchor="middle">Off White</text>
  <text x="660" y="358" font-family="monospace" font-size="11" fill="#555" text-anchor="middle">#f8f9fa</text>
  <text x="660" y="375" font-family="monospace" font-size="9" fill="#777" text-anchor="middle">RGB: 248, 249, 250</text>

  <!-- Usage Guide -->
  <text x="40" y="440" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50">USAGE GUIDELINES</text>
  <text x="40" y="465" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Primary Red: Logo roof, verification marks, headlines, CTAs, hover states</text>
  <text x="40" y="483" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Secondary Blue: Location pins, accents, secondary CTAs, links</text>
  <text x="40" y="501" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Neutral Dark: Text, headings, logo circle, UI backgrounds, primary text</text>
  <text x="40" y="519" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Check Green: Checkmarks, approval indicators, success states, verification</text>
  <text x="40" y="537" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Light/Dark Gray: Backgrounds, borders, secondary text, disabled states</text>
  <text x="40" y="555" font-family="Segoe UI, sans-serif" font-size="11" fill="#555">Off White: Page backgrounds, card backgrounds, clean layouts</text>

  <!-- Footer -->
  <text x="400" y="590" font-family="Segoe UI, sans-serif" font-size="9" fill="#999" text-anchor="middle">Fair Let Inventory Brand Kit v1.0 — All colors meet WCAG accessibility standards</text>
</svg>`;

// ===== ICON SYSTEM SVG (all 16 icons) =====

export const iconSystemSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" width="900" height="700">
  <rect width="900" height="700" fill="#f8f9fa" rx="12"/>
  <text x="450" y="40" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#2c3e50" text-anchor="middle">FLI Icon System — 16 Custom Icons</text>

  <!-- Verification Icons -->
  <text x="50" y="80" font-family="Segoe UI, sans-serif" font-weight="600" font-size="13" fill="#c41e3a">VERIFICATION</text>
  
  <!-- Check Mark -->
  <rect x="50" y="95" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <circle cx="95" cy="130" r="22" stroke="#2c3e50" stroke-width="2.5"/>
  <path d="M83 130 L90 137 L107 122" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="95" y="175" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Check Mark</text>

  <!-- Approved Badge -->
  <rect x="160" y="95" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M205 107 L209 115 L218 112 L214 121 L223 125 L214 129 L218 138 L209 135 L205 143 L201 135 L192 138 L196 129 L187 125 L196 121 L192 112 L201 115 Z" stroke="#2c3e50" stroke-width="1.8"/>
  <path d="M197 125 L202 130 L213 121" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="205" y="175" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Approved</text>

  <!-- Shield -->
  <rect x="270" y="95" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M315 105 L335 113 L335 127 C335 136 328 143 315 147 C302 143 295 136 295 127 L295 113 Z" stroke="#2c3e50" stroke-width="2.5"/>
  <path d="M306 126 L311 131 L324 120" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="315" y="175" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Protected</text>

  <!-- Verified Doc -->
  <rect x="380" y="95" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M406 105 L430 105 L436 111 L436 151 L406 151 Z" stroke="#2c3e50" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M430 105 L430 111 L436 111" stroke="#2c3e50" stroke-width="2" stroke-linejoin="round"/>
  <line x1="412" y1="121" x2="428" y2="121" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="412" y1="128" x2="424" y2="128" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M414 137 L418 141 L426 133" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="421" y="175" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Verified Doc</text>

  <!-- Location Icons -->
  <text x="50" y="220" font-family="Segoe UI, sans-serif" font-weight="600" font-size="13" fill="#4da6cc">LOCATION</text>

  <!-- Location Pin -->
  <rect x="50" y="235" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M95 312 C95 312 113 292 113 280 C113 270 105 264 95 264 C85 264 77 270 77 280 C77 292 95 312 95 312Z" stroke="#4da6cc" stroke-width="2.5" transform="translate(0,-40)"/>
  <circle cx="95" cy="240" r="6" stroke="#4da6cc" stroke-width="2.5" transform="translate(0,0)"/>
  <text x="95" y="315" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Location Pin</text>

  <!-- Map Marker -->
  <rect x="160" y="235" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="174" y="248" width="42" height="34" rx="3" stroke="#2c3e50" stroke-width="2.5"/>
  <path d="M195 295 C195 295 205 285 205 279 C205 273 201 269 195 269 C189 269 185 273 185 279 C185 285 195 295 195 295Z" stroke="#4da6cc" stroke-width="2" fill="#4da6cc" fill-opacity="0.15" transform="translate(10,-22)"/>
  <circle cx="205" cy="257" r="3" fill="#4da6cc"/>
  <text x="205" y="315" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Map Marker</text>

  <!-- House Location -->
  <rect x="270" y="235" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M315 310 C315 310 331 294 331 284 C331 274 324 268 315 268 C306 268 299 274 299 284 C299 294 315 310 315 310Z" stroke="#4da6cc" stroke-width="2.5" transform="translate(0,-42)"/>
  <path d="M307 280 L315 273 L323 280" stroke="#c41e3a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,-16)"/>
  <rect x="309" y="266" width="12" height="8" stroke="#2c3e50" stroke-width="1.5" rx="1"/>
  <text x="315" y="315" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">House Location</text>

  <!-- Global -->
  <rect x="380" y="235" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <circle cx="421" cy="272" r="20" stroke="#2c3e50" stroke-width="2.5"/>
  <ellipse cx="421" cy="272" rx="10" ry="20" stroke="#2c3e50" stroke-width="1.5"/>
  <line x1="401" y1="272" x2="441" y2="272" stroke="#2c3e50" stroke-width="1.5"/>
  <circle cx="433" cy="284" r="7" fill="white" stroke="#4da6cc" stroke-width="2"/>
  <circle cx="433" cy="282" r="1.5" fill="#4da6cc"/>
  <text x="425" y="315" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Global</text>

  <!-- Property Icons -->
  <text x="50" y="360" font-family="Segoe UI, sans-serif" font-weight="600" font-size="13" fill="#2c3e50">PROPERTY</text>

  <!-- House -->
  <rect x="50" y="375" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M73 414 L95 396 L117 414" stroke="#c41e3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="80" y="412" width="30" height="20" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <rect x="91" y="418" width="8" height="14" stroke="#2c3e50" stroke-width="1.5" rx="1"/>
  <text x="95" y="455" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">House</text>

  <!-- Building -->
  <rect x="160" y="375" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="180" y="388" width="20" height="38" stroke="#2c3e50" stroke-width="2.5" rx="1"/>
  <rect x="200" y="398" width="12" height="28" stroke="#2c3e50" stroke-width="2" rx="1"/>
  <rect x="184" y="393" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="191" y="393" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="184" y="401" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="191" y="401" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="184" y="409" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="191" y="409" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="203" y="403" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <rect x="203" y="411" width="4" height="4" fill="#4da6cc" rx="0.5"/>
  <text x="205" y="455" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Building</text>

  <!-- Apartment -->
  <rect x="270" y="375" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="290" y="388" width="34" height="38" rx="2" stroke="#2c3e50" stroke-width="2.5"/>
  <rect x="295" y="393" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="304" y="393" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="313" y="393" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="295" y="401" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="304" y="401" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="313" y="401" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="295" y="409" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="304" y="409" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="313" y="409" width="6" height="5" rx="1" fill="#4da6cc"/>
  <rect x="302" y="418" width="10" height="8" rx="1" stroke="#2c3e50" stroke-width="1.5"/>
  <text x="315" y="455" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Apartment</text>

  <!-- Property Details -->
  <rect x="380" y="375" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M400 414 L418 398 L436 414" stroke="#c41e3a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="404" y="412" width="24" height="16" stroke="#2c3e50" stroke-width="2" rx="1"/>
  <line x1="440" y1="400" x2="440" y2="432" stroke="#2c3e50" stroke-width="1.5"/>
  <line x1="440" y1="405" x2="448" y2="405" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="440" y1="413" x2="448" y2="413" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="440" y1="421" x2="446" y2="421" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="440" y1="429" x2="448" y2="429" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <text x="425" y="455" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Details</text>

  <!-- Inspection Icons -->
  <text x="50" y="500" font-family="Segoe UI, sans-serif" font-weight="600" font-size="13" fill="#c41e3a">INSPECTION</text>

  <!-- Magnifying Glass -->
  <rect x="50" y="515" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <circle cx="87" cy="548" r="16" stroke="#2c3e50" stroke-width="2.5"/>
  <line x1="98" y1="559" x2="112" y2="573" stroke="#2c3e50" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M80 548 L87 541" stroke="#4da6cc" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <text x="95" y="595" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Search</text>

  <!-- Checklist -->
  <rect x="160" y="515" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="181" y="524" width="34" height="42" rx="3" stroke="#2c3e50" stroke-width="2.5"/>
  <path d="M188 540 L192 544 L200 536" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="203" y1="540" x2="210" y2="540" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M188 552 L192 556 L200 548" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="203" y1="552" x2="210" y2="552" stroke="#2c3e50" stroke-width="1.5" stroke-linecap="round"/>
  <text x="205" y="595" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Checklist</text>

  <!-- Report -->
  <rect x="270" y="515" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <path d="M296 524 L324 524 L332 532 L332 572 L296 572 Z" stroke="#2c3e50" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M324 524 L324 532 L332 532" stroke="#2c3e50" stroke-width="2" stroke-linejoin="round"/>
  <rect x="304" y="542" width="4" height="16" fill="#4da6cc" rx="1"/>
  <rect x="312" y="546" width="4" height="12" fill="#c41e3a" rx="1"/>
  <rect x="320" y="538" width="4" height="20" fill="#2c3e50" rx="1"/>
  <text x="315" y="595" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Report</text>

  <!-- Analytics -->
  <rect x="380" y="515" width="90" height="90" fill="white" rx="8" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="396" y1="576" x2="440" y2="576" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="396" y1="576" x2="396" y2="530" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="402,566 412,554 422,558 432,540" stroke="#c41e3a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="402" cy="566" r="2.5" fill="#c41e3a"/>
  <circle cx="412" cy="554" r="2.5" fill="#c41e3a"/>
  <circle cx="422" cy="558" r="2.5" fill="#c41e3a"/>
  <circle cx="432" cy="540" r="2.5" fill="#c41e3a"/>
  <text x="425" y="595" font-family="Segoe UI, sans-serif" font-size="8" fill="#555" text-anchor="middle">Analytics</text>

  <!-- Legend -->
  <text x="550" y="100" font-family="Segoe UI, sans-serif" font-weight="600" font-size="12" fill="#2c3e50">DESIGN SPECS</text>
  <text x="550" y="120" font-family="Segoe UI, sans-serif" font-size="10" fill="#555">Base size: 64×64px</text>
  <text x="550" y="138" font-family="Segoe UI, sans-serif" font-size="10" fill="#555">Stroke width: 2-3px</text>
  <text x="550" y="156" font-family="Segoe UI, sans-serif" font-size="10" fill="#555">Rounded corners: 4-8px</text>
  <text x="550" y="174" font-family="Segoe UI, sans-serif" font-size="10" fill="#555">Scale proportionally</text>
  
  <text x="550" y="210" font-family="Segoe UI, sans-serif" font-weight="600" font-size="12" fill="#2c3e50">COLORS USED</text>
  <rect x="550" y="220" width="16" height="16" fill="#2c3e50" rx="2"/>
  <text x="572" y="233" font-family="monospace" font-size="10" fill="#555">#2c3e50 Dark</text>
  <rect x="550" y="242" width="16" height="16" fill="#c41e3a" rx="2"/>
  <text x="572" y="255" font-family="monospace" font-size="10" fill="#555">#c41e3a Red</text>
  <rect x="550" y="264" width="16" height="16" fill="#4da6cc" rx="2"/>
  <text x="572" y="277" font-family="monospace" font-size="10" fill="#555">#4da6cc Blue</text>
  <rect x="550" y="286" width="16" height="16" fill="#22c55e" rx="2"/>
  <text x="572" y="299" font-family="monospace" font-size="10" fill="#555">#22c55e Green</text>

  <!-- Footer -->
  <text x="450" y="670" font-family="Segoe UI, sans-serif" font-size="9" fill="#999" text-anchor="middle">Fair Let Inventory Icon System v1.0 — 16 icons across 4 categories</text>
  <text x="450" y="688" font-family="Segoe UI, sans-serif" font-size="8" fill="#bbb" text-anchor="middle">Geometric Simplicity · Consistent Stroke · Rounded Corners · Color Consistency · Clear Intent</text>
</svg>`;

// ===== COLLECTION ARRAYS =====

export const logoAssets = [
  { name: 'FLI-Logo-Color-Full.svg', svg: logoFullColorSVG, desc: 'Full color logo with wordmark' },
  { name: 'FLI-Logo-Monochrome.svg', svg: logoMonochromeSVG, desc: 'Single-color monochrome version' },
  { name: 'FLI-Logo-White-On-Dark.svg', svg: logoWhiteOnDarkSVG, desc: 'White reversed on dark background' },
  { name: 'FLI-Logo-Icon-Only.svg', svg: logoIconOnlySVG, desc: 'Icon without wordmark (512×512)' },
  { name: 'FLI-Logo-Variants.svg', svg: logoVariantsReferenceSVG, desc: 'All variants reference sheet' },
];

export const iconAssets = [
  { name: 'FLI-Icon-CheckMark.svg', svg: iconCheckMarkSVG, category: 'Verification', desc: 'Check mark approval' },
  { name: 'FLI-Icon-ApprovedBadge.svg', svg: iconApprovedBadgeSVG, category: 'Verification', desc: 'Approved badge' },
  { name: 'FLI-Icon-ShieldCheck.svg', svg: iconShieldCheckSVG, category: 'Verification', desc: 'Shield protected' },
  { name: 'FLI-Icon-VerifiedDoc.svg', svg: iconVerifiedDocSVG, category: 'Verification', desc: 'Verified document' },
  { name: 'FLI-Icon-LocationPin.svg', svg: iconLocationPinSVG, category: 'Location', desc: 'Location pin' },
  { name: 'FLI-Icon-MapMarker.svg', svg: iconMapMarkerSVG, category: 'Location', desc: 'Map marker' },
  { name: 'FLI-Icon-HouseLocation.svg', svg: iconHouseLocationSVG, category: 'Location', desc: 'House with location' },
  { name: 'FLI-Icon-GlobalLocation.svg', svg: iconGlobalLocationSVG, category: 'Location', desc: 'Global location' },
  { name: 'FLI-Icon-House.svg', svg: iconHouseSVG, category: 'Property', desc: 'Residential house' },
  { name: 'FLI-Icon-Building.svg', svg: iconBuildingSVG, category: 'Property', desc: 'Multi-unit building' },
  { name: 'FLI-Icon-Apartment.svg', svg: iconApartmentSVG, category: 'Property', desc: 'Apartment block' },
  { name: 'FLI-Icon-PropertyDetails.svg', svg: iconPropertyDetailsSVG, category: 'Property', desc: 'Property details' },
  { name: 'FLI-Icon-MagnifyingGlass.svg', svg: iconMagnifyingGlassSVG, category: 'Inspection', desc: 'Magnifying glass' },
  { name: 'FLI-Icon-Checklist.svg', svg: iconChecklistSVG, category: 'Inspection', desc: 'Inspection checklist' },
  { name: 'FLI-Icon-Report.svg', svg: iconReportSVG, category: 'Inspection', desc: 'Report document' },
  { name: 'FLI-Icon-Analytics.svg', svg: iconAnalyticsSVG, category: 'Inspection', desc: 'Analytics chart' },
];

export const guideAssets = [
  { name: 'FLI-Color-Palette-Guide.svg', svg: colorPaletteGuideSVG, desc: 'Complete color reference' },
  { name: 'FLI-Icon-System.svg', svg: iconSystemSVG, desc: 'All 16 icons reference sheet' },
];

// Re-export social assets for the combined total
import { socialAssets as socialTemplateAssets } from './socialTemplateSVGs';
export const socialAssetsFlat = socialTemplateAssets.map(a => ({ name: a.name, svg: a.svg, desc: a.desc }));

export const allAssets = [...logoAssets, ...iconAssets, ...guideAssets, ...socialAssetsFlat];
