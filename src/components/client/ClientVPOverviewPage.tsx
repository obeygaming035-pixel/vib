import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  CreditCard,
  Zap,
  Headphones,
  Users,
  ArrowRight,
  ShoppingCart,
  Calendar,
  Globe,
  Info,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';

interface ClientVPOverviewPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

/* Flag Components */
const IndiaFlag = ({ className = "w-4 h-3" }: { className?: string }) => (
  <span className={`${className} rounded-sm inline-flex flex-col overflow-hidden border border-white/20 shadow-sm flex-shrink-0`}>
    <span className="h-1/3 bg-[#FF9933] w-full" />
    <span className="h-1/3 bg-white w-full flex items-center justify-center relative">
      <span className="w-1.5 h-1.5 rounded-full border-[0.5px] border-[#000080] bg-[#000080]/40 flex items-center justify-center" />
    </span>
    <span className="h-1/3 bg-[#128807] w-full" />
  </span>
);

const PhilippinesFlag = ({ className = "w-4 h-3" }: { className?: string }) => (
  <span className={`${className} rounded-sm inline-flex relative overflow-hidden border border-white/20 shadow-sm flex-shrink-0`}>
    <span className="h-1/2 bg-[#0038A8] w-full" />
    <span className="h-1/2 bg-[#CE1126] w-full" />
    <span className="absolute left-0 top-0 bottom-0 w-[45%] bg-white [clip-path:polygon(0_0,100%_50%,0_100%)] flex items-center justify-center">
      <span className="w-1 h-1 rounded-full bg-[#FCD116]" />
    </span>
  </span>
);

