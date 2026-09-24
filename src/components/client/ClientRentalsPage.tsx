import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  Crown,
  Lock,
} from 'lucide-react';
import { Currency } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';

interface ClientRentalsPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientRentalsPage: React.FC<ClientRentalsPageProps> = ({
  currency,
  onNavigate,
  onOpenCheckout,
}) => {
  const [selectedDuration, setSelectedDuration] = useState<'24h' | '3d' | '7d' | '30d'>('24h');

  const rentalItems = [
    {
      id: 'rent-1',
      title: 'Kuronami Vandal',
      sub: 'Max Level + All Colors + Finisher',
      image: '/assets/items/vandal-prime.png',
      badge: 'HOTTEST RENTAL',
      prices: { '24h': 199, '3d': 499, '7d': 899, '30d': 2499 },
    },
    {
      id: 'rent-2',
      title: 'Prime Vandal Edition',
      sub: 'Classic Yellow/Wolf + Reload Animation',
      image: '/assets/items/vandal-prime.png',
      badge: 'COMMUNITY FAV',
      prices: { '24h': 149, '3d': 399, '7d': 699, '30d': 1999 },
    },
    {
      id: 'rent-3',
      title: 'RGX 11z Pro Vandal',
      sub: 'Kill Counter + RGB LED Color Cycle',
      image: '/assets/items/vandal-rgx.png',
      badge: 'POPULAR',
      prices: { '24h': 179, '3d': 449, '7d': 799, '30d': 2199 },
    },
    {
      id: 'rent-4',
      title: 'RGX 11z Pro Phantom',
      sub: 'RGB Cycles + Mechanical Sounds',
      image: '/assets/items/phantom-rgx.png',
      badge: 'TOP PHANTOM',
      prices: { '24h': 169, '3d': 429, '7d': 749, '30d': 2099 },
    },
    {
      id: 'rent-5',
      title: 'Reaver Vandal Spec',
      sub: 'Dark Aura + Soul Bell SFX',
      image: '/assets/items/vandal-reaper.png',
      badge: 'ICONIC',
      prices: { '24h': 159, '3d': 399, '7d': 729, '30d': 1999 },
    },
    {
      id: 'rent-6',
      title: 'Champions 2024 Vandal',
      sub: 'Exclusive Glowing Aura + Trophy Finisher',
      image: '/assets/items/vandal-prime.png',
      badge: 'VAULTED RARE',
      prices: { '24h': 249, '3d': 599, '7d': 1099, '30d': 2999 },
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-8 pb-20 font-sans">
      {/* 1. HERO HEADER */}
      <section className="relative w-full overflow-hidden min-h-[280px] sm:min-h-[320px] flex items-center pt-8 pb-6 border-b border-white/5">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Full-bleed Reference Part 10 background with even gradient overlay */}
        <img
          src="/assets/reference_parts/part_10.png"
          alt="VIB Experience Program Weapon Cases"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05040a] via-[#05040a]/85 to-[#05040a]/15 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05040a] via-[#05040a]/20 to-transparent z-[1]" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-purple-300 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-purple-400 font-semibold">Skin Rentals</span>
          </div>

          <div className="max-w-3xl space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>VIB EXPERIENCE PROGRAM</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none font-rajdhani">
              SKIN RENTALS: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400">PREMIUM SKINS. YOUR WAY.</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Experience the rarest Valorant skins at affordable daily and weekly rates. Play with the looks you love without long-term commitments.
            </p>
          </div>

          {/* DURATION SELECTOR - Compact, clearly organized & fully visible */}
          <div className="pt-1 flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-gray-400 uppercase font-bold tracking-wider">
              Select Duration:
            </span>
            <div className="inline-flex flex-wrap items-center gap-2">
              {[
                { key: '24h', label: '24 Hours' },
                { key: '3d', label: '3 Days' },
                { key: '7d', label: '7 Days (Popular)' },
                { key: '30d', label: '30 Days (Best Value)' },
              ].map((d) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setSelectedDuration(d.key as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer ${
                    selectedDuration === d.key
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/40 border border-purple-400/50'
                      : 'bg-[#0e0a1f]/90 hover:bg-[#1a1236] border border-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. RENTAL CATALOG GRID */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rentalItems.map((item) => {
            const price = item.prices[selectedDuration];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0a0717] border border-white/10 hover:border-purple-500/50 p-5 space-y-4 flex flex-col justify-between group shadow-lg transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/9] w-full rounded-xl bg-gradient-to-b from-[#140c26] to-[#0a0717] p-3 flex items-center justify-center overflow-hidden border border-white/5">
                    <span className="absolute top-2 left-2 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30 uppercase">
                      {item.badge}
                    </span>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[85%] h-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-white font-rajdhani tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase">{selectedDuration} RENTAL</div>
                    <div className="text-xl font-black text-white font-rajdhani">
                      {formatCurrencyPrice(price, currency)}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCheckout(`Rent ${item.title} (${selectedDuration})`, price)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-xs font-bold font-rajdhani uppercase tracking-wider text-white shadow-md shadow-purple-600/30 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Rent Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4 RENTAL GUARANTEES */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400">
              <Zap className="w-4 h-4" />
              <h4 className="font-bold text-sm text-white font-rajdhani">Instant Access</h4>
            </div>
            <p className="text-xs text-gray-400">Credentials delivered within 5 minutes directly via WhatsApp or email.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <h4 className="font-bold text-sm text-white font-rajdhani">100% Anti-Cheat Safe</h4>
            </div>
            <p className="text-xs text-gray-400">Pure clean profiles with zero third-party scripts or modifications.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400">
              <Crown className="w-4 h-4" />
              <h4 className="font-bold text-sm text-white font-rajdhani">All Max Variants</h4>
            </div>
            <p className="text-xs text-gray-400">Every weapon includes max level animations, finishers, and chromas.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-fuchsia-400">
              <Clock className="w-4 h-4" />
              <h4 className="font-bold text-sm text-white font-rajdhani">Flexible Extensions</h4>
            </div>
            <p className="text-xs text-gray-400">Extend your rental anytime with pro-rated discounts on longer periods.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
