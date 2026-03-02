// ===== SOCIAL MEDIA TEMPLATE SVGs =====
// All templates use FLI brand colors: Red #c41e3a, Blue #4da6cc, Dark #2c3e50, Green #22c55e

// ── FLI Logo Helper (reusable in templates) ──
const fliLogoGroup = (x: number, y: number, scale: number = 1, color: 'full' | 'white' = 'full') => {
  const dark = color === 'white' ? '#ffffff' : '#2c3e50';
  const red = color === 'white' ? '#ffffff' : '#c41e3a';
  const blue = color === 'white' ? 'rgba(255,255,255,0.5)' : '#4da6cc';
  const green = color === 'white' ? '#ffffff' : '#22c55e';
  return `<g transform="translate(${x},${y}) scale(${scale})">
    <circle cx="32" cy="32" r="28" fill="none" stroke="${dark}" stroke-width="4.5"/>
    <path d="M18 40 L32 24 L46 40" fill="none" stroke="${red}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="23" y="37" width="18" height="12" fill="none" stroke="${dark}" stroke-width="2.5" rx="1"/>
    <rect x="29" y="41" width="6" height="8" fill="${blue}" rx="1"/>
    <line x1="52" y1="52" x2="65" y2="65" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 30 L44 34 L52 22" fill="none" stroke="${green}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
};

// ════════════════════════════════════════════════════════
// LINKEDIN TEMPLATES
// ════════════════════════════════════════════════════════

export const linkedinBannerSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" width="1584" height="396">
  <defs>
    <linearGradient id="liBannerGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="60%" stop-color="#1a252f"/>
      <stop offset="100%" stop-color="#0f171e"/>
    </linearGradient>
    <pattern id="liBannerPattern" width="60" height="60" patternUnits="userSpaceOnUse">
      <circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.04)"/>
    </pattern>
  </defs>
  <rect width="1584" height="396" fill="url(#liBannerGrad)" rx="0"/>
  <rect width="1584" height="396" fill="url(#liBannerPattern)"/>
  
  <!-- Decorative geometric shapes -->
  <rect x="1200" y="-50" width="500" height="500" rx="40" fill="rgba(196,30,58,0.08)" transform="rotate(15 1450 200)"/>
  <rect x="1100" y="50" width="300" height="300" rx="30" fill="rgba(77,166,204,0.06)" transform="rotate(-10 1250 200)"/>
  <circle cx="1400" cy="198" r="120" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
  <circle cx="1400" cy="198" r="80" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="2"/>
  
  <!-- Accent line -->
  <rect x="0" y="386" width="1584" height="10" fill="#c41e3a"/>
  
  <!-- Logo -->
  ${fliLogoGroup(80, 110, 1.8, 'white')}
  
  <!-- Text Content -->
  <text x="250" y="165" font-family="Georgia, serif" font-weight="700" font-size="52" fill="#ffffff">Fair Let Inventory</text>
  <text x="250" y="220" font-family="Segoe UI, sans-serif" font-weight="400" font-size="24" fill="rgba(255,255,255,0.7)">Property Verification &amp; Inventory Specialists</text>
  
  <!-- Divider -->
  <line x1="250" y1="242" x2="650" y2="242" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  
  <!-- Tagline -->
  <text x="250" y="275" font-family="Segoe UI, sans-serif" font-size="18" fill="rgba(255,255,255,0.5)" letter-spacing="3">VERIFICATION · TRANSPARENCY · TRUST</text>
  
  <!-- CTA Area -->
  <rect x="250" y="295" width="200" height="44" rx="22" fill="#c41e3a"/>
  <text x="350" y="323" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="white" text-anchor="middle">Get a Quote</text>
  
  <rect x="470" y="295" width="200" height="44" rx="22" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <text x="570" y="323" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="rgba(255,255,255,0.7)" text-anchor="middle">Learn More</text>
  
  <!-- Website -->
  <text x="1504" y="370" font-family="Segoe UI, sans-serif" font-size="14" fill="rgba(255,255,255,0.35)" text-anchor="end">www.fairletinventory.co.uk</text>
</svg>`;

export const linkedinPostSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 627" width="1200" height="627">
  <defs>
    <linearGradient id="liPostGrad" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1a252f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="627" fill="url(#liPostGrad)"/>
  
  <!-- Grid pattern -->
  <line x1="0" y1="0" x2="1200" y2="627" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>
  <line x1="1200" y1="0" x2="0" y2="627" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>
  
  <!-- Left color accent bar -->
  <rect x="0" y="0" width="8" height="627" fill="#c41e3a"/>
  
  <!-- Content area -->
  <rect x="60" y="60" width="540" height="507" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  
  <!-- Logo -->
  ${fliLogoGroup(90, 85, 1.2, 'white')}
  
  <!-- Text -->
  <text x="190" y="120" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#ffffff">Fair Let Inventory</text>
  <text x="190" y="145" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.5)">Property Verification Specialists</text>
  
  <!-- Main headline -->
  <text x="90" y="220" font-family="Georgia, serif" font-weight="700" font-size="38" fill="#ffffff">Professional</text>
  <text x="90" y="268" font-family="Georgia, serif" font-weight="700" font-size="38" fill="#c41e3a">Property Inventory</text>
  <text x="90" y="316" font-family="Georgia, serif" font-weight="700" font-size="38" fill="#ffffff">Services</text>
  
  <!-- Body text -->
  <text x="90" y="365" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.65)">Comprehensive inventory reports that protect</text>
  <text x="90" y="390" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.65)">landlords and tenants alike. Trusted by property</text>
  <text x="90" y="415" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.65)">professionals across the UK.</text>
  
  <!-- Stats -->
  <g transform="translate(90, 450)">
    <rect width="130" height="80" rx="10" fill="rgba(196,30,58,0.15)" stroke="rgba(196,30,58,0.3)" stroke-width="1"/>
    <text x="65" y="38" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#c41e3a" text-anchor="middle">1000+</text>
    <text x="65" y="58" font-family="Segoe UI, sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" text-anchor="middle">Reports Filed</text>
  </g>
  <g transform="translate(235, 450)">
    <rect width="130" height="80" rx="10" fill="rgba(77,166,204,0.15)" stroke="rgba(77,166,204,0.3)" stroke-width="1"/>
    <text x="65" y="38" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#4da6cc" text-anchor="middle">98%</text>
    <text x="65" y="58" font-family="Segoe UI, sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" text-anchor="middle">Satisfaction</text>
  </g>
  <g transform="translate(380, 450)">
    <rect width="130" height="80" rx="10" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
    <text x="65" y="38" font-family="Georgia, serif" font-weight="700" font-size="28" fill="#22c55e" text-anchor="middle">24hr</text>
    <text x="65" y="58" font-family="Segoe UI, sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" text-anchor="middle">Turnaround</text>
  </g>
  
  <!-- Right visual area -->
  <rect x="660" y="60" width="480" height="507" rx="16" fill="rgba(255,255,255,0.03)"/>
  
  <!-- House illustration -->
  <g transform="translate(750, 140)">
    <path d="M150 220 L150 100 L0 100 L0 220 Z" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
    <path d="M-30 100 L75 30 L180 100" fill="none" stroke="rgba(196,30,58,0.3)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="20" y="120" width="35" height="35" rx="2" fill="rgba(77,166,204,0.12)" stroke="rgba(77,166,204,0.2)" stroke-width="1.5"/>
    <rect x="95" y="120" width="35" height="35" rx="2" fill="rgba(77,166,204,0.12)" stroke="rgba(77,166,204,0.2)" stroke-width="1.5"/>
    <rect x="55" y="155" width="40" height="65" rx="2" fill="rgba(77,166,204,0.12)" stroke="rgba(77,166,204,0.2)" stroke-width="1.5"/>
  </g>
  
  <!-- Large magnifying glass overlay -->
  <circle cx="920" cy="350" r="100" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3"/>
  <line x1="990" y1="420" x2="1050" y2="480" stroke="rgba(255,255,255,0.06)" stroke-width="6" stroke-linecap="round"/>
  
  <!-- Green checkmark in magnifier -->
  <path d="M880 350 L910 380 L960 320" fill="none" stroke="rgba(34,197,94,0.25)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Bottom bar -->
  <rect x="0" y="617" width="1200" height="10" fill="#c41e3a"/>
  
  <!-- Website URL -->
  <text x="1140" y="600" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.3)" text-anchor="end">fairletinventory.co.uk</text>
