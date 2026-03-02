import React from 'react';

const GREEN = '#22c55e';

export const FLILogoFull: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 120" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Magnifying glass circle */}
    <circle cx="50" cy="55" r="32" fill="none" stroke="#2c3e50" strokeWidth="5" />
    {/* House inside magnifying glass */}
    <path d="M35 62 L50 45 L65 62" fill="none" stroke="#c41e3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="40" y="58" width="20" height="14" fill="none" stroke="#2c3e50" strokeWidth="3" rx="1" />
    <rect x="47" y="63" width="6" height="9" fill="#4da6cc" rx="1" />
    {/* Magnifying glass handle */}
    <line x1="73" y1="78" x2="88" y2="93" stroke="#2c3e50" strokeWidth="5" strokeLinecap="round" />
    {/* Green Check mark */}
    <path d="M58 52 L62 56 L70 44" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Wordmark */}
    <text x="110" y="50" fontFamily="Georgia, serif" fontWeight="700" fontSize="28" fill="#2c3e50">Fair Let</text>
    <text x="110" y="80" fontFamily="Georgia, serif" fontWeight="700" fontSize="28" fill="#c41e3a">Inventory</text>
    {/* Tagline */}
    <text x="110" y="100" fontFamily="Segoe UI, sans-serif" fontSize="11" fill="#555555" letterSpacing="2">VERIFICATION · TRANSPARENCY · TRUST</text>
  </svg>
);

export const FLILogoMono: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#1a1a1a' }) => (
  <svg viewBox="0 0 400 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="32" fill="none" stroke={color} strokeWidth="5" />
    <path d="M35 62 L50 45 L65 62" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="40" y="58" width="20" height="14" fill="none" stroke={color} strokeWidth="3" rx="1" />
    <rect x="47" y="63" width="6" height="9" fill={color} rx="1" opacity="0.3" />
    <line x1="73" y1="78" x2="88" y2="93" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M58 52 L62 56 L70 44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="110" y="50" fontFamily="Georgia, serif" fontWeight="700" fontSize="28" fill={color}>Fair Let</text>
    <text x="110" y="80" fontFamily="Georgia, serif" fontWeight="700" fontSize="28" fill={color}>Inventory</text>
    <text x="110" y="100" fontFamily="Segoe UI, sans-serif" fontSize="11" fill={color} letterSpacing="2" opacity="0.6">VERIFICATION · TRANSPARENCY · TRUST</text>
  </svg>
);

export const FLILogoIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 80 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="42" cy="42" r="30" fill="none" stroke="#2c3e50" strokeWidth="5" />
    <path d="M28 50 L42 34 L56 50" fill="none" stroke="#c41e3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="33" y="46" width="18" height="12" fill="none" stroke="#2c3e50" strokeWidth="3" rx="1" />
    <rect x="39" y="50" width="6" height="8" fill="#4da6cc" rx="1" />
    <line x1="63" y1="63" x2="82" y2="82" stroke="#2c3e50" strokeWidth="6" strokeLinecap="round" />
    {/* Green Check mark */}
    <path d="M50 40 L54 44 L62 32" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default FLILogoFull;
