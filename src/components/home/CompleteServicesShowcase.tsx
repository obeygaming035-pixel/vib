import React from 'react';
import { 
  Gamepad2, TrendingUp, TrendingDown, Coins, Globe, 
  Sparkles, GraduationCap, RefreshCw, ChevronRight, ShieldCheck 
} from 'lucide-react';
import { ClientPage } from '../client/Header';

interface CompleteServicesShowcaseProps {
  onNavigate: (page: ClientPage) => void;
}

export const CompleteServicesShowcase: React.FC<CompleteServicesShowcaseProps> = ({ onNavigate }) => {
  const allServices = [
    {
      id: 'profiles',
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      badge: 'Verified Marketplace',
      title: 'Digital Profiles',
      description: 'Handpicked verified accounts featuring rare skins, weapon collections, and peak competitive ranks with instant credential transfer.',
      actionLabel: 'Browse Profiles',
      targetPage: 'profiles' as ClientPage
    },
    {
      id: 'rankup',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      badge: '100% Human Radiant',
      title: 'Rank Progression',
      description: 'Transparent tier-by-tier rank advancement from Iron to Radiant. Choose Solo execution or Duo play alongside verified coaches.',
      actionLabel: 'Calculate Price',
      targetPage: 'home' as ClientPage,
      anchor: '#rank-calculator'
    },
    {
      id: 'derank',
      icon: <TrendingDown className="w-6 h-6 text-red-400" />,
      badge: 'Discreet & Fast',
      title: 'Deranking Service',
      description: 'Controlled MMR and competitive tier reduction executed safely without toxic penalties or team griefing reports.',
      actionLabel: 'Inquire on WhatsApp',
      isWhatsApp: true
    },
    {
      id: 'vp',
      icon: <Coins className="w-6 h-6 text-yellow-400" />,
      badge: 'Instant Refills',
      title: 'Regional VP Packs',
      description: 'Direct in-game currency refills for Indian (INR) and Philippines (PHP) accounts at the most competitive rates in South Asia.',
      actionLabel: 'View VP Packs',
      targetPage: 'vp' as ClientPage
    },
    {
      id: 'conversion',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      badge: 'Save up to 40%',
      title: 'IND to PHP Conversion',
      description: 'Safely transition any profile region to Philippines to unlock permanently lower VP store pricing. 100% refund-backed protocol.',
      actionLabel: 'Start Conversion',
      targetPage: 'services' as ClientPage
    },
    {
      id: 'experience',
      icon: <Sparkles className="w-6 h-6 text-fuchsia-400" />,
      badge: 'Flexible Plans',
      title: 'VIB Experience Program',
      description: 'Test-drive top-tier inventories and legendary skins with flexible payment schedules without paying the full asset price upfront.',
      actionLabel: 'Explore Experience',
      targetPage: 'services' as ClientPage
    },
    {
      id: 'coaching',
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      badge: 'Radiant Mentors',
      title: '1-on-1 Pro Coaching',
      description: 'Live mechanical aim routines, strategic game sense analysis, and in-depth VOD reviews customized to elevate your rank.',
      actionLabel: 'Book Session',
      targetPage: 'services' as ClientPage
    },
    {
      id: 'trading',
      icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
      badge: 'Scam-Free Escrow',
      title: 'Trading Club & Escrow',
      description: 'Official middleman exchange service enabling gamers to trade profiles securely with verified escrow holding and identity checks.',
      actionLabel: 'Join Club',
      targetPage: 'community' as ClientPage
    }
  ];

  const handleServiceClick = (service: typeof allServices[0]) => {
    if (service.isWhatsApp) {
      window.open('https://wa.me/919181801766?text=Hello%20VIB,%20I%20would%20like%20to%20inquire%20about%20Deranking%20Service', '_blank');
      return;
    }

    if (service.anchor) {
      const el = document.querySelector(service.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    onNavigate(service.targetPage);
  };

  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Complete Service Suite
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Digital <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
            Everything you need in one place. No hidden categories or searching required — browse our complete service catalog below.
          </p>
        </div>

        <div className="text-xs text-gray-500 font-mono">
          8 Core Services Available • 24/7 Fulfilment
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {allServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service)}
            className="bg-[#0f101e] border border-white/10 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(147,51,234,0.18)] cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-white transition-colors">
              <span>{service.actionLabel}</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
