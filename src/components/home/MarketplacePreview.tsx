import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Lock, Sparkles, Filter } from 'lucide-react';
import { Currency } from '../../types';

interface MarketplacePreviewProps {
  currency: Currency;
  onOpenCheckout: (itemTitle: string, price: number) => void;
}

export const MarketplacePreview: React.FC<MarketplacePreviewProps> = ({
  currency,
  onOpenCheckout,
}) => {
  const [filter, setFilter] = useState<'all' | 'radiant' | 'knives' | 'smurfs'>('all');

  const formatPrice = (inr: number) => {
    if (currency === 'USD') return `$${(inr * 0.012).toFixed(0)}`;
    if (currency === 'EUR') return `€${(inr * 0.011).toFixed(0)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const accounts = [
    {
      id: 'acc-1',
      title: 'Radiant Peak • 45+ Premium Skins',
      tag: 'RADIANT RANKED',
      category: 'radiant',
      priceINR: 12499,
      level: 184,
      server: 'AP / Mumbai & Singapore',
      highlights: ['Champions 2023 Bundle', 'Kuronami Vandal', 'Reaver Karambit'],
      badgeColor: '#fbbf24',
    },
    {
      id: 'acc-2',
      title: 'Immortal 3 • Full Knife Collection',
      tag: 'IMMORTAL ELITE',
      category: 'knives',
      priceINR: 8999,
      level: 142,
      server: 'AP / India & SEA',
      highlights: ['Ignite Fan', 'Prime Karambit', 'Xenohunter Knife'],
      badgeColor: '#ef4444',
    },
    {
      id: 'acc-3',
      title: 'Fresh Ranked Ready Smurf • Level 20',
      tag: 'UNRANKED SMURF',
      category: 'smurfs',
      priceINR: 799,
      level: 21,
      server: 'AP / Global',
      highlights: ['Original Email Included', 'Clean MMR History', '0 Ranked Games Played'],
      badgeColor: '#38bdf8',
    },
    {
      id: 'acc-4',
      title: 'Ascendant 2 • Arcane Vandal & Sheriff',
      tag: 'COLLECTOR SPEC',
      category: 'knives',
      priceINR: 6499,
      level: 98,
      server: 'AP / Mumbai',
      highlights: ['Exclusive Arcane Bundle', 'Prime Vandal', 'Magepunk Electroblade'],
      badgeColor: '#c026d3',
    },
  ];

  const filteredAccounts = filter === 'all'
    ? accounts
    : accounts.filter((a) => a.category === filter);

  return (
    <section id="marketplace" className="relative w-full py-20 bg-[#06080e] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Header & Description */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-chakra text-blue-300 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>VERIFIED VALORANT ACCOUNTS</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>MARKETPLACE </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                & ACCOUNT VAULT
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3">
              Instantly secure clean smurfs, rare champion bundle accounts, and peak Radiant profiles.
              Every account includes original email change access and lifetime insurance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            {(['all', 'radiant', 'knives', 'smurfs'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-chakra font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:bg-white/10'
                }`}
              >
                {cat === 'all' ? 'All Accounts' : cat === 'knives' ? 'Knife Heavy' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout: Character Visual + Account Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Card with Yoru Artwork */}
          <div className="lg:col-span-4 rounded-2xl border border-blue-500/20 bg-gradient-to-b from-[#0b1424] via-[#090f1c] to-[#060912] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-chakra font-bold tracking-widest uppercase">
                DIMENSIONAL TRANSFER
              </span>
              <h3 className="font-teko uppercase text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2 leading-tight">
                GUARANTEED SAFE OWNERSHIP
              </h3>
              <p className="font-rajdhani text-sm text-gray-300 mt-2">
                All accounts pass a 7-point background verification. Full credentials delivered automatically in under 60 seconds.
              </p>

              <div className="flex flex-col gap-2 mt-4 text-xs font-rajdhani text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Email Access & Password Changeable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>0% Recall Rate Guarantee with Free Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Dedicated Support & Middleman Protection</span>
                </div>
              </div>
            </div>

            {/* Official Yoru Artwork Cutout Anchor */}
            <div className="relative w-full h-[280px] sm:h-[320px] flex items-end justify-center mt-4 pointer-events-none select-none">
              <img
                src="/assets/agents/yoru.png"
                alt="Valorant Yoru Account Vault"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>

          {/* Right Account Listing Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredAccounts.map((acc) => (
              <div
                key={acc.id}
                className="rounded-2xl border border-white/10 bg-[#090d16]/70 hover:bg-[#0c1220] p-5 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 shadow-lg group backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-chakra font-extrabold tracking-wider uppercase bg-white/5 border border-white/10"
                      style={{ color: acc.badgeColor }}
                    >
                      {acc.tag}
                    </span>
                    <span className="text-[11px] font-rajdhani text-gray-400">
                      Level {acc.level} • {acc.server}
                    </span>
                  </div>

                  <h4 className="font-chakra font-bold text-lg text-white group-hover:text-blue-200 transition-colors leading-snug">
                    {acc.title}
                  </h4>

                  {/* Highlights list */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {acc.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-rajdhani text-gray-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                  <div>
                    <div className="text-[10px] font-rajdhani text-gray-400 uppercase">Price</div>
                    <div className="font-rajdhani font-extrabold text-2xl text-white">
                      {formatPrice(acc.priceINR)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenCheckout(acc.title, acc.priceINR)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-chakra font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    <span>Instant Buy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
