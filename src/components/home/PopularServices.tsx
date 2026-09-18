import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Award, RefreshCw } from 'lucide-react';

interface PopularServicesProps {
  onNavigateToVP: () => void;
  onNavigateToMarketplace: () => void;
  onNavigateToCoaching: () => void;
  onNavigateToTrading: () => void;
  onViewAllServices: () => void;
}

export const PopularServices: React.FC<PopularServicesProps> = ({
  onNavigateToVP,
  onNavigateToMarketplace,
  onNavigateToCoaching,
  onNavigateToTrading,
  onViewAllServices,
}) => {
  const services = [
    {
      id: 'vp',
      title: 'VP Top-Up',
      subtitle: 'Fast, Secure & Reliable',
      badge: 'OFFICIAL RIOT',
      accentColor: '#38bdf8',
      gradient: 'from-blue-950/60 via-[#0a1220] to-[#060a12]',
      borderHover: 'hover:border-cyan-500/50',
      action: onNavigateToVP,
      actionLabel: 'Top Up VP',
      visual: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
          {/* Radial ambient glow */}
          <div className="absolute w-28 h-28 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
          {/* Stylized 3D VP Coin */}
          <div className="relative w-20 h-20 rounded-full border-2 border-cyan-400/60 bg-gradient-to-br from-cyan-400/30 to-blue-950/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)]">
            <span className="font-teko font-bold text-4xl text-white tracking-wider drop-shadow-md">
              VP
            </span>
          </div>
          <div className="absolute bottom-2 left-4 text-[10px] font-chakra text-cyan-300/80 uppercase tracking-wider">
            All Regions • Instant Credit
          </div>
        </div>
      ),
    },
    {
      id: 'accounts',
      title: 'Valorant Accounts',
      subtitle: 'Premium & Verified',
      badge: 'FULL ACCESS',
      accentColor: '#ef4444',
      gradient: 'from-red-950/50 via-[#140b10] to-[#08070d]',
      borderHover: 'hover:border-red-500/50',
      action: onNavigateToMarketplace,
      actionLabel: 'Browse Accounts',
      visual: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
          <div className="absolute w-32 h-20 rounded-full bg-red-600/20 blur-2xl" />
          <img
            src="/assets/items/vandal-rgx.png"
            alt="Premium Vandal Skin"
            referrerPolicy="no-referrer"
            className="w-56 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] transform -rotate-3 hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-2 left-4 text-[10px] font-chakra text-red-300/80 uppercase tracking-wider">
            Smurfs • Ranked • Bundles
          </div>
        </div>
      ),
    },
    {
      id: 'coaching',
      title: 'Coaching',
      subtitle: 'Improve Your Gameplay',
      badge: 'PRO RADIANT',
      accentColor: '#3b82f6',
      gradient: 'from-sky-950/50 via-[#0a1122] to-[#070b14]',
      borderHover: 'hover:border-blue-500/50',
      action: onNavigateToCoaching,
      actionLabel: 'Book Coach',
      visual: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
          <div className="absolute w-28 h-28 rounded-full bg-blue-600/20 blur-xl" />
          <div className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Award className="w-7 h-7 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="text-xs font-chakra font-bold text-white">1-on-1 VOD Analysis</div>
              <div className="text-[10px] font-rajdhani text-gray-300">Radiant Coaches • Custom Drills</div>
            </div>
          </div>
          <div className="absolute bottom-2 left-4 text-[10px] font-chakra text-blue-300/80 uppercase tracking-wider">
            Aim • Gamesense • Lineups
          </div>
        </div>
      ),
    },
    {
      id: 'trading',
      title: 'Account Trading',
      subtitle: 'Buy & Sell Safely',
      badge: 'ESCROW VERIFIED',
      accentColor: '#a855f7',
      gradient: 'from-purple-950/60 via-[#130d22] to-[#080710]',
      borderHover: 'hover:border-purple-500/50',
      action: onNavigateToTrading,
      actionLabel: 'Trade Now',
      visual: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
          <div className="absolute w-28 h-28 rounded-full bg-purple-600/20 blur-xl" />
          <div className="relative w-28 h-24 rounded-xl border border-purple-500/40 bg-gradient-to-tr from-purple-900/60 to-fuchsia-900/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.3)] transform rotate-2">
            <RefreshCw className="w-7 h-7 text-purple-300 mb-1" />
            <span className="text-[10px] font-chakra font-bold text-purple-200 tracking-wider uppercase">
              ESCROW
            </span>
          </div>
          <div className="absolute bottom-2 left-4 text-[10px] font-chakra text-purple-300/80 uppercase tracking-wider">
            Verified Middleman • Escrow Protected
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="relative w-full py-16 sm:py-20 bg-[#070a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching Image 1 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-chakra tracking-[0.25em] text-gray-500 uppercase mb-1">
              DIGITAL CATALOG
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
              <span>EXPLORE WHAT </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 filter drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                WE OFFER
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllServices}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-sm font-rajdhani font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors uppercase tracking-wider group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={item.action}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-b ${item.gradient} p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${item.borderHover} group cursor-pointer overflow-hidden`}
            >
              {/* Top Row: Badge & Action Chevron */}
              <div className="flex items-center justify-between z-10">
                <span
                  className="px-2.5 py-0.5 rounded text-[9px] font-chakra font-extrabold tracking-wider uppercase bg-white/10 text-gray-200 border border-white/15"
                  style={{ color: item.accentColor }}
                >
                  {item.badge}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Center Visual */}
              <div className="my-2 z-10">{item.visual}</div>

              {/* Bottom Information */}
              <div className="pt-3 border-t border-white/5 z-10">
                <h3 className="font-chakra font-bold text-xl text-white group-hover:text-fuchsia-200 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="font-rajdhani text-xs sm:text-sm text-gray-400 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Subtle hover background highlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${item.accentColor}15 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
