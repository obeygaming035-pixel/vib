export interface VPPackage {
  id: string;
  agentName: string;
  agentTitle: string;
  agentRole: string;
  vpAmount: number;
  vpLabel: string;
  priceINR: number;
  badge?: 'POPULAR' | 'BEST VALUE';
  quote: string;
  quoteAuthor: string;
  graffitiLeft: string;
  graffitiRight?: string;
  footerTag: string;
  description: string;
  // Visual & Theming Properties
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentGlow: string;
    bgGradient: string;
    atmosphereHaze: string;
    cityLightingTint: string;
    activeBorderColor: string;
    tagBorderColor: string;
    badgeBg: string;
    badgeText: string;
    ctaGradient: string;
  };
  // Assets
  characterAsset: string;
  characterBgAsset: string;
}

export type Currency = 'INR' | 'USD' | 'EUR';

export type AppPage = 'home' | 'marketplace' | 'vp' | 'services' | 'experience' | 'trading-club' | 'support';