</svg>`;

export const linkedinProfilePicSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="liPpGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1a252f"/>
    </linearGradient>
    <clipPath id="liCircleClip">
      <circle cx="200" cy="200" r="200"/>
    </clipPath>
  </defs>
  <g clip-path="url(#liCircleClip)">
    <rect width="400" height="400" fill="url(#liPpGrad)"/>
    <!-- Subtle ring -->
    <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
    <!-- Logo centered -->
    ${fliLogoGroup(115, 105, 2.7, 'white')}
  </g>
  <!-- Outer ring accent -->
  <circle cx="200" cy="200" r="196" fill="none" stroke="#c41e3a" stroke-width="4"/>
</svg>`;

// ════════════════════════════════════════════════════════
// INSTAGRAM TEMPLATES
// ════════════════════════════════════════════════════════

export const instagramPostSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="igPostGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8f9fa"/>
      <stop offset="100%" stop-color="#e8eaed"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#igPostGrad)"/>
  
  <!-- Top accent bar -->
  <rect x="0" y="0" width="1080" height="8" fill="#c41e3a"/>
  
  <!-- Header area -->
  <rect x="60" y="50" width="960" height="120" rx="16" fill="#2c3e50"/>
  ${fliLogoGroup(80, 60, 1.5, 'white')}
  <text x="195" y="105" font-family="Georgia, serif" font-weight="700" font-size="30" fill="#ffffff">Fair Let Inventory</text>
  <text x="195" y="135" font-family="Segoe UI, sans-serif" font-size="14" fill="rgba(255,255,255,0.5)" letter-spacing="2">PROPERTY VERIFICATION SPECIALISTS</text>
  
  <!-- Main content card -->
  <rect x="60" y="200" width="960" height="640" rx="20" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
  
  <!-- Icon decorative element -->
  <circle cx="540" cy="380" r="120" fill="none" stroke="#2c3e50" stroke-width="4" opacity="0.1"/>
  <circle cx="540" cy="380" r="90" fill="none" stroke="#2c3e50" stroke-width="3" opacity="0.08"/>
  
  <!-- Central magnifying glass -->
  <circle cx="510" cy="360" r="65" fill="none" stroke="#2c3e50" stroke-width="5"/>
  <line x1="556" y1="406" x2="595" y2="445" stroke="#2c3e50" stroke-width="8" stroke-linecap="round"/>
  
  <!-- House in magnifier -->
  <path d="M483 375 L510 350 L537 375" fill="none" stroke="#c41e3a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="490" y="370" width="40" height="25" fill="none" stroke="#2c3e50" stroke-width="3" rx="1"/>
  <rect x="504" y="378" width="12" height="17" fill="#4da6cc" rx="1"/>
  
  <!-- Green check -->
  <path d="M530 355 L540 365 L560 340" fill="none" stroke="#22c55e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Headline -->
  <text x="540" y="530" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#2c3e50" text-anchor="middle">Trusted Property</text>
  <text x="540" y="580" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#c41e3a" text-anchor="middle">Inspections</text>
  
  <!-- Body -->
  <text x="540" y="640" font-family="Segoe UI, sans-serif" font-size="22" fill="#555555" text-anchor="middle">Comprehensive inventory reports</text>
  <text x="540" y="670" font-family="Segoe UI, sans-serif" font-size="22" fill="#555555" text-anchor="middle">for landlords &amp; letting agents</text>
  
  <!-- CTA Button -->
  <rect x="380" y="720" width="320" height="60" rx="30" fill="#c41e3a"/>
  <text x="540" y="758" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="white" text-anchor="middle">Book Your Inspection</text>
  
  <!-- Bottom badges -->
  <rect x="60" y="880" width="960" height="140" rx="16" fill="#f8f9fa"/>
  <g transform="translate(160, 910)">
    <circle cx="30" cy="30" r="25" fill="#c41e3a" opacity="0.1"/>
    <path d="M20 30 L27 37 L40 23" stroke="#c41e3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="30" y="75" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50" text-anchor="middle">Verified</text>
    <text x="30" y="93" font-family="Segoe UI, sans-serif" font-size="11" fill="#555" text-anchor="middle">Reports</text>
  </g>
  <g transform="translate(440, 910)">
    <circle cx="30" cy="30" r="25" fill="#4da6cc" opacity="0.1"/>
    <circle cx="30" cy="28" r="6" fill="none" stroke="#4da6cc" stroke-width="2.5"/>
    <path d="M30 38 L30 35" stroke="#4da6cc" stroke-width="2.5"/>
    <text x="30" y="75" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50" text-anchor="middle">UK Wide</text>
    <text x="30" y="93" font-family="Segoe UI, sans-serif" font-size="11" fill="#555" text-anchor="middle">Coverage</text>
  </g>
  <g transform="translate(720, 910)">
    <circle cx="30" cy="30" r="25" fill="#22c55e" opacity="0.1"/>
    <path d="M18 30 L30 18 L42 30" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="22" y="28" width="16" height="10" fill="none" stroke="#22c55e" stroke-width="2" rx="1"/>
    <text x="30" y="75" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="#2c3e50" text-anchor="middle">Protected</text>
    <text x="30" y="93" font-family="Segoe UI, sans-serif" font-size="11" fill="#555" text-anchor="middle">Deposits</text>
  </g>
  
  <!-- Bottom bar -->
  <rect x="0" y="1072" width="1080" height="8" fill="#c41e3a"/>
