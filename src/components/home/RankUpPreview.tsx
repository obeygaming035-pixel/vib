import React from 'react';
import { Shield, Zap, Lock, Crosshair, Award, ArrowRight } from 'lucide-react';
import { Currency } from '../../types';

interface RankUpPreviewProps {
  currency: Currency;
  onOpenCheckout: (serviceTitle: string, price: number) => void;
}

export const RankUpPreview: React.FC<RankUpPreviewProps> = ({
  currency,
  onOpenCheckout,
}) => {
  const formatPrice = (inr: number) => {
    if (currency === 'USD') return `$${(inr * 0.012).toFixed(0)}`;
    if (currency === 'EUR') return `€${(inr * 0.011).toFixed(0)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const services = [
    {
      id: 'division-boost',
      title: 'Division Rank-Up Boost',
      subtitle: 'From Iron to Radiant',
      description: 'Order specific division steps. Handled by verified Radiant boosters using strict solo/duo protocols.',
      priceINR: 1499,
      badge: 'POPULAR',
      badgeColor: '#ec4899',
    },
    {
      id: 'duo-carry',
      title: 'Duo Queue Carry',
      subtitle: 'Play With a Radiant Pro',
      description: 'No account sharing required! Queue together with a top 500 radiant booster on your own schedule.',
      priceINR: 1999,
      badge: '100% PRIVATE',
      badgeColor: '#38bdf8',
    },
    {
      id: 'placement-matches',
      title: '5 Placement Matches Guarantee',
      subtitle: 'Max Win Rate Season Start',
      description: 'Guaranteed 4+ wins out of 5 placement games to secure the highest starting rank possible.',
      priceINR: 1199,
      badge: 'SEASON SPECIAL',
      badgeColor: '#a855f7',
    },
    {
      id: 'deranking',
      title: 'Tactical Smurf Deranking',
      subtitle: 'Fast, Safe MMR Drop',
      description: 'Controlled surrender and stack deranking without team sabotage or toxic conduct reports.',
      priceINR: 899,
      badge: 'DISCREET',
      badgeColor: '#64748b',
    },
  ];

  return (
    <section id="rank-up" className="relative w-full py-20 bg-[#070a12] border-t border-white/5 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Details & Services Grid */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-chakra text-fuchsia-300 uppercase tracking-widest mb-3">
              <Crosshair className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>COMPETITIVE MASTERY</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>RANK-UP & </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-400">
                DERANKING SERVICES
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3 mb-8">
              Reach your true competitive tier without toxicity, AFKs, or throwers. Our professional players utilize hardware VPN spoofing, offline client mode, and zero third-party cheat software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl border border-white/10 bg-[#0a0e1a]/80 hover:bg-[#0e1424] p-5 flex flex-col justify-between transition-all duration-300 hover:border-fuchsia-500/40 hover:-translate-y-1 shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-[9px] font-chakra font-extrabold uppercase tracking-wider bg-white/5 border border-white/10"
                        style={{ color: s.badgeColor }}
                      >
                        {s.badge}
                      </span>
                      <span className="text-xs font-chakra text-gray-400">0% Ban Rate</span>
                    </div>

                    <h4 className="font-chakra font-bold text-lg text-white group-hover:text-fuchsia-200 transition-colors">
                      {s.title}
                    </h4>
                    <div className="text-xs font-rajdhani font-semibold text-fuchsia-400/90 mt-0.5">
                      {s.subtitle}
                    </div>
                    <p className="font-rajdhani text-xs text-gray-400 mt-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                    <div>
                      <div className="text-[10px] font-rajdhani text-gray-400 uppercase">Starts at</div>
                      <div className="font-rajdhani font-bold text-xl text-white">
                        {formatPrice(s.priceINR)}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenCheckout(s.title, s.priceINR)}
                      className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-chakra font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image Card featuring Fade Artwork */}
          <div className="lg:col-span-4 order-1 lg:order-2 rounded-2xl border border-fuchsia-500/20 bg-gradient-to-b from-[#140b1e] via-[#0e0817] to-[#07050d] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-chakra font-bold tracking-widest uppercase">
                TACTICAL NIGHTMARE
              </span>
              <h3 className="font-teko uppercase text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2 leading-tight">
                DOMINATE THE LADDER
              </h3>
              <p className="font-rajdhani text-sm text-gray-300 mt-2">
                Every order comes with encrypted VPN tunneling matching your geographic region, ensuring account anonymity and privacy.
              </p>
            </div>

            {/* Official Fade Artwork Cutout Anchor */}
            <div className="relative w-full h-[320px] sm:h-[360px] flex items-end justify-center mt-4 pointer-events-none select-none">
              <img
                src="/assets/agents/fade.png"
                alt="Valorant Fade Rank-Up"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
