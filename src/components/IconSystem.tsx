import React from 'react';

const iconColor = '#2c3e50';
const greenColor = '#22c55e';
const blueColor = '#4da6cc';
const accentColor = '#c41e3a';

interface IconProps {
  size?: number;
  className?: string;
}

// Verification Icons
export const CheckMark: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <circle cx="32" cy="32" r="28" stroke={iconColor} strokeWidth="3" />
    <path d="M20 32 L28 40 L44 24" stroke={greenColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ApprovedBadge: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M32 4 L38 16 L52 12 L46 26 L58 32 L46 38 L52 52 L38 48 L32 60 L26 48 L12 52 L18 38 L6 32 L18 26 L12 12 L26 16 Z" stroke={iconColor} strokeWidth="2.5" fill="none" />
    <path d="M22 32 L28 38 L42 26" stroke={greenColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M32 6 L52 16 L52 34 C52 46 42 56 32 60 C22 56 12 46 12 34 L12 16 Z" stroke={iconColor} strokeWidth="3" />
    <path d="M22 32 L28 38 L42 26" stroke={greenColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VerifiedDoc: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M16 8 L40 8 L48 16 L48 56 L16 56 Z" stroke={iconColor} strokeWidth="3" strokeLinejoin="round" />
    <path d="M40 8 L40 16 L48 16" stroke={iconColor} strokeWidth="3" strokeLinejoin="round" />
    <line x1="24" y1="28" x2="40" y2="28" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="36" x2="36" y2="36" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M26 44 L30 48 L38 40" stroke={greenColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Location Icons
export const LocationPin: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M32 58 C32 58 50 38 50 26 C50 16 42 8 32 8 C22 8 14 16 14 26 C14 38 32 58 32 58Z" stroke={blueColor} strokeWidth="3" />
    <circle cx="32" cy="26" r="8" stroke={blueColor} strokeWidth="3" />
  </svg>
);

export const MapMarker: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <rect x="8" y="12" width="48" height="40" rx="4" stroke={iconColor} strokeWidth="3" />
    <path d="M32 44 C32 44 42 34 42 28 C42 22 38 18 32 18 C26 18 22 22 22 28 C22 34 32 44 32 44Z" stroke={blueColor} strokeWidth="2.5" fill={blueColor} fillOpacity="0.15" />
    <circle cx="32" cy="28" r="4" fill={blueColor} />
  </svg>
);

export const HouseLocation: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M32 56 C32 56 48 40 48 30 C48 20 41 12 32 12 C23 12 16 20 16 30 C16 40 32 56 32 56Z" stroke={blueColor} strokeWidth="3" />
    <path d="M24 34 L32 26 L40 34" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="26" y="32" width="12" height="8" stroke={iconColor} strokeWidth="2" rx="1" />
  </svg>
);

export const GlobalLocation: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <circle cx="32" cy="32" r="24" stroke={iconColor} strokeWidth="3" />
    <ellipse cx="32" cy="32" rx="12" ry="24" stroke={iconColor} strokeWidth="2" />
    <line x1="8" y1="32" x2="56" y2="32" stroke={iconColor} strokeWidth="2" />
    <path d="M12 20 Q32 24 52 20" stroke={iconColor} strokeWidth="1.5" fill="none" />
    <path d="M12 44 Q32 40 52 44" stroke={iconColor} strokeWidth="1.5" fill="none" />
    <circle cx="44" cy="46" r="8" fill="white" stroke={blueColor} strokeWidth="2.5" />
    <circle cx="44" cy="44" r="2" fill={blueColor} />
    <path d="M44 50 L44 47" stroke={blueColor} strokeWidth="2" />
  </svg>
);

// Property Icons
export const House: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M8 32 L32 12 L56 32" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="16" y="30" width="32" height="24" stroke={iconColor} strokeWidth="3" rx="1" />
    <rect x="27" y="38" width="10" height="16" stroke={iconColor} strokeWidth="2" rx="1" />
    <rect x="20" y="34" width="6" height="6" stroke={iconColor} strokeWidth="1.5" rx="1" />
    <rect x="38" y="34" width="6" height="6" stroke={iconColor} strokeWidth="1.5" rx="1" />
  </svg>
);

export const Building: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <rect x="14" y="10" width="24" height="46" stroke={iconColor} strokeWidth="3" rx="2" />
    <rect x="38" y="24" width="14" height="32" stroke={iconColor} strokeWidth="2.5" rx="1" />
    <rect x="20" y="16" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="28" y="16" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="20" y="26" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="28" y="26" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="20" y="36" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="28" y="36" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="42" y="30" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="42" y="40" width="5" height="5" fill={blueColor} rx="1" />
    <rect x="23" y="46" width="6" height="10" stroke={iconColor} strokeWidth="2" rx="1" />
  </svg>
);

export const Apartment: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <rect x="12" y="8" width="40" height="48" rx="3" stroke={iconColor} strokeWidth="3" />
    <rect x="18" y="14" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="30" y="14" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="42" y="14" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="18" y="24" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="30" y="24" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="42" y="24" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="18" y="34" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="30" y="34" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="42" y="34" width="8" height="6" rx="1" fill={blueColor} />
    <rect x="26" y="46" width="12" height="10" rx="1" stroke={iconColor} strokeWidth="2" />
  </svg>
);

export const PropertyDetails: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M8 28 L28 12 L48 28" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="14" y="26" width="28" height="20" stroke={iconColor} strokeWidth="2.5" rx="1" />
    <line x1="50" y1="20" x2="50" y2="56" stroke={iconColor} strokeWidth="2" />
    <line x1="50" y1="26" x2="58" y2="26" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="34" x2="58" y2="34" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="42" x2="56" y2="42" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="50" x2="58" y2="50" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Inspection Icons
export const MagnifyingGlass: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <circle cx="28" cy="28" r="18" stroke={iconColor} strokeWidth="3" />
    <line x1="40" y1="40" x2="56" y2="56" stroke={iconColor} strokeWidth="4" strokeLinecap="round" />
    <path d="M20 28 L28 20" stroke={blueColor} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const Checklist: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <rect x="12" y="6" width="40" height="52" rx="4" stroke={iconColor} strokeWidth="3" />
    <path d="M20 22 L24 26 L32 18" stroke={greenColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="36" y1="22" x2="46" y2="22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M20 34 L24 38 L32 30" stroke={greenColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="36" y1="34" x2="46" y2="34" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    <rect x="19" y="43" width="14" height="6" rx="1" stroke={iconColor} strokeWidth="2" />
    <line x1="36" y1="46" x2="46" y2="46" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Report: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <path d="M14 8 L42 8 L50 16 L50 56 L14 56 Z" stroke={iconColor} strokeWidth="3" strokeLinejoin="round" />
    <path d="M42 8 L42 16 L50 16" stroke={iconColor} strokeWidth="3" strokeLinejoin="round" />
    <rect x="22" y="26" width="4" height="18" fill={blueColor} rx="1" />
    <rect x="30" y="30" width="4" height="14" fill={accentColor} rx="1" />
    <rect x="38" y="22" width="4" height="22" fill={iconColor} rx="1" />
  </svg>
);

export const Analytics: React.FC<IconProps> = ({ size = 48, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill="none">
    <line x1="10" y1="54" x2="54" y2="54" stroke={iconColor} strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="54" x2="10" y2="10" stroke={iconColor} strokeWidth="3" strokeLinecap="round" />
    <polyline points="16,44 26,30 36,36 46,16" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="44" r="3" fill={accentColor} />
    <circle cx="26" cy="30" r="3" fill={accentColor} />
    <circle cx="36" cy="36" r="3" fill={accentColor} />
    <circle cx="46" cy="16" r="3" fill={accentColor} />
  </svg>
);

export const allIcons = [
  { name: 'Check Mark', component: CheckMark, category: 'Verification', desc: 'Basic approval indicator' },
  { name: 'Approved Badge', component: ApprovedBadge, category: 'Verification', desc: 'Formal approval with circle' },
  { name: 'Shield Check', component: ShieldCheck, category: 'Verification', desc: 'Protected/secured status' },
  { name: 'Verified Document', component: VerifiedDoc, category: 'Verification', desc: 'Verified documentation' },
  { name: 'Location Pin', component: LocationPin, category: 'Location', desc: 'Standard geographic marker' },
  { name: 'Map Marker', component: MapMarker, category: 'Location', desc: 'Address/location reference' },
  { name: 'House Location', component: HouseLocation, category: 'Location', desc: 'Property location combo' },
  { name: 'Global Location', component: GlobalLocation, category: 'Location', desc: 'Worldwide coverage' },
  { name: 'House', component: House, category: 'Property', desc: 'Standard residential property' },
  { name: 'Building', component: Building, category: 'Property', desc: 'Multi-unit/commercial' },
  { name: 'Apartment', component: Apartment, category: 'Property', desc: 'Specific residential unit' },
  { name: 'Property Details', component: PropertyDetails, category: 'Property', desc: 'Information/specifications' },
  { name: 'Magnifying Glass', component: MagnifyingGlass, category: 'Inspection', desc: 'Core inspection symbol' },
  { name: 'Checklist', component: Checklist, category: 'Inspection', desc: 'Quality assurance' },
  { name: 'Report', component: Report, category: 'Inspection', desc: 'Documentation and results' },
  { name: 'Analytics', component: Analytics, category: 'Inspection', desc: 'Data and metrics' },
];