</svg>`;

export const instagramStorySVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="igStoryGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="50%" stop-color="#1a252f"/>
      <stop offset="100%" stop-color="#0f171e"/>
    </linearGradient>
    <linearGradient id="igStoryAccent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c41e3a"/>
      <stop offset="100%" stop-color="#a01830"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#igStoryGrad)"/>
  
  <!-- Background decorative elements -->
  <circle cx="900" cy="300" r="200" fill="rgba(196,30,58,0.05)"/>
  <circle cx="180" cy="1600" r="250" fill="rgba(77,166,204,0.04)"/>
  <rect x="700" y="800" width="500" height="500" rx="40" fill="rgba(255,255,255,0.015)" transform="rotate(20 950 1050)"/>
  
  <!-- Top accent -->
  <rect x="0" y="0" width="1080" height="6" fill="#c41e3a"/>
  
  <!-- Logo header -->
  <g transform="translate(100, 100)">
    ${fliLogoGroup(0, 0, 1.5, 'white')}
    <text x="120" y="35" font-family="Georgia, serif" font-weight="700" font-size="26" fill="#ffffff">Fair Let Inventory</text>
    <text x="120" y="60" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.4)" letter-spacing="2">VERIFIED INSPECTIONS</text>
  </g>
  
  <!-- Main visual - Large magnifying glass -->
  <g transform="translate(540, 550)">
    <circle cx="0" cy="0" r="180" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
    <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3"/>
    
    <!-- House inside -->
    <path d="M-50 20 L0 -35 L50 20" fill="none" stroke="rgba(196,30,58,0.6)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-35" y="15" width="70" height="45" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3.5" rx="2"/>
    <rect x="-12" y="30" width="24" height="30" fill="rgba(77,166,204,0.2)" stroke="rgba(77,166,204,0.3)" stroke-width="2" rx="2"/>
    
    <!-- Check -->
    <path d="M30 -10 L50 10 L80 -30" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Handle -->
    <line x1="125" y1="125" x2="200" y2="200" stroke="rgba(255,255,255,0.15)" stroke-width="10" stroke-linecap="round"/>
  </g>
  
  <!-- Headline -->
  <text x="540" y="880" font-family="Georgia, serif" font-weight="700" font-size="64" fill="#ffffff" text-anchor="middle">Your Property</text>
  <text x="540" y="955" font-family="Georgia, serif" font-weight="700" font-size="64" fill="#c41e3a" text-anchor="middle">Verified</text>
  
  <!-- Subtitle -->
  <text x="540" y="1040" font-family="Segoe UI, sans-serif" font-size="26" fill="rgba(255,255,255,0.55)" text-anchor="middle">Professional inventory reports that</text>
  <text x="540" y="1075" font-family="Segoe UI, sans-serif" font-size="26" fill="rgba(255,255,255,0.55)" text-anchor="middle">protect your investment</text>
  
  <!-- Feature list -->
  <g transform="translate(180, 1150)">
    <rect width="720" height="340" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    
    <g transform="translate(50, 50)">
      <circle cx="20" cy="0" r="16" fill="rgba(34,197,94,0.15)"/>
      <path d="M12 0 L18 6 L28 -6" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="50" y="5" font-family="Segoe UI, sans-serif" font-size="22" fill="rgba(255,255,255,0.8)">Detailed room-by-room inspection</text>
    </g>
    <g transform="translate(50, 120)">
      <circle cx="20" cy="0" r="16" fill="rgba(34,197,94,0.15)"/>
      <path d="M12 0 L18 6 L28 -6" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="50" y="5" font-family="Segoe UI, sans-serif" font-size="22" fill="rgba(255,255,255,0.8)">HD photographic evidence</text>
    </g>
    <g transform="translate(50, 190)">
      <circle cx="20" cy="0" r="16" fill="rgba(34,197,94,0.15)"/>
      <path d="M12 0 L18 6 L28 -6" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="50" y="5" font-family="Segoe UI, sans-serif" font-size="22" fill="rgba(255,255,255,0.8)">24-hour report turnaround</text>
    </g>
    <g transform="translate(50, 260)">
      <circle cx="20" cy="0" r="16" fill="rgba(34,197,94,0.15)"/>
      <path d="M12 0 L18 6 L28 -6" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="50" y="5" font-family="Segoe UI, sans-serif" font-size="22" fill="rgba(255,255,255,0.8)">TDS &amp; DPS compliant</text>
    </g>
  </g>
  
  <!-- CTA -->
  <rect x="240" y="1580" width="600" height="80" rx="40" fill="url(#igStoryAccent)"/>
  <text x="540" y="1630" font-family="Segoe UI, sans-serif" font-weight="700" font-size="26" fill="white" text-anchor="middle">Swipe Up to Book ↑</text>
  
  <!-- Bottom info -->
  <text x="540" y="1740" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.25)" text-anchor="middle">fairletinventory.co.uk</text>
  
  <!-- Bottom accent -->
  <rect x="0" y="1914" width="1080" height="6" fill="#c41e3a"/>
</svg>`;