export const ClientVPOverviewPage: React.FC<ClientVPOverviewPageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const [activeRegion, setActiveRegion] = useState<'in' | 'php' | 'other'>('in');

  const indianPacks = [
    { vp: '475 VP', priceINR: 499 },
    { vp: '1,000 VP', priceINR: 999 },
    { vp: '2,050 VP', priceINR: 1899 },
    { vp: '3,650 VP', priceINR: 3199, badge: 'POPULAR' },
    { vp: '5,350 VP', priceINR: 4499 },
    { vp: '7,400 VP', priceINR: 6199 },
    { vp: '11,000 VP', priceINR: 8999, badge: 'BEST VALUE' },
  ];

  const phpPacks = [
    { vp: '475 VP', priceINR: 299 },
    { vp: '1,000 VP', priceINR: 549 },
    { vp: '1,475 VP', priceINR: 799 },
    { vp: '2,050 VP', priceINR: 1099, badge: 'POPULAR' },
    { vp: '2,525 VP', priceINR: 1349 },
    { vp: '3,050 VP', priceINR: 1599 },
    { vp: '3,650 VP', priceINR: 1999 },
  ];

  const handleBuy = (vp: string, price: number, region: string) => {
    onOpenCheckout(`${vp} (${region} Top-Up)`, price);
  };

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-7 sm:space-y-9 pb-16 font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Reference 3)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden pt-3 sm:pt-5">
        {/* Atmospheric ambient glows */}
        <div className="absolute top-10 right-1/4 w-[650px] h-[550px] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[450px] h-[350px] bg-fuchsia-800/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-[11px] font-mono tracking-[0.22em] text-[#e879f9] uppercase font-bold">
              PREMIUM VP TOP-UP SERVICE
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[64px] xl:text-[72px] font-black uppercase tracking-tight text-white leading-[0.98] font-rajdhani">
              GET VP. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_25px_rgba(192,38,211,0.5)]">
                YOUR WAY.
              </span>
            </h1>

            <div className="space-y-1 text-gray-300 max-w-lg leading-relaxed pt-1">
              <p className="font-extrabold text-sm sm:text-base text-white font-rajdhani tracking-wide">
                Safe. Fast. Flexible.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Top up your account with trusted and verified VP packs at the best prices, only at VIB.
              </p>
            </div>

            {/* 5 Micro Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-200">
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/25 flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-medium">Secure Process</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/25 flex items-center gap-1.5 shadow-md">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-medium">Manual Verification</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/25 flex items-center gap-1.5 shadow-md">
                <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-medium">Multiple Payment Options</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/25 flex items-center gap-1.5 shadow-md">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium">Fast Fulfillment</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/25 flex items-center gap-1.5 shadow-md">
                <Headphones className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-medium">Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic: Omen with floating coins and online card */}
          <div className="lg:col-span-6 relative flex flex-col items-end">
            {/* Top Right Floating Help Box */}
            <div className="w-full max-w-[280px] p-3 rounded-2xl bg-[#0e0a1e]/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center justify-between gap-3 relative z-20 mb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Headphones className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-mono">WE ARE ONLINE</div>
                  <div className="font-extrabold text-xs text-white">9 AM – 9 PM</div>
                </div>
              </div>
              <a
                href="https://wa.me/919181801766?text=Hello%20VIB%20Team%2C%20I%20need%20assistance%20with%20VP%20packs"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                WhatsApp Us →
              </a>
            </div>

            {/* High-Res Hero Renders with Graffiti Overlay */}
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[440px] flex items-center justify-center rounded-2xl">
              {/* Neon Pink Graffiti on Bottom-Right */}
              <div className="absolute right-2 bottom-6 pointer-events-none select-none text-right z-20 space-y-0.5">
                <div className="font-marker text-base sm:text-lg text-purple-400 -rotate-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                  PLAY
                </div>
                <div className="font-marker text-lg sm:text-xl text-fuchsia-400 -rotate-10 drop-shadow-[0_0_10px_rgba(232,121,249,0.9)]">
                  UPGRADE
                </div>
                <div className="font-marker text-xl sm:text-2xl text-purple-300 font-bold -rotate-8 drop-shadow-[0_0_12px_rgba(192,132,252,1)]">
                  BELONG
                </div>
                <div className="pt-2 font-marker text-xs sm:text-sm text-purple-400 -rotate-6">
                  SAME GAME...
                </div>
                <div className="font-marker text-xs sm:text-sm text-fuchsia-300 font-bold -rotate-6">
                  MORE POSSIBILITIES.
                </div>
              </div>

              {/* High-Res 3D Cinematic Omen with Floating VP Coins */}
              <img
                src="/assets/hires/vp_landing_hero.png"
                alt="VIB VP Master Omen"
                className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(168,85,247,0.5)] relative z-10 select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REGION SELECTOR BAR (Matching Reference 3)                             */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {/* Indian VP Tab */}
          <div
            onClick={() => {
              setActiveRegion('in');
              onNavigate('vp-catalog');
            }}
            className={`lg:col-span-3 p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer shadow-md ${
              activeRegion === 'in'
                ? 'bg-gradient-to-r from-purple-950/70 to-[#180f2d] border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-[#0c0a18] border-white/[0.08] hover:border-purple-500/40'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
              <IndiaFlag className="w-5 h-3.5" />
            </div>
            <div>
              <div className="font-black text-sm text-white font-rajdhani tracking-wide">
                Indian VP
              </div>
              <div className="text-[11px] text-gray-400">Standard Rates</div>
            </div>
          </div>

          {/* Philippines VP Tab */}
          <div
            onClick={() => {
              setActiveRegion('php');
              const el = document.getElementById('php-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`lg:col-span-3 p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer shadow-md ${
              activeRegion === 'php'
                ? 'bg-gradient-to-r from-purple-950/70 to-[#180f2d] border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-[#0c0a18] border-white/[0.08] hover:border-purple-500/40'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
              <PhilippinesFlag className="w-5 h-3.5" />
            </div>
            <div>
              <div className="font-black text-sm text-white font-rajdhani tracking-wide">
                Philippines VP
              </div>
              <div className="text-[11px] text-gray-400">Cheaper Rates</div>
            </div>
          </div>

          {/* Other Regions Tab */}
          <div
            onClick={() => {
              setActiveRegion('other');
              const el = document.getElementById('other-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`lg:col-span-3 p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer shadow-md ${
              activeRegion === 'other'
                ? 'bg-gradient-to-r from-purple-950/70 to-[#180f2d] border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-[#0c0a18] border-white/[0.08] hover:border-purple-500/40'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-purple-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="font-black text-sm text-white font-rajdhani tracking-wide">
                Other Regions
              </div>
              <div className="text-[11px] text-gray-400">On Request</div>
            </div>
          </div>

          {/* Not Sure Which Region? Callout */}
          <div className="lg:col-span-3 p-3 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center justify-between gap-2 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 flex-shrink-0">
                <Info className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="font-bold text-xs text-white leading-tight">
                  Not sure which region to choose?
                </div>
                <div className="text-[10px] text-gray-400 leading-tight">
                  Compare rates and find the best option for you.
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('vp-catalog')}
              className="px-2.5 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-200 text-[10px] font-bold transition-colors whitespace-nowrap cursor-pointer"
            >
              View Comparison →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INDIAN VP PACKS SHOWCASE (Matching Reference 3)                        */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Container with purple border header */}
        <div className="p-4 rounded-xl bg-[#0c0a18] border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <IndiaFlag className="w-5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black uppercase text-white font-rajdhani tracking-wide">
                  INDIAN <span className="text-purple-400">VP PACKS</span>
                </h2>
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Standard pricing • Direct top-up • Secure &amp; Verified
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[11px] text-gray-400 hidden xl:block">
              Perfect for players who prefer top-up in Indian region with direct and hassle-free delivery.
            </p>
            <button
              onClick={() => onNavigate('vp-catalog')}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-purple-400" />
              <span>Why Choose Indian VP?</span>
            </button>
          </div>
        </div>

        {/* 7 Cards Showcase with Carousel Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            aria-label="Previous Indian VP Packs"
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            aria-label="Next Indian VP Packs"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 7 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {indianPacks.map((pack, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#0c0a18] border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center justify-between group shadow-md relative"
              >
                {/* Badge if present */}
                {pack.badge && (
                  <span
                    className={`absolute top-2 right-2 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider font-rajdhani shadow-sm ${
                      pack.badge === 'POPULAR'
                        ? 'bg-[#f59e0b] text-black'
                        : 'bg-[#eab308] text-black'
                    }`}
                  >
                    {pack.badge}
                  </span>
                )}

                {/* 3D VP Coin Stack */}
                <div className="w-20 h-20 rounded-lg flex items-center justify-center my-1 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/hires/vp_coins_stack.png"
                    alt={pack.vp}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(168,85,247,0.5)]"
                  />
                </div>

                {/* Title & Pricing */}
                <div className="space-y-1 w-full">
                  <div className="font-black text-sm text-white font-rajdhani tracking-wide">
                    {pack.vp}
                  </div>
                  <div className="font-black text-sm text-[#f472b6] font-rajdhani flex items-center justify-center gap-1.5 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
                    <IndiaFlag className="w-3.5 h-2.5" />
                    <span>{formatCurrencyPrice(pack.priceINR, currency)}</span>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuy(pack.vp, pack.priceINR, 'Indian')}
                  className="w-full mt-3 py-1.5 rounded-lg bg-[#581c87]/70 hover:bg-purple-600 text-purple-100 hover:text-white font-bold text-xs font-rajdhani transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <ShoppingCart className="w-3 h-3" />
                  <span>Buy Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate('vp-catalog')}
            className="px-6 py-2 rounded-xl bg-[#130d24] border border-purple-500/40 text-xs font-bold text-purple-300 hover:bg-purple-600 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md font-rajdhani tracking-wide"
          >
            <span>View All Indian VP Packs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PHILIPPINES VP PACKS SHOWCASE (Matching Reference 3)                   */}
      {/* ========================================================================= */}
      <section id="php-section" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Container with purple border header */}
        <div className="p-4 rounded-xl bg-[#0c0a18] border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <PhilippinesFlag className="w-5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black uppercase text-white font-rajdhani tracking-wide">
                  PHILIPPINES <span className="text-purple-400">VP PACKS</span>
                </h2>
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Cheaper rates • Same experience • More value
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[11px] text-gray-400 hidden xl:block">
              Get VP at lower prices through Philippines region. Same in-game experience, more savings.
            </p>
            <button
              onClick={() => onNavigate('vp-catalog')}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-purple-400" />
              <span>Why Choose PHP?</span>
            </button>
          </div>
        </div>

        {/* 7 Cards Showcase with Carousel Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            aria-label="Previous Philippines VP Packs"
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            aria-label="Next Philippines VP Packs"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 7 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {phpPacks.map((pack, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#0c0a18] border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center justify-between group shadow-md relative"
              >
                {/* Badge if present */}
                {pack.badge && (
                  <span className="absolute top-2 right-2 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider font-rajdhani bg-[#f59e0b] text-black shadow-sm">
                    {pack.badge}
                  </span>
                )}

                {/* 3D VP Coin Stack */}
                <div className="w-20 h-20 rounded-lg flex items-center justify-center my-1 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/hires/vp_coins_stack.png"
                    alt={pack.vp}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(168,85,247,0.5)]"
                  />
                </div>

                {/* Title & Pricing */}
                <div className="space-y-1 w-full">
                  <div className="font-black text-sm text-white font-rajdhani tracking-wide">
                    {pack.vp}
                  </div>
                  <div className="font-black text-sm text-[#f472b6] font-rajdhani flex items-center justify-center gap-1.5 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
                    <PhilippinesFlag className="w-3.5 h-2.5" />
                    <span>{formatCurrencyPrice(pack.priceINR, currency)}</span>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuy(pack.vp, pack.priceINR, 'Philippines')}
                  className="w-full mt-3 py-1.5 rounded-lg bg-[#581c87]/70 hover:bg-purple-600 text-purple-100 hover:text-white font-bold text-xs font-rajdhani transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <ShoppingCart className="w-3 h-3" />
                  <span>Buy Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate('vp-catalog')}
            className="px-6 py-2 rounded-xl bg-[#130d24] border border-purple-500/40 text-xs font-bold text-purple-300 hover:bg-purple-600 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md font-rajdhani tracking-wide"
          >
            <span>View All PHP VP Packs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OTHER REGIONS (ON REQUEST) BAR (Matching Reference 3)                  */}
      {/* ========================================================================= */}
      <section id="other-section" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0a18] border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 shadow-inner">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white font-rajdhani tracking-wide">
                OTHER REGIONS <span className="text-purple-400">(ON REQUEST)</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                We also provide VP packs for Indonesia, Malaysia, Australia and more regions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 font-medium">
                <span className="w-3.5 h-2.5 rounded-sm inline-flex flex-col overflow-hidden border border-white/20">
                  <span className="h-1/2 bg-[#FF0000] w-full" />
                  <span className="h-1/2 bg-white w-full" />
                </span>
                <span>Indonesia</span>
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 font-medium">
                <span className="w-3.5 h-2.5 rounded-sm inline-flex flex-col overflow-hidden border border-white/20">
                  <span className="h-1/2 bg-[#CC0000] w-full" />
                  <span className="h-1/2 bg-white w-full" />
                </span>
                <span>Malaysia</span>
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 font-medium">
                <span className="w-3.5 h-2.5 rounded-sm inline-flex flex-col overflow-hidden border border-white/20">
                  <span className="h-1/2 bg-[#00008B] w-full" />
                  <span className="h-1/2 bg-[#FF0000] w-full" />
                </span>
                <span>Australia</span>
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 font-medium">
                <span className="w-3.5 h-2.5 rounded-sm inline-flex flex-col overflow-hidden border border-white/20">
                  <span className="h-1/2 bg-[#ED2939] w-full" />
                  <span className="h-1/2 bg-white w-full" />
                </span>
                <span>Singapore</span>
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-400 font-medium">
                ••• Others
              </span>
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-rajdhani transition-all flex items-center gap-1.5 shadow-md whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Request on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. 3-COLUMN SUPPORT & INFO CARDS (Matching Reference 3)                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Flexible Payment Plans */}
          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/[0.08] space-y-3 flex flex-col justify-between shadow-md">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white font-rajdhani tracking-wide">
                FLEXIBLE PAYMENT PLANS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Can't pay the full amount right now? Avail VP with our flexible payment plans. Simple KYC, clear terms, and easy instalments.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenCheckout('Flexible Payment Plan Application', 0)}
                className="px-4 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 text-xs font-bold text-purple-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-rajdhani"
              >
                <span>View Payment Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: How To Order */}
          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/[0.08] space-y-3 shadow-md flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white font-rajdhani tracking-wide">
                HOW TO ORDER
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Get your VP in 4 simple steps
              </p>
            </div>

            {/* 4 Steps row */}
            <div className="grid grid-cols-4 gap-2 pt-2 text-center">
              <div className="space-y-1">
                <div className="w-7 h-7 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-bold mx-auto flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                  1
                </div>
                <div className="text-[10px] font-bold text-white font-rajdhani">Select Pack</div>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-bold mx-auto flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                  2
                </div>
                <div className="text-[10px] font-bold text-white font-rajdhani">Provide Details</div>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-bold mx-auto flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                  3
                </div>
                <div className="text-[10px] font-bold text-white font-rajdhani">Make Payment</div>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-bold mx-auto flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                  4
                </div>
                <div className="text-[10px] font-bold text-white font-rajdhani leading-tight">Verification &amp; Delivery</div>
              </div>
            </div>
          </div>

          {/* Card 3: Need Help? */}
          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/[0.08] space-y-3 flex flex-col justify-between shadow-md">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-white font-rajdhani tracking-wide">
                NEED HELP?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our team is here to assist you.<br />
                <span className="text-purple-300 font-semibold">9 AM – 9 PM</span>
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-rajdhani transition-all shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us →</span>
              </a>
              <button
                onClick={() => onNavigate('support')}
                className="px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 text-xs font-bold font-rajdhani transition-colors whitespace-nowrap cursor-pointer"
              >
                View FAQ →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. 4 FULL-WIDTH TRUST BADGES ROW (Matching Reference 3)                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white font-rajdhani">
                Verified &amp; Secure
              </div>
              <div className="text-[11px] text-gray-400">Manual verification for every order</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white font-rajdhani">
                Multiple Payment Options
              </div>
              <div className="text-[11px] text-gray-400">UPI, Bank Transfer &amp; more</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white font-rajdhani">
                Fast &amp; Reliable
              </div>
              <div className="text-[11px] text-gray-400">Timely delivery after verification</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white font-rajdhani">
                Trusted by 50,000+ Users
              </div>
              <div className="text-[11px] text-gray-400">A growing community</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BOTTOM CINEMATIC COMMUNITY BANNER (Matching Reference 3)               */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d071f] via-[#160a33] to-[#0d071f] border border-purple-500/30 overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center justify-between min-h-[160px] sm:h-[170px]">
          {/* Background atmospheric glows */}
          <div className="absolute right-1/3 top-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-pink-600/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left: Cyber Sniper Girl Character filling banner height */}
          <div className="h-full w-48 sm:w-60 flex-shrink-0 flex items-end justify-start overflow-hidden relative z-10 pl-2">
            <img
              src="/assets/hires/hero_sniper_girl_flipped.png"
              alt="Cyber Sniper"
              className="h-full w-auto object-contain object-left-bottom filter drop-shadow-[0_0_20px_rgba(232,121,249,0.5)]"
            />
          </div>

          {/* Center Typography */}
          <div className="space-y-1 relative z-10 text-center md:text-left py-2 px-4">
            <div className="text-xs sm:text-sm font-black tracking-[0.2em] text-white uppercase font-rajdhani">
              MORE THAN A TOP-UP
            </div>
            <div className="font-marker text-lg sm:text-2xl text-[#f472b6] italic tracking-wide drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]">
              IT'S A BETTER EXPERIENCE.
            </div>
          </div>

          {/* Center-Right: 3D Valorant Crest Portal */}
          <div className="hidden lg:flex items-center justify-center relative z-10">
            <div className="w-16 h-16 rounded-full border-2 border-purple-400/40 bg-purple-950/40 flex items-center justify-center relative shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              <div className="w-11 h-11 rounded-full border border-purple-300/60 flex items-center justify-center">
                <span className="font-black text-xl text-purple-300 font-rajdhani">V</span>
              </div>
            </div>
          </div>

          {/* Far Right: Angled Graffiti Callout */}
          <div className="relative z-10 select-none pointer-events-none text-right pr-6 py-3">
            <div className="font-marker text-xs sm:text-sm text-purple-300 -rotate-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              LEVEL UP
            </div>
            <div className="font-marker text-sm sm:text-base text-fuchsia-400 -rotate-10 drop-shadow-[0_0_10px_rgba(232,121,249,0.9)]">
              YOUR JOURNEY
            </div>
            <div className="font-marker text-base sm:text-lg text-purple-200 font-bold -rotate-8 drop-shadow-[0_0_12px_rgba(192,132,252,1)]">
              WITH VIB
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};