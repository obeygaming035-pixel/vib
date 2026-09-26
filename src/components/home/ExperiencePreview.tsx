import React from 'react';
import { Crown, Sparkles, Gift, Flame, ArrowRight, Check } from 'lucide-react';

export const ExperiencePreview: React.FC = () => {
  const tiers = [
    {
      name: 'BRONZE TIER',
      spend: 'Free to Join',
      perks: ['Standard 1% Cashback on VP', 'Standard Ticket Queue', 'Community Badge'],
      color: '#94a3b8',
      border: 'border-white/10',
    },
    {
      name: 'SILVER TIER',
      spend: '₹5,000+ Spent',
      perks: ['3% Cashback on all services', 'Priority Ticket Queue', 'Monthly VP Voucher Raffles'],
      color: '#cbd5e1',
      border: 'border-slate-400/30',
    },
    {
      name: 'GOLD TIER',
      spend: '₹25,000+ Spent',
      perks: ['5% Cashback Instant Credit', 'Direct WhatsApp Concierge', 'Early Access to Radiant Smurfs'],
      color: '#fbbf24',
      border: 'border-amber-400/40',
    },
    {
      name: 'EMPRESS TIER',
      spend: '₹75,000+ Spent',
      perks: ['8% Max Cashback Tier', 'Dedicated VIP Manager 24/7', 'Guaranteed Rare Knife Allocations', 'Custom Discord Role'],
      color: '#ec4899',
      border: 'border-pink-500/50',
      highlight: true,
    },
  ];

  return (
    <section id="experience" className="relative w-full py-20 bg-[#080710] border-t border-white/5 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Column & Tiers */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-chakra text-pink-300 uppercase tracking-widest mb-3">
              <Crown className="w-3.5 h-3.5 text-pink-400" />
              <span>LOYALTY & REWARDS SYSTEM</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>VIB EXPERIENCE </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-amber-300">
                VIP MEMBERSHIP
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3 mb-8">
              Every purchase automatically accumulates tier points. Unlock permanent store cashback, priority queue processing, and personal concierge middleman support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiers.map((t, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border ${t.border} ${
                    t.highlight ? 'bg-gradient-to-br from-[#1e0a1a] to-[#0d0713]' : 'bg-[#0b0814]/80'
                  } p-5 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 shadow-xl`}
                >
                  {t.highlight && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[8px] font-chakra font-extrabold tracking-widest uppercase bg-pink-600 text-white shadow-md">
                      MOST PRESTIGIOUS
                    </div>
                  )}
                  <div>
                    <div
                      className="font-chakra font-extrabold text-sm tracking-wider uppercase"
                      style={{ color: t.color }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs font-rajdhani text-gray-400 font-semibold mt-0.5">
                      {t.spend}
                    </div>

                    <div className="flex flex-col gap-2 mt-4 text-xs font-rajdhani text-gray-300">
                      {t.perks.map((p, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Feature Card with Reyna Artwork */}
          <div className="lg:col-span-4 order-1 lg:order-2 rounded-2xl border border-pink-500/30 bg-gradient-to-b from-[#1c081e] via-[#120616] to-[#07030b] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 text-[10px] font-chakra font-bold tracking-widest uppercase">
                EMPRESS PRESTIGE
              </span>
              <h3 className="font-teko uppercase text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2 leading-tight">
                UNLEASH YOUR STATUS
              </h3>
              <p className="font-rajdhani text-sm text-gray-300 mt-2">
                Join our private VIP high-roller lounge for direct Riot store reservations, instant refunds, and personalized account matching.
              </p>
            </div>

            {/* Official Reyna Artwork Cutout Anchor */}
            <div className="relative w-full h-[320px] sm:h-[360px] flex items-end justify-center mt-4 pointer-events-none select-none">
              <img
                src="/assets/agents/reyna.png"
                alt="Valorant Reyna Experience VIP"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