export const instagramProfilePicSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="igPpGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1a252f"/>
    </linearGradient>
  </defs>
  <circle cx="200" cy="200" r="200" fill="url(#igPpGrad)"/>
  <!-- Subtle ring -->
  <circle cx="200" cy="200" r="175" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1.5"/>
  <!-- Logo centered -->
  ${fliLogoGroup(115, 105, 2.7, 'white')}
  <!-- Instagram gradient ring hint -->
  <circle cx="200" cy="200" r="196" fill="none" stroke="#c41e3a" stroke-width="4"/>
</svg>`;

// ════════════════════════════════════════════════════════
// FACEBOOK TEMPLATES
// ════════════════════════════════════════════════════════

export const facebookCoverSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 312" width="820" height="312">
  <defs>
    <linearGradient id="fbCoverGrad" x1="0" y1="0" x2="1" y2="0.5">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="70%" stop-color="#1a252f"/>
      <stop offset="100%" stop-color="#0f171e"/>
    </linearGradient>
  </defs>
  <rect width="820" height="312" fill="url(#fbCoverGrad)"/>
  
  <!-- Decorative shapes -->
  <rect x="550" y="-30" width="350" height="350" rx="30" fill="rgba(196,30,58,0.06)" transform="rotate(10 725 145)"/>
  <circle cx="700" cy="156" r="90" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
  
  <!-- Accent line at bottom -->
  <rect x="0" y="304" width="820" height="8" fill="#c41e3a"/>
  
  <!-- Logo -->
  ${fliLogoGroup(50, 70, 1.5, 'white')}
  
  <!-- Text -->
  <text x="175" y="110" font-family="Georgia, serif" font-weight="700" font-size="36" fill="#ffffff">Fair Let Inventory</text>
  <text x="175" y="145" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.5)">Property Verification &amp; Inventory Specialists</text>
  
  <!-- Tagline -->
  <text x="175" y="185" font-family="Segoe UI, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)" letter-spacing="3">VERIFICATION · TRANSPARENCY · TRUST</text>
  
  <!-- CTA -->
  <rect x="175" y="210" width="160" height="38" rx="19" fill="#c41e3a"/>
  <text x="255" y="234" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14" fill="white" text-anchor="middle">Get a Quote</text>
  
  <!-- Right-side icon hint -->
  <g transform="translate(620, 80)" opacity="0.15">
    <circle cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="3"/>
    <path d="M35 58 L50 42 L65 58" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="80" y1="80" x2="100" y2="100" stroke="white" stroke-width="5" stroke-linecap="round"/>
  </g>
  
  <!-- Website -->
  <text x="770" y="290" font-family="Segoe UI, sans-serif" font-size="11" fill="rgba(255,255,255,0.25)" text-anchor="end">fairletinventory.co.uk</text>
</svg>`;

