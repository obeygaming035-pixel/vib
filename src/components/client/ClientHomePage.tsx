import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  Users,
  Headphones,
  Crown,
  ArrowRight,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Disc as Discord,
  Youtube,
  Send,
  Star,
  MessageSquare,
  Sparkles,
  Zap,
  Shield,
  CreditCard,
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';
import { soundFx } from '../../utils/audio';

interface ClientHomePageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientHomePage: React.FC<ClientHomePageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [selectedMarketplace, setSelectedMarketplace] = useState<'guaranteed' | 'public'>('guaranteed');

  const toggleFav = (id: string) => {
    soundFx.playClickSound();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // 5 Real Featured Profiles strictly matching Reference Image media_1789878444993.jpg
  const profiles = [
    {
      id: 'p-immortal-310',
      badge: 'FEATURED',
      title: 'Immortal Profile',
      sub: 'Level 310 • 20+ Skins',
      rankName: 'Immortal',
      rankColor: 'text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/30',
      priceINR: 24999,
      originalPriceINR: 32999,
      avatarImg: '/assets/hires/profiles/card1_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/40' },
      ],
    },
    {
      id: 'p-ascendant-205',
      badge: 'FEATURED',
      title: 'Ascendant Profile',
      sub: 'Level 205 • Prime Collection',
      rankName: 'Ascendant',
      rankColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30',
      priceINR: 14999,
      originalPriceINR: 19999,
      avatarImg: '/assets/hires/profiles/card2_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/40' },
      ],
    },
    {
      id: 'p-radiant-420',
      badge: 'FEATURED',
      title: 'Radiant Profile',
      sub: 'Level 420 • Full Access',
      rankName: 'Radiant',
      rankColor: 'text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30',
      priceINR: 59999,
      originalPriceINR: 89999,
      avatarImg: '/assets/hires/profiles/card3_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/50' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/50' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/50' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/50' },
      ],
    },
    {
      id: 'p-diamond-180',
      badge: 'FEATURED',
      title: 'Diamond Profile',
      sub: 'Level 180 • Multiple Skins',
      rankName: 'Diamond',
      rankColor: 'text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/30',
      priceINR: 8999,
      originalPriceINR: 14999,
      avatarImg: '/assets/hires/profiles/card4_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/40' },
      ],
    },
    {
      id: 'p-ascendant-250',
      badge: 'FEATURED',
      title: 'Ascendant Profile',
      sub: 'Level 250 • Rare Skins',
      rankName: 'Ascendant',
      rankColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30',
      priceINR: 16999,
      originalPriceINR: 24999,
      avatarImg: '/assets/hires/profiles/card5_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-8 sm:space-y-10 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Reference Image media_1789878444993.jpg)       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[310px] flex items-center pt-1 pb-1">
        {/* Ambient atmospheric purple lighting matching reference */}
        <div className="absolute top-1/3 right-1/4 w-[520px] h-[360px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[220px] bg-fuchsia-800/15 rounded-full blur-[80px] pointer-events-none z-[1]" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text Content */}
          <div className="max-w-xl lg:max-w-xl space-y-3 z-10">
            {/* Main Headline (2 lines matching reference exactly) */}
            <div className="space-y-0.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none font-rajdhani">
                EXPLORE
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-[#f3e8ff] via-[#d946ef] to-[#a855f7] drop-shadow-[0_0_25px_rgba(217,70,239,0.6)]">
                DIGITAL PROFILES
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
              Find your next competitive identity. Choose a marketplace below to start browsing verified profiles or community listings.
            </p>

            {/* 4 Trust Micro Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/35 text-xs text-gray-200 flex items-center gap-2 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-medium text-[11px]">Safe &amp; Secure</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/35 text-xs text-gray-200 flex items-center gap-2 shadow-md">
                <Check className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-medium text-[11px]">Verified Process</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/35 text-xs text-gray-200 flex items-center gap-2 shadow-md">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-medium text-[11px]">Active Community</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#120f24]/90 border border-purple-500/35 text-xs text-gray-200 flex items-center gap-2 shadow-md">
                <Headphones className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-medium text-[11px]">Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Hero Art: Cinematic blend matching media_1789991734324.png with current compact shape, size, and position */}
          <div className="relative w-full md:w-[480px] lg:w-[540px] xl:w-[580px] h-[240px] sm:h-[270px] lg:h-[290px] flex-shrink-0 flex items-center justify-end pointer-events-none select-none mt-2 md:mt-0">
            <img
              src="/assets/hires/hero_banner_cinematic_blend.png"
              alt="VIB Digital Profiles Heroine"
              className="w-full h-full object-contain object-right select-none pointer-events-none opacity-95 [mask-image:radial-gradient(ellipse_95%_90%_at_65%_50%,black_45%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_95%_90%_at_65%_50%,black_45%,transparent_100%)]"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CHOOSE A MARKETPLACE (Matching Reference Image media_1789878444993.jpg) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.22em] text-[#e879f9] uppercase font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-[#e879f9]" />
            <span>CHOOSE A MARKETPLACE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-rajdhani">
            Where would you like to browse?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            We offer two separate marketplaces. Choose the one that fits your needs.
          </p>
        </div>

        {/* 2 Large Marketplace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* ------------------------------------------------------------- */}
          {/* Card A: Lifetime Guaranteed Profiles (Gold Border & Theme)    */}
          {/* ------------------------------------------------------------- */}
          <div className="flex flex-col space-y-2">
            <div
              onClick={() => setSelectedMarketplace('guaranteed')}
              className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group min-h-[250px] ${
                selectedMarketplace === 'guaranteed'
                  ? 'bg-gradient-to-br from-[#1b1625] via-[#130f1c] to-[#0d0914] border-2 border-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.25)]'
                  : 'bg-[#0e0c18] border-white/10 hover:border-amber-500/50'
              }`}
            >
              {/* Full background ambient character art (Hooded Assassin with golden rim lighting) */}
              <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
                <img
                  src="/assets/hires/card_guaranteed_bg.png"
                  alt="Guaranteed Agent"
                  className="h-full w-auto object-cover object-left opacity-90"
                />
              </div>

              {/* Card Header Content */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Crown className="w-9 h-9 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]" />
                  <div className="w-9 h-9 rounded-full border border-amber-500/50 bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center text-amber-400 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-black text-xl sm:text-2xl text-white font-rajdhani">
                      <span className="text-amber-400">Lifetime</span> Guaranteed Profiles
                    </h3>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#7c3aed] text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                      VERIFIED BY VIB
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed max-w-md">
                    Handpicked and verified profiles with lifetime guarantee from VIB. Secure, reliable and worry-free.
                  </p>
                </div>

                {/* 3 Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>Lifetime Guarantee</span>
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    <span>Verified &amp; Checked</span>
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <Headphones className="w-3 h-3 text-amber-400" />
                    <span>Direct Support</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-strip matching Reference Image */}
            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/5 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-gray-300">
                  Profiles in this section are covered by VIB's lifetime guarantee subject to our terms and conditions.
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('featured-profiles');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-purple-400 font-semibold text-[11px] ml-3 whitespace-nowrap hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Card B: Public Listings (Blue Border & Theme)                 */}
          {/* ------------------------------------------------------------- */}
          <div className="flex flex-col space-y-2">
            <div
              onClick={() => setSelectedMarketplace('public')}
              className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group min-h-[250px] ${
                selectedMarketplace === 'public'
                  ? 'bg-gradient-to-br from-[#0c1426] via-[#090f1d] to-[#070b16] border-2 border-sky-500/80 shadow-[0_0_35px_rgba(14,165,233,0.25)]'
                  : 'bg-[#0e0c18] border-white/10 hover:border-sky-500/50'
              }`}
            >
              {/* Full background ambient character art (Cyber Blue Agent) */}
              <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex justify-end">
                <img
                  src="/assets/hires/card_public_bg.png"
                  alt="Public Cyber Agent"
                  className="h-full w-auto object-cover object-right opacity-90"
                />
              </div>

              {/* Card Header Content */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Users className="w-9 h-9 text-sky-400 drop-shadow-[0_0_12px_rgba(14,165,233,0.7)]" />
                  <div className="w-9 h-9 rounded-full border border-sky-500/50 bg-sky-500/10 group-hover:bg-sky-500 group-hover:text-black flex items-center justify-center text-sky-400 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-black text-xl sm:text-2xl text-white font-rajdhani">
                      Public Listings
                    </h3>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#0369a1] text-sky-200 border border-sky-400/40 shadow-[0_0_10px_rgba(3,105,161,0.5)]">
                      COMMUNITY MARKETPLACE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed max-w-md">
                    Listings posted by our community members. More variety, more options.
                  </p>
                </div>

                {/* 3 Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-sky-400" />
                    <span>Wide Variety</span>
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-sky-400" />
                    <span>Direct Contact</span>
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-sky-400" />
                    <span>Optional Escrow</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-strip matching Reference Image */}
            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/5 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-gray-300">
                  These are community listings. Sellers are not verified by VIB. You can contact the seller directly and use our optional escrow service for transaction protection.
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('featured-profiles');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-purple-400 font-semibold text-[11px] ml-3 whitespace-nowrap hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. FEATURED LISTINGS: Handpicked Featured Profiles (Matching Reference)   */}
      {/* ========================================================================= */}
      <section id="featured-profiles" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-[0.22em] text-amber-400 uppercase font-semibold">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>FEATURED LISTINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-rajdhani">
              Handpicked Featured Profiles
            </h2>
            <p className="text-xs text-gray-400">
              Premium profiles from our marketplace
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const el = document.getElementById('featured-profiles');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-xl bg-[#23153c] border border-purple-500/40 text-xs font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>View All Featured</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Cards Row (Matching Reference Image exactly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {profiles.map((p) => {
            const isFav = favoriteIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="rounded-xl bg-[#0c0a18] border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                {/* Character preview card top with authentic reference artwork */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#100c1e]">
                  {/* Top Left: FEATURED Badge matching reference */}
                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-[#f59e0b] text-black font-black text-[9px] tracking-wider uppercase shadow-md pointer-events-none select-none">
                    FEATURED
                  </div>

                  {/* Top Right: Heart Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleFav(p.id)}
                    className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-lg cursor-pointer bg-black/40 hover:bg-black/60 border border-white/10 transition-colors z-10"
                    title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFav
                          ? 'fill-rose-500 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]'
                          : 'text-white/80'
                      }`}
                    />
                  </button>

                  <img
                    src={p.avatarImg}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle bottom gradient for smooth transition */}
                  <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#0c0a18] to-transparent pointer-events-none" />
                </div>

                {/* 4 Weapon Skin Preview Slots (Matching Reference exactly) */}
                <div className="px-2.5 pt-2 grid grid-cols-4 gap-1">
                  {p.weapons.map((w, idx) => (
                    <div
                      key={idx}
                      className={`h-7 rounded-md bg-[#131024] border ${w.border} p-0.5 flex items-center justify-center overflow-hidden shadow-sm`}
                    >
                      <img
                        src={w.img}
                        alt="Weapon"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                  ))}
                </div>

                {/* Profile Details */}
                <div className="p-3 space-y-1.5">
                  <h3 className="font-extrabold text-sm text-white group-hover:text-purple-300 transition-colors font-rajdhani">
                    {p.title}
                  </h3>
                  <div className="text-[11px] text-gray-400 leading-snug">
                    {p.sub}
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.rankColor}`}
                    >
                      <Crown className="w-2.5 h-2.5" />
                      <span>{p.rankName}</span>
                    </span>
                  </div>
                </div>

                {/* Pricing and Action Buttons */}
                <div className="p-3 pt-2 border-t border-white/5 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-black text-white font-rajdhani">
                      {formatCurrencyPrice(p.priceINR, currency)}
                    </span>
                    <span className="text-[10px] text-gray-500 line-through font-mono">
                      {formatCurrencyPrice(p.originalPriceINR, currency)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenCheckout(p.title, p.priceINR)}
                      className="flex-1 py-1.5 rounded-lg bg-[#2a174a] hover:bg-[#7c3aed] text-white text-xs font-bold transition-all cursor-pointer text-center border border-purple-500/30"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() =>
                        onAddToCart({
                          id: p.id,
                          title: p.title,
                          subtitle: p.sub,
                          priceINR: p.priceINR,
                          type: 'profile',
                          image: p.avatarImg,
                          quantity: 1,
                        })
                      }
                      className="p-1.5 rounded-lg bg-[#7c3aed] hover:bg-[#9333ea] text-white transition-colors cursor-pointer shadow-md"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. JOIN THE VIB COMMUNITY Banner (Matching Reference Image)               */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#190e33] via-[#120a22] to-[#0c0817] border border-purple-500/30 overflow-hidden shadow-2xl relative min-h-[105px] flex items-center">
          {/* Ambient glow */}
          <div className="absolute left-10 top-0 w-60 h-full bg-purple-600/20 blur-3xl pointer-events-none" />

          {/* Left side: Full-height Character cutout artwork with smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 overflow-hidden pointer-events-none select-none z-0">
            <img
              src="/assets/hires/community_agent_cinematic.png"
              alt="Community Agent"
              className="w-full h-full object-cover object-top opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#120a22]/40 to-[#120a22]" />
          </div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 pl-40 sm:pl-64 gap-5">
            <div className="space-y-1 text-left">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-rajdhani tracking-wide">
                JOIN THE VIB COMMUNITY
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Connect, trade, learn and grow with thousands of members.
              </p>
            </div>

            {/* Right side: Social icons & Join button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all shadow-sm"
                  title="Discord"
                >
                  <Discord className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#229ED9]/20 border border-[#229ED9]/40 flex items-center justify-center text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-all shadow-sm"
                  title="Telegram"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#FF0000]/20 border border-[#FF0000]/40 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => onNavigate('community')}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg flex items-center gap-2 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 4 TRUST CARDS STRIP (Matching VIB Master Requirements Specifications)  */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1: Secure-Link Delivery */}
          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-11 h-11 rounded-full bg-purple-900/35 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs text-white">Secure-Link Delivery</div>
              <div className="text-[11px] text-gray-400">Encrypted credential delivery</div>
            </div>
          </div>

          {/* Card 2: Dedicated Support */}
          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-11 h-11 rounded-full bg-purple-900/35 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs text-white">Dedicated Support</div>
              <div className="text-[11px] text-gray-400">Live executive &amp; order assistance</div>
            </div>
          </div>

          {/* Card 3: Escrow Protected */}
          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-11 h-11 rounded-full bg-purple-900/35 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs text-white">Escrow Protected</div>
              <div className="text-[11px] text-gray-400">Safe community trade mediation</div>
            </div>
          </div>

          {/* Card 4: Flexible Payment Plans */}
          <div className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] flex items-center gap-3.5 shadow-md">
            <div className="w-11 h-11 rounded-full bg-purple-900/35 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-xs text-white">Flexible Payment Plans</div>
              <div className="text-[11px] text-gray-400">Manual UPI, QR &amp; Bank Transfer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};