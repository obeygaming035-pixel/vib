import React from 'react';
import { HomeHero } from './HomeHero';
import { TrustStrip } from './TrustStrip';
import { PopularServices } from './PopularServices';
import { MarketplacePreview } from './MarketplacePreview';
import { VPPreview } from './VPPreview';
import { RankUpPreview } from './RankUpPreview';
import { CoachingPreview } from './CoachingPreview';
import { ExperiencePreview } from './ExperiencePreview';
import { TradingClubPreview } from './TradingClubPreview';
import { WhyVIBSection } from './WhyVIBSection';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { Currency, AppPage } from '../../types';

interface HomePageProps {
  currency: Currency;
  onNavigate: (page: AppPage, pkgIndex?: number) => void;
  onOpenCheckout: (title?: string, price?: number) => void;
  onOpenDiscordModal: () => void;
  onOpenEscrowModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currency,
  onNavigate,
  onOpenCheckout,
  onOpenDiscordModal,
  onOpenEscrowModal,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#070a10] text-white">
      {/* 1. Cinematic Hero with 6-Agent Symmetrical Tactical Squad Deck */}
      <HomeHero
        onGetStarted={() => onNavigate('vp')}
        onExploreServices={() => scrollToSection('services')}
        onNavigateToVP={(pkgIndex) => onNavigate('vp', pkgIndex)}
      />

      {/* 2. Trust Platform Highlights Strip matching Image 1 */}
      <TrustStrip />

      {/* 3. Popular Services Grid matching Image 1 ("EXPLORE WHAT WE OFFER") */}
      <PopularServices
        onNavigateToVP={() => onNavigate('vp')}
        onNavigateToMarketplace={() => scrollToSection('marketplace')}
        onNavigateToCoaching={() => scrollToSection('coaching')}
        onNavigateToTrading={() => scrollToSection('trading-club')}
        onViewAllServices={() => scrollToSection('services')}
      />

      {/* 4. Marketplace & Account Vault Preview with Yoru */}
      <MarketplacePreview
        currency={currency}
        onOpenCheckout={(title, price) => onOpenCheckout(title, price)}
      />

      {/* 5. VP Top-Up Direct Preview linking to the dedicated VP Selector */}
      <VPPreview
        currency={currency}
        onNavigateToVP={(pkgIdx) => onNavigate('vp', pkgIdx)}
      />

      {/* 6. Competitive Rank-Up & Deranking with Fade */}
      <RankUpPreview
        currency={currency}
        onOpenCheckout={(title, price) => onOpenCheckout(title, price)}
      />

      {/* 7. Pro Coaching & Training with Sage */}
      <CoachingPreview
        currency={currency}
        onOpenCheckout={(title, price) => onOpenCheckout(title, price)}
      />

      {/* 8. VIB Experience VIP Program with Reyna */}
      <ExperiencePreview />

      {/* 9. Trading Club & Escrow Exchange with Chamber */}
      <TradingClubPreview
        onJoinDiscord={onOpenDiscordModal}
        onOpenEscrowModal={onOpenEscrowModal}
      />

      {/* 10. Why VIB Trust & Security Proof */}
      <WhyVIBSection />

      {/* 11. Final Call To Action */}
      <FinalCTA
        onGetStarted={() => onNavigate('vp')}
        onJoinDiscord={onOpenDiscordModal}
      />

      {/* 12. Full Gaming Footer */}
      <Footer onNavigate={(page) => onNavigate(page as AppPage)} />
    </div>
  );
};