export const facebookPostSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="fbPostGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0f2f5"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fbPostGrad)"/>
  
  <!-- Left dark panel -->
  <rect x="0" y="0" width="480" height="630" fill="#2c3e50"/>
  <rect x="0" y="0" width="480" height="630" fill="rgba(0,0,0,0.1)"/>
  
  <!-- Diagonal separator -->
  <polygon points="430,0 530,0 480,630 380,630" fill="#c41e3a"/>
  
  <!-- Logo on dark side -->
  ${fliLogoGroup(60, 60, 1.3, 'white')}
  <text x="165" y="95" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#ffffff">Fair Let</text>
  <text x="165" y="120" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#ffffff">Inventory</text>
  
  <!-- Left side content -->
  <text x="60" y="210" font-family="Georgia, serif" font-weight="700" font-size="40" fill="#ffffff">Property</text>
  <text x="60" y="260" font-family="Georgia, serif" font-weight="700" font-size="40" fill="#c41e3a">Inventory</text>
  <text x="60" y="310" font-family="Georgia, serif" font-weight="700" font-size="40" fill="#ffffff">Experts</text>
  
  <text x="60" y="370" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.6)">Protecting landlords &amp;</text>
  <text x="60" y="395" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.6)">tenants with thorough,</text>
  <text x="60" y="420" font-family="Segoe UI, sans-serif" font-size="16" fill="rgba(255,255,255,0.6)">verified reports.</text>
  
  <!-- CTA on dark side -->
  <rect x="60" y="460" width="200" height="50" rx="25" fill="#c41e3a"/>
  <text x="160" y="491" font-family="Segoe UI, sans-serif" font-weight="700" font-size="17" fill="white" text-anchor="middle">Book Now</text>
  
  <text x="60" y="560" font-family="Segoe UI, sans-serif" font-size="12" fill="rgba(255,255,255,0.3)" letter-spacing="2">VERIFICATION · TRANSPARENCY · TRUST</text>
  
  <!-- Right side content on white -->
  <g transform="translate(580, 60)">
    <!-- Feature cards -->
    <rect width="540" height="150" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>
    <circle cx="75" cy="75" r="35" fill="rgba(196,30,58,0.08)"/>
    <path d="M60 75 L70 85 L90 62" stroke="#c41e3a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="140" y="55" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#2c3e50">Check-In / Check-Out</text>
    <text x="140" y="80" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">Detailed condition reports with</text>
    <text x="140" y="100" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">HD photographic evidence</text>
    
    <rect y="170" width="540" height="150" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>
    <circle cx="75" cy="245" r="35" fill="rgba(77,166,204,0.08)"/>
    <path d="M75 258 C75 258 95 238 95 228 C95 218 86 212 75 212 C64 212 55 218 55 228 C55 238 75 258 75 258Z" stroke="#4da6cc" stroke-width="2.5"/>
    <circle cx="75" cy="228" r="5" fill="#4da6cc"/>
    <text x="140" y="225" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#2c3e50">UK-Wide Coverage</text>
    <text x="140" y="250" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">Professional service wherever</text>
    <text x="140" y="270" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">your property is located</text>
    
    <rect y="340" width="540" height="150" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>
    <circle cx="75" cy="415" r="35" fill="rgba(34,197,94,0.08)"/>
    <path d="M60 415 L75 398 L90 415" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="64" y="412" width="22" height="14" fill="none" stroke="#22c55e" stroke-width="2" rx="1"/>
    <text x="140" y="395" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#2c3e50">Deposit Protection</text>
    <text x="140" y="420" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">TDS &amp; DPS compliant reports</text>
    <text x="140" y="440" font-family="Segoe UI, sans-serif" font-size="15" fill="#555">for dispute resolution</text>
  </g>
  
  <!-- Website bottom right -->
  <text x="1140" y="610" font-family="Segoe UI, sans-serif" font-size="12" fill="#999" text-anchor="end">fairletinventory.co.uk</text>
</svg>`;

export const facebookProfilePicSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="fbPpGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1a252f"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#fbPpGrad)" rx="16"/>
  <!-- Decorative corner -->
  <rect x="290" y="-20" width="160" height="160" rx="20" fill="rgba(196,30,58,0.08)" transform="rotate(15 370 60)"/>
  <!-- Logo centered -->
  ${fliLogoGroup(115, 105, 2.7, 'white')}
  <!-- Subtle brand name -->
  <text x="200" y="340" font-family="Georgia, serif" font-weight="700" font-size="20" fill="rgba(255,255,255,0.25)" text-anchor="middle">FLI</text>
</svg>`;

// ════════════════════════════════════════════════════════
// BONUS: Carousel / Multi-Post Templates
// ════════════════════════════════════════════════════════

export const instagramCarouselCoverSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1a252f"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#carGrad)"/>
  
  <!-- Geometric accents -->
  <rect x="700" y="-50" width="500" height="500" rx="40" fill="rgba(196,30,58,0.06)" transform="rotate(15 950 200)"/>
  <rect x="-100" y="700" width="400" height="400" rx="30" fill="rgba(77,166,204,0.04)" transform="rotate(-10 100 900)"/>
  
  <!-- Top bar -->
  <rect x="0" y="0" width="1080" height="6" fill="#c41e3a"/>
  
  <!-- Logo -->
  <g transform="translate(100, 120)">
    ${fliLogoGroup(0, 0, 2, 'white')}
  </g>
  
  <!-- Main headline -->
  <text x="100" y="360" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#ffffff">Why Choose</text>
  <text x="100" y="445" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#c41e3a">Fair Let</text>
  <text x="100" y="530" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#ffffff">Inventory?</text>
  
  <!-- Subtitle -->
  <text x="100" y="600" font-family="Segoe UI, sans-serif" font-size="28" fill="rgba(255,255,255,0.5)">Swipe to discover our services →</text>
  
  <!-- Feature preview dots -->
  <g transform="translate(100, 700)">
    <rect width="880" height="240" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    
    <g transform="translate(60, 50)">
      <circle cx="30" cy="30" r="25" fill="rgba(196,30,58,0.15)"/>
      <text x="30" y="36" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#c41e3a" text-anchor="middle">1</text>
      <text x="75" y="28" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="rgba(255,255,255,0.8)">Check-In Reports</text>
      <text x="75" y="50" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.4)">Detailed property assessment</text>
    </g>
    <g transform="translate(60, 120)">
      <circle cx="30" cy="30" r="25" fill="rgba(77,166,204,0.15)"/>
      <text x="30" y="36" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#4da6cc" text-anchor="middle">2</text>
      <text x="75" y="28" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="rgba(255,255,255,0.8)">Check-Out Reports</text>
      <text x="75" y="50" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.4)">End of tenancy comparison</text>
    </g>
    <g transform="translate(500, 50)">
      <circle cx="30" cy="30" r="25" fill="rgba(34,197,94,0.15)"/>
      <text x="30" y="36" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="#22c55e" text-anchor="middle">3</text>
      <text x="75" y="28" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="rgba(255,255,255,0.8)">Interim Inspections</text>
      <text x="75" y="50" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.4)">Regular property monitoring</text>
    </g>
    <g transform="translate(500, 120)">
      <circle cx="30" cy="30" r="25" fill="rgba(255,255,255,0.1)"/>
      <text x="30" y="36" font-family="Segoe UI, sans-serif" font-weight="700" font-size="20" fill="rgba(255,255,255,0.7)" text-anchor="middle">4</text>
      <text x="75" y="28" font-family="Segoe UI, sans-serif" font-weight="600" font-size="16" fill="rgba(255,255,255,0.8)">Dispute Support</text>
      <text x="75" y="50" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.4)">Expert evidence for claims</text>
    </g>
  </g>
  
  <!-- Page indicator -->
  <g transform="translate(460, 1010)">
    <circle cx="0" cy="0" r="6" fill="#c41e3a"/>
    <circle cx="25" cy="0" r="4" fill="rgba(255,255,255,0.2)"/>
    <circle cx="45" cy="0" r="4" fill="rgba(255,255,255,0.2)"/>
    <circle cx="65" cy="0" r="4" fill="rgba(255,255,255,0.2)"/>
    <circle cx="85" cy="0" r="4" fill="rgba(255,255,255,0.2)"/>
  </g>
  
  <!-- Bottom accent -->
  <rect x="0" y="1074" width="1080" height="6" fill="#c41e3a"/>
