import React, { useState } from 'react';
import { 
  Gamepad2, TrendingUp, TrendingDown, Coins, Globe, 
  Sparkles, GraduationCap, RefreshCw, ChevronRight, ShieldCheck,
  CreditCard, Zap, Share2, DollarSign, MessageCircle, CheckCircle2,
  Lock, ArrowUpRight
} from 'lucide-react';
import { ClientPage } from '../client/Header';

interface CompleteServicesShowcaseProps {
  onNavigate: (page: ClientPage) => void;
}

type ServiceCategory = 'all' | 'competitive' | 'currency' | 'marketplace' | 'growth';

interface ServiceItem {
  id: string;
  category: 'competitive' | 'currency' | 'marketplace' | 'growth';
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  actionLabel: string;
  targetPage?: ClientPage;
  anchor?: string;
  whatsAppMsg?: string;
}

export const CompleteServicesShowcase: React.FC<CompleteServicesShowcaseProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const allServices: ServiceItem[] = [
    // 1. Digital Profiles
    {
      id: 'profiles',
      category: 'marketplace',
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      badge: 'Lifetime Guaranteed',
      title: 'Digital Profiles Marketplace',
      subtitle: 'Verified Valorant Accounts',
      description: 'Handpicked verified accounts featuring rare skins, weapon collections, and peak competitive ranks. Choose between VIB Lifetime Guaranteed stock or Public Community Marketplace listings with optional escrow.',
      features: ['Verified Creation Email', 'Ranked & Premium Skin Collections', 'Lifetime Recall Protection (VIB Stock)', 'Optional Escrow for Community Deals'],
      actionLabel: 'Browse Profiles',
      targetPage: 'profiles'
    },
    // 2. Rank Progression
    {
      id: 'rankup',
      category: 'competitive',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      badge: '100% Human Radiant',
      title: 'Competitive Rank Progression',
      subtitle: 'Iron to Radiant Advancement',
      description: 'Structured mathematical tier advancement executed exclusively by verified Radiant and Immortal specialists. Strict fair-play guarantee with zero third-party software and upfront refund guarantees.',
      features: ['Solo Play or Duo with Coach (2×)', 'Standard Queue or Priority (+25%)', '100% Refund up to Ascendant 2', 'Discreet VPN & Offline Execution'],
      actionLabel: 'Calculate Price & Order',
      anchor: '#rankup-service'
    },
    // 3. Deranking Service
    {
      id: 'derank',
      category: 'competitive',
      icon: <TrendingDown className="w-6 h-6 text-rose-400" />,
      badge: 'Discreet & Controlled',
      title: 'Rank Adjustment (Deranking)',
      subtitle: 'Safe MMR & Tier Reduction',
      description: 'Controlled competitive tier reduction executed safely without toxic griefing reports, team sabotage, or risk of account bans. Ideal for players looking to reset lobbies or play with lower-ranked friends.',
      features: ['Tier-by-Tier Controlled Drops', 'Zero Report / Clean Record Protocol', 'Solo & Duo Derank Modes', 'Priority Queue 1.5× Available'],
      actionLabel: 'Book Deranking on WhatsApp',
      whatsAppMsg: 'Hello VIB Team, I would like to inquire about Rank Adjustment (Deranking) Service for my profile.'
    },
    // 4. Regional VP Packs
    {
      id: 'vp',
      category: 'currency',
      icon: <Coins className="w-6 h-6 text-amber-400" />,
      badge: 'Direct Riot ID Refills',
      title: 'Regional VP Recharge Packs',
      subtitle: 'Indian (INR) & Philippines (PHP)',
      description: 'Direct in-game Valorant Points top-ups for Indian and converted Philippines accounts. Competitive regional pricing with instant processing and transparent automated delivery.',
      features: ['475 VP to 11,000+ VP Packages', 'Riot ID & Tagline Direct Top-Up', 'Safe Official Payment Gateways', 'Save up to 40% on PHP Region'],
      actionLabel: 'View VP Packages',
      targetPage: 'vp'
    },
    // 5. Region Conversion
    {
      id: 'conversion',
      category: 'currency',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      badge: 'Save ~40% Permanently',
      title: 'IND to PHP Region Conversion',
      subtitle: 'Unlock Lower In-Game Store Prices',
      description: 'Safely transition your profile from Indian region to Philippines to permanently unlock lower Valorant store prices across all upcoming bundles, skins, and Night Market offers.',
      features: ['Permanent ~40% Lower Store Rates', '100% Safe & Structured Protocol', 'Zero In-Game Ban History', '100% Refund if Unfulfilled'],
      actionLabel: 'Start Region Conversion',
      whatsAppMsg: 'Hello VIB Team, I want to convert my Indian Valorant Profile to Philippines region for cheaper VP.'
    },
    // 6. Fresh PHP Profiles
    {
      id: 'fresh-php',
      category: 'currency',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      badge: 'Clean Pre-Configured',
      title: 'Fresh Philippines (PHP) Profiles',
      subtitle: 'Ready-to-Play Cheap VP Accounts',
      description: 'Brand new, unranked clean Philippines profiles registered directly with your personal email and password. Start fresh with permanent access to discounted regional VP pricing.',
      features: ['Created on Your Personal Email', 'Full Initial Credentials Ownership', 'Clean Match History & Unranked', 'Instant Delivery'],
      actionLabel: 'Order Fresh PHP Profile',
      whatsAppMsg: 'Hello VIB Team, I want to purchase a Fresh Philippines (PHP) Profile with my own email credentials.'
    },
    // 7. VP & Profile EMI
    {
      id: 'emi',
      category: 'currency',
      icon: <CreditCard className="w-6 h-6 text-indigo-400" />,
      badge: 'Formal KYC Verified',
      title: 'VP & Profile EMI Financing',
      subtitle: 'Flexible Installment Plans',
      description: 'Afford high-value exclusive skins and bundles through flexible monthly installments. Protected by VIB formal KYC verification (2 government IDs + holding selfie) to prevent scams.',
      features: ['Flexible 2 to 6 Month Installments', 'Zero Hidden Surcharges', 'Formal KYC Security Protocol', 'Available for High-Tier Inventories'],
      actionLabel: 'Inquire EMI Options',
      whatsAppMsg: 'Hello VIB Team, I want to inquire about EMI installment plans for VP / Digital Profiles.'
    },
    // 8. VIB Experience Program
    {
      id: 'experience',
      category: 'marketplace',
      icon: <Sparkles className="w-6 h-6 text-fuchsia-400" />,
      badge: 'Account Rentals',
      title: 'VIB Experience Program',
      subtitle: 'Try Premium Skins Without Full Cost',
      description: 'Test-drive top-tier inventories featuring Kuronami, Prime, Reaver, and Champions skins for a fraction of retail prices. Flexible rental durations with strict security rules.',
      features: ['Daily, Weekend & Weekly Passes', 'Full Access to Rare Skin Loadouts', 'Mandatory Logout Confirmation', 'Affordable & 100% Scam-Free'],
      actionLabel: 'Explore Experience Program',
      whatsAppMsg: 'Hello VIB Team, I would like to book a VIB Experience Pass to rent a premium skin profile.'
    },
    // 9. Profile Promotion
    {
      id: 'promotion',
      category: 'growth',
      icon: <Share2 className="w-6 h-6 text-pink-400" />,
      badge: '25,000+ Deals Closed',
      title: 'Profile Promotion & Advertising',
      subtitle: 'Sell Your Profile Rapidly',
      description: 'Professionally advertise your digital profile to our massive active buyer audience on Instagram, Discord, and the VIB platform. Choose from standard visibility plans up to VIP luxury promotions.',
      features: ['₹55–₹315 Standard Story & Post Plans', '₹2,050 Guaranteed Sale (Promoted till Sold)', '₹3,080 VIP Luxury (Dedicated Agent & Top Spot)', '20,000 to 100,000+ Active Audience Reach'],
      actionLabel: 'View Promotion Plans',
      whatsAppMsg: 'Hello VIB Team, I want to promote my digital profile on your platform and social channels to find buyers.'
    },
    // 10. Urgent Cashout
    {
      id: 'urgent-sale',
      category: 'marketplace',
      icon: <DollarSign className="w-6 h-6 text-amber-400" />,
      badge: 'Instant Buyout',
      title: 'Urgent Sale Cashout Offer',
      subtitle: 'Immediate Liquidation to VIB Network',
      description: 'Need instant cash without waiting for advertisements or buyer negotiations? Submit your premium skin inventory for rapid evaluation and immediate cash buyout via our VIP network.',
      features: ['Direct Instant Valuation', 'Immediate Payout Upon Transfer', 'Zero Advertisement Waiting Time', 'Transparent Evaluation Criteria'],
      actionLabel: 'Request Urgent Evaluation',
      whatsAppMsg: 'Hello VIB Digital Services, I want evaluation of my profile for urgent sale offer.'
    },
    // 11. Trading Club & Escrow
    {
      id: 'trading',
      category: 'marketplace',
      icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
      badge: 'Official Middleman Escrow',
      title: 'Trading Club & Escrow Facility',
      subtitle: 'Scam-Free Profile Exchanges',
      description: 'Safely exchange profiles with fellow gamers backed by official VIB middleman escrow. Every trade is verified manually by senior executives to prevent account recovery scams.',
      features: ['Fixed Escrow Fee: ₹90/person (₹180 total)', 'Flat 3% on Monetary Overpay Difference', 'VIB Executive Trading Club (₹199 one-time)', 'Manual Identity & Credential Checking'],
      actionLabel: 'Book Escrow on WhatsApp',
      whatsAppMsg: 'Hello VIB Team, I need an official VIB Middleman Escrow for an account trade/exchange deal.'
    },
    // 12. 1-on-1 Coaching
    {
      id: 'coaching',
      category: 'competitive',
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      badge: 'Radiant Mentors',
      title: '1-on-1 Pro Valorant Coaching',
      subtitle: 'Elevate Your Mechanical Aim & Game Sense',
      description: 'Personalized private coaching sessions with verified Radiant and Immortal competitive players. Mechanical training routines, crosshair placement, utility lineups, and full VOD reviews.',
      features: ['Live Screen-Share Mechanical Coaching', 'Custom Aim Lab & Range Routines', 'Macro Game Sense & Round Decisions', 'Personalized Improvement Roadmap'],
      actionLabel: 'Book Coaching Session',
      whatsAppMsg: 'Hello VIB Team, I would like to book a 1-on-1 Pro Valorant Coaching session with a Radiant coach.'
    },
    // 13. Referral Program
    {
      id: 'referral',
      category: 'growth',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      badge: 'Earn 5% Commission',
      title: 'VIB Referral & Reseller Program',
      subtitle: 'Turn Your Network into Revenue',
      description: 'Introduce gamers, friends, and your community to VIB services and earn a flat 5% commission on every completed transaction. Welcoming resellers, dropshippers, and community admins.',
      features: ['5% Commission on All Profiles & Services', 'Direct Payout via UPI / Bank Transfer', 'Dedicated Reseller Support Desk', 'Zero Upfront Investment Required'],
      actionLabel: 'Join Referral Program',
      whatsAppMsg: 'Hello VIB Team, I want to join the VIB Referral & Reseller Program to earn 5% commission.'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  const handleAction = (service: ServiceItem) => {
    if (service.whatsAppMsg) {
      const url = `https://wa.me/919181801766?text=${encodeURIComponent(service.whatsAppMsg)}`;
      window.open(url, '_blank');
      return;
    }

    if (service.anchor) {
      const el = document.querySelector(service.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (service.targetPage) {
      onNavigate(service.targetPage);
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto space-y-8 sm:space-y-10">
      {/* Header & Category Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Complete Official Service Suite • 100% Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Everything you need in one place. No hidden categories, hunting, or partial lists — explore every official service provided by VIB below with direct booking access.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#0e0f1d] border border-white/10 text-xs font-semibold self-start lg:self-auto">
          {[
            { id: 'all', label: `All Services (${allServices.length})` },
            { id: 'competitive', label: 'Competitive (3)' },
            { id: 'currency', label: 'VP & Region (4)' },
            { id: 'marketplace', label: 'Marketplace (4)' },
            { id: 'growth', label: 'Growth & Ads (2)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ServiceCategory)}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.45)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid (Responsive: 1-col on mobile, 2-col on tablet, 3-col on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl bg-[#0b0c18] border border-white/[0.09] hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(147,51,234,0.18)] group relative overflow-hidden"
          >
            {/* Top Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

            <div>
              {/* Card Header: Icon & Badge */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/35 text-purple-300">
                  {service.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <div className="text-xs font-mono text-purple-400 mb-3">
                {service.subtitle}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature Bullet Points */}
              <div className="space-y-1.5 mb-6 pt-4 border-t border-white/5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={() => handleAction(service)}
              className="w-full py-3 px-4 rounded-xl bg-[#141528] hover:bg-purple-600 border border-purple-500/30 hover:border-purple-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] cursor-pointer mt-2"
            >
              {service.whatsAppMsg ? (
                <>
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                  <span>{service.actionLabel}</span>
                </>
              ) : (
                <>
                  <span>{service.actionLabel}</span>
                  <ChevronRight className="w-4 h-4 text-purple-400 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Official VIB Guarantee Banner at bottom of services */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#101124] to-purple-950/40 border border-purple-500/30 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-white">Can't Find What You Need? Custom Requirements Supported</div>
            <div className="text-xs text-gray-400">Reach out directly to our 24/7 executive desk for customized volume orders or enterprise gaming setups.</div>
          </div>
        </div>

        <a
          href="https://wa.me/919181801766?text=Hello%20VIB%20Team%2C%20I%20have%20a%20custom%20service%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex-shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp (+91 9181801766)</span>
        </a>
      </div>
    </section>
  );
};