</svg>`;

export const linkedinArticleBannerSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 644" width="1200" height="644">
  <defs>
    <linearGradient id="liArtGrad" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#f8f9fa"/>
      <stop offset="100%" stop-color="#e2e5e9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="644" fill="url(#liArtGrad)"/>
  
  <!-- Left dark panel -->
  <rect x="0" y="0" width="500" height="644" fill="#2c3e50"/>
  
  <!-- Diagonal cut -->
  <polygon points="450,0 550,0 500,644 400,644" fill="#c41e3a"/>
  
  <!-- Logo on dark panel -->
  ${fliLogoGroup(60, 50, 1.4, 'white')}
  <text x="170" y="88" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#ffffff">Fair Let Inventory</text>
  <text x="170" y="112" font-family="Segoe UI, sans-serif" font-size="12" fill="rgba(255,255,255,0.4)" letter-spacing="2">PROPERTY VERIFICATION</text>
  
  <!-- Article title area on dark side -->
  <text x="60" y="230" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#ffffff">The Complete</text>
  <text x="60" y="285" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#c41e3a">Guide to</text>
  <text x="60" y="340" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#ffffff">Property</text>
  <text x="60" y="395" font-family="Georgia, serif" font-weight="700" font-size="42" fill="#ffffff">Inventory</text>
  
  <!-- Subtitle -->
  <text x="60" y="450" font-family="Segoe UI, sans-serif" font-size="17" fill="rgba(255,255,255,0.5)">Everything landlords need to know</text>
  <text x="60" y="475" font-family="Segoe UI, sans-serif" font-size="17" fill="rgba(255,255,255,0.5)">about protecting their property</text>
  
  <!-- Read time badge -->
  <rect x="60" y="510" width="120" height="32" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="120" y="531" font-family="Segoe UI, sans-serif" font-size="13" fill="rgba(255,255,255,0.6)" text-anchor="middle">8 min read</text>
  
  <text x="60" y="600" font-family="Segoe UI, sans-serif" font-size="11" fill="rgba(255,255,255,0.2)" letter-spacing="2">VERIFICATION · TRANSPARENCY · TRUST</text>
  
  <!-- Right side - illustration area -->
  <g transform="translate(750, 160)">
    <!-- Document stack -->
    <rect x="20" y="40" width="200" height="260" rx="8" fill="white" stroke="#e5e7eb" stroke-width="2"/>
    <rect x="10" y="50" width="200" height="260" rx="8" fill="white" stroke="#e5e7eb" stroke-width="2"/>
    <rect x="0" y="60" width="200" height="260" rx="8" fill="white" stroke="#e5e7eb" stroke-width="2"/>
    
    <!-- Document content lines -->
    <line x1="25" y1="90" x2="170" y2="90" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="110" x2="150" y2="110" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="130" x2="160" y2="130" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="150" x2="120" y2="150" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Photo placeholder -->
    <rect x="25" y="170" width="150" height="80" rx="6" fill="#f0f2f5" stroke="#e5e7eb" stroke-width="1"/>
    <path d="M50 230 L75 210 L100 225 L120 205 L155 235" fill="none" stroke="#d4d4d4" stroke-width="1.5"/>
    <circle cx="60" cy="195" r="10" fill="#d4d4d4"/>
    
    <!-- Checkmarks -->
    <line x1="25" y1="270" x2="150" y2="270" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="290" x2="130" y2="290" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Approved stamp -->
    <g transform="translate(110, 240)">
      <rect x="0" y="0" width="80" height="40" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
      <path d="M20 20 L30 30 L55 10" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  
  <!-- Magnifying glass overlay -->
  <circle cx="950" cy="450" r="60" fill="none" stroke="#2c3e50" stroke-width="3" opacity="0.1"/>
  <line x1="992" y1="492" x2="1030" y2="530" stroke="#2c3e50" stroke-width="5" stroke-linecap="round" opacity="0.1"/>
</svg>`;

// ════════════════════════════════════════════════════════
// EXPORT: Social Template Assets Array
// ════════════════════════════════════════════════════════

export interface SocialAsset {
  name: string;
  svg: string;
  platform: 'LinkedIn' | 'Instagram' | 'Facebook';
  type: string;
  dimensions: string;
  desc: string;
}

export const socialAssets: SocialAsset[] = [
  // LinkedIn
  { name: 'FLI-LinkedIn-Banner.svg', svg: linkedinBannerSVG, platform: 'LinkedIn', type: 'Banner', dimensions: '1584×396', desc: 'Profile/Company page header banner' },
  { name: 'FLI-LinkedIn-Post.svg', svg: linkedinPostSVG, platform: 'LinkedIn', type: 'Post', dimensions: '1200×627', desc: 'Standard feed post image' },
  { name: 'FLI-LinkedIn-Article-Banner.svg', svg: linkedinArticleBannerSVG, platform: 'LinkedIn', type: 'Article', dimensions: '1200×644', desc: 'Article/newsletter cover image' },
  { name: 'FLI-LinkedIn-Profile-Pic.svg', svg: linkedinProfilePicSVG, platform: 'LinkedIn', type: 'Profile', dimensions: '400×400', desc: 'Profile picture (circular crop)' },
  // Instagram
  { name: 'FLI-Instagram-Post.svg', svg: instagramPostSVG, platform: 'Instagram', type: 'Post', dimensions: '1080×1080', desc: 'Standard square feed post' },
  { name: 'FLI-Instagram-Story.svg', svg: instagramStorySVG, platform: 'Instagram', type: 'Story', dimensions: '1080×1920', desc: 'Full-screen story/reel cover' },
  { name: 'FLI-Instagram-Carousel-Cover.svg', svg: instagramCarouselCoverSVG, platform: 'Instagram', type: 'Carousel', dimensions: '1080×1080', desc: 'Carousel first slide cover' },
  { name: 'FLI-Instagram-Profile-Pic.svg', svg: instagramProfilePicSVG, platform: 'Instagram', type: 'Profile', dimensions: '400×400', desc: 'Profile picture (circular crop)' },
  // Facebook
  { name: 'FLI-Facebook-Cover.svg', svg: facebookCoverSVG, platform: 'Facebook', type: 'Cover', dimensions: '820×312', desc: 'Page cover photo' },
  { name: 'FLI-Facebook-Post.svg', svg: facebookPostSVG, platform: 'Facebook', type: 'Post', dimensions: '1200×630', desc: 'Standard feed post / link preview' },
  { name: 'FLI-Facebook-Profile-Pic.svg', svg: facebookProfilePicSVG, platform: 'Facebook', type: 'Profile', dimensions: '400×400', desc: 'Page profile picture' },
];
