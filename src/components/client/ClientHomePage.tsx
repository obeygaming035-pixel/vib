import React, { useState, useEffect } from 'react';
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
  Clock,
  Gavel,
  TrendingUp,
  TrendingDown,
  Repeat,
  Globe,
  Award,
  Tv,
  Crosshair,
  Target,
  Flame,
  CheckCircle2,
  Lock,
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

const RANK_TIERS = [
  { name: 'Iron', color: 'from-gray-600 to-zinc-700', border: 'border-zinc-600', text: 'text-zinc-400', badge: 'IRON' },
  { name: 'Bronze', color: 'from-amber-800 to-yellow-900', border: 'border-amber-700', text: 'text-amber-500', badge: 'BRONZE' },
  { name: 'Silver', color: 'from-slate-400 to-gray-500', border: 'border-slate-400', text: 'text-slate-300', badge: 'SILVER' },
  { name: 'Gold', color: 'from-yellow-500 to-amber-600', border: 'border-yellow-400', text: 'text-yellow-400', badge: 'GOLD' },
  { name: 'Platinum', color: 'from-cyan-500 to-teal-600', border: 'border-cyan-400', text: 'text-cyan-400', badge: 'PLAT' },
  { name: 'Diamond', color: 'from-purple-500 to-fuchsia-600', border: 'border-purple-400', text: 'text-purple-400', badge: 'DIAMOND' },
  { name: 'Ascendant', color: 'from-emerald-500 to-green-600', border: 'border-emerald-400', text: 'text-emerald-400', badge: 'ASCEND' },
  { name: 'Immortal', color: 'from-rose-500 to-red-600', border: 'border-rose-400', text: 'text-rose-400', badge: 'IMMORTAL' },
  { name: 'Radiant', color: 'from-amber-300 via-yellow-400 to-yellow-200', border: 'border-yellow-300', text: 'text-yellow-300', badge: 'RADIANT' },
];

export const ClientHomePage: React.FC<ClientHomePageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [selectedMarketplace, setSelectedMarketplace] = useState<'guaranteed' | 'public'>('guaranteed');
  const [journeyType, setJourneyType] = useState<'rankup' | 'derank'>('rankup');

  // Working live auction countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 36,
  });

  const [currentBid, setCurrentBid] = useState(4850);
  const [bidCount, setBidCount] = useState(18);
  const [userBidInput, setUserBidInput] = useState('5000');
  const [bidSuccessMessage, setBidSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    const bidVal = parseInt(userBidInput, 10);
    if (isNaN(bidVal) || bidVal <= currentBid) {
      alert(`Bid must be greater than current bid of ₹${currentBid.toLocaleString()}`);
      return;
    }
    setCurrentBid(bidVal);
    setBidCount((c) => c + 1);
    setUserBidInput(String(bidVal + 250));
    setBidSuccessMessage(`Bid of ₹${bidVal.toLocaleString()} placed successfully! You are the highest bidder.`);
    setTimeout(() => setBidSuccessMessage(null), 5000);
  };

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
      rankIcon: '/assets/hires/ranks/immortal.png',
      slot1RankGlow: 'border-[#f43f5e]/40 shadow-[0_0_8px_rgba(244,63,94,0.3)]',
      priceINR: 24999,
      originalPriceINR: 32999,
      avatarImg: '/assets/hires/profiles/card1_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
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
      rankIcon: '/assets/hires/ranks/ascendant.png',
      slot1RankGlow: 'border-[#10b981]/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]',
      priceINR: 14999,
      originalPriceINR: 19999,
      avatarImg: '/assets/hires/profiles/card2_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
      ],
    },
    {
      id: 'p-radiant-420',
      badge: 'FEATURED',
      title: 'Radiant Profile',
      sub: 'Level 420 • Full Access',
      rankName: 'Radiant',
      rankColor: 'text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30',
      rankIcon: '/assets/hires/ranks/radiant.png',
      slot1RankGlow: 'border-[#fbbf24]/40 shadow-[0_0_8px_rgba(251,191,36,0.3)]',
      priceINR: 59999,
      originalPriceINR: 89999,
      avatarImg: '/assets/hires/profiles/card3_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/50' },
        { img: '/assets/items/vandal-reaper.png', border: 'border-purple-500/50' },
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
      rankIcon: '/assets/hires/ranks/diamond.png',
      slot1RankGlow: 'border-[#38bdf8]/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]',
      priceINR: 8999,
      originalPriceINR: 14999,
      avatarImg: '/assets/hires/profiles/card4_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
      ],
    },
    {
      id: 'p-ascendant-250',
      badge: 'FEATURED',
      title: 'Ascendant Profile',
      sub: 'Level 250 • Rare Skins',
      rankName: 'Ascendant',
      rankColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30',
      rankIcon: '/assets/hires/ranks/ascendant.png',
      slot1RankGlow: 'border-[#10b981]/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]',
      priceINR: 16999,
      originalPriceINR: 24999,
      avatarImg: '/assets/hires/profiles/card5_exact.jpg',
      weapons: [
        { img: '/assets/items/vandal-prime.png', border: 'border-amber-500/40' },
        { img: '/assets/items/vandal-rgx.png', border: 'border-emerald-500/40' },
        { img: '/assets/items/phantom-rgx.png', border: 'border-cyan-500/40' },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-8 sm:space-y-10 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Reference Image media_1789878444993.jpg)       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[410px] flex items-center">
        {/* Ambient atmospheric purple lighting matching reference */}
        <div className="absolute top-1/3 right-1/4 w-[520px] h-[360px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[220px] bg-fuchsia-800/15 rounded-full blur-[80px] pointer-events-none z-[1]" />

        {/* Seamless Hero Art: Full-height backdrop at natural scale slid towards the left with strictly 0 outlines */}
        <div className="absolute top-0 right-0 sm:right-14 md:right-24 lg:right-36 xl:right-48 bottom-0 w-full sm:w-[56%] lg:w-[52%] max-w-[740px] pointer-events-none select-none overflow-hidden z-0 flex items-center justify-end">
          <img
            src="/assets/hires/hero_banner_full.jpg"
            alt="VIB Digital Profiles Heroine"
            className="w-full h-full object-cover object-right select-none pointer-events-none opacity-95"
          />
          {/* Smooth feathering gradient on the left boundary */}
          <div className="absolute inset-y-0 left-0 w-44 sm:w-64 bg-gradient-to-r from-[#05040a] via-[#05040a]/85 to-transparent z-[1]" />
          {/* Soft top/bottom/right edge softening */}
          <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-[#05040a] to-transparent z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#05040a] to-transparent z-[1]" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#05040a] to-transparent z-[1]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text Content */}
          <div className="max-w-xl lg:max-w-xl space-y-3 z-10">
            {/* Breadcrumb matching reference media_1789878444993.jpg */}
            <div className="text-xs text-gray-400 font-medium flex items-center gap-1.5 select-none">
              <span className="hover:text-gray-200 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>
                Home
              </span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-purple-400 font-semibold">Digital Profiles</span>
            </div>

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

                {/* 4 Preview Slots: Slot 1 is Rank Emblem, Slots 2-4 are Weapons (Matching Reference Exactly) */}
                <div className="px-2.5 pt-2 grid grid-cols-4 gap-1">
                  {/* Slot 1: Rank Emblem */}
                  <div className={`h-7 rounded-md bg-[#131024] border ${p.slot1RankGlow} p-0.5 flex items-center justify-center overflow-hidden shadow-sm`}>
                    <img
                      src={p.rankIcon}
                      alt={p.rankName}
                      className="w-5 h-5 object-contain filter drop-shadow-[0_0_6px_currentColor]"
                    />
                  </div>
                  {/* Slots 2-4: Weapons */}
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

                {/* Profile Details (Matching Reference Exactly) */}
                <div className="p-3 space-y-1">
                  <h3 className="font-extrabold text-sm text-white group-hover:text-purple-300 transition-colors font-rajdhani">
                    {p.title}
                  </h3>
                  <div className="text-[11px] text-gray-400 leading-snug">
                    {p.sub}
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <img
                      src={p.rankIcon}
                      alt={p.rankName}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span className="text-[11px] font-semibold text-slate-300">
                      {p.rankName}
                    </span>
                  </div>
                </div>

                {/* Pricing and Action Buttons (Matching Reference Exactly) */}
                <div className="p-3 pt-2 border-t border-white/5 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-black text-[#ff2ebb] font-rajdhani">
                      {formatCurrencyPrice(p.priceINR, currency)}
                    </span>
                    <span className="text-[10px] text-gray-500 line-through font-mono">
                      {formatCurrencyPrice(p.originalPriceINR, currency)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenCheckout(p.title, p.priceINR)}
                      className="flex-1 py-1.5 rounded-lg bg-gradient-to-r from-[#4c1d95] to-[#581c87] hover:from-[#6b21a8] hover:to-[#7e22ce] text-white text-xs font-bold transition-all cursor-pointer text-center border border-purple-500/40 shadow-[0_0_10px_rgba(147,51,234,0.3)]"
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
                      className="p-1.5 rounded-lg bg-[#581c87] hover:bg-[#6b21a8] text-white transition-colors cursor-pointer border border-purple-500/40 shadow-[0_0_10px_rgba(147,51,234,0.3)]"
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
      {/* 2B. SOCIAL CONVERSION BANNERS (Matching Reference media_1790095363501.jpg) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Left: Follow Our Instagram Banner with authentic Part 03 & Part 04 */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#180d28] via-[#10091c] to-[#0a0614] border border-pink-500/25 p-5 sm:p-6 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-pink-500/40 transition-all">
            {/* Ambient sunset glow */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-3 max-w-sm">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-widest text-[#f43f5e] uppercase font-bold">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#f59e0b] via-[#ec4899] to-[#8b5cf6] flex items-center justify-center text-white shadow-sm">
                    <Instagram className="w-3 h-3" />
                  </div>
                  <span>FOLLOW OUR INSTAGRAM</span>
                </div>

                {/* Headline */}
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-rajdhani tracking-wide leading-tight">
                  STAY UPDATED <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                    &amp; WIN EXCITING REWARDS!
                  </span>
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  Follow us on Instagram to stand a chance to win giveaways of VP, Profiles and Cash Prizes!
                </p>

                {/* 4 Micro Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-full bg-[#201133]/80 border border-pink-500/30 text-[10.5px] font-medium text-pink-200 flex items-center gap-1">
                    🎁 Giveaways
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#201133]/80 border border-pink-500/30 text-[10.5px] font-medium text-pink-200 flex items-center gap-1">
                    ⚡ Exclusive Drops
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#201133]/80 border border-pink-500/30 text-[10.5px] font-medium text-pink-200 flex items-center gap-1">
                    📢 Announcements
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#201133]/80 border border-pink-500/30 text-[10.5px] font-medium text-pink-200 flex items-center gap-1">
                    🎉 Fun Events
                  </span>
                </div>
              </div>

              {/* Right: Authentic Part 03 Phone (3D Neon Instagram Phone with Ribbons & Notifications) */}
              <div className="relative w-40 sm:w-48 h-56 flex-shrink-0 flex items-center justify-center select-none pointer-events-none mx-auto sm:mx-0">
                <img
                  src="/assets/reference_parts/part_03_phone.png"
                  alt="3D Instagram Phone"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.55)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 mt-2 border-t border-white/5 relative z-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-800 via-pink-700 to-rose-600 hover:from-purple-700 hover:via-pink-600 hover:to-rose-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Follow Us on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Join Our WhatsApp Channel Banner with authentic Part 01 */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1f19] via-[#091512] to-[#050c0a] border border-emerald-500/25 p-5 sm:p-6 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all">
            {/* Ambient emerald glow */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-3 max-w-sm">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-widest text-[#10b981] uppercase font-bold">
                  <div className="w-5 h-5 rounded-md bg-[#25D366] flex items-center justify-center text-white shadow-sm font-bold text-xs">
                    💬
                  </div>
                  <span>JOIN OUR WHATSAPP CHANNEL</span>
                </div>

                {/* Headline */}
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-rajdhani tracking-wide leading-tight">
                  BE THE FIRST <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-200">
                    TO KNOW!
                  </span>
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  Join our official WhatsApp channel to receive latest updates, drops, giveaway announcements, coupons and more — directly delivered to you.
                </p>

                {/* 8-Item Checklist (2 Columns) */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-1 text-[11px] text-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Latest Updates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Special Coupons</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Instant Announcements</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Early Access</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Exclusive Drops</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Important Notices</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Giveaway Alerts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Be the First to Get Benefits</span>
                  </div>
                </div>
              </div>

              {/* Right: Authentic Part 01 Phone (3D Glowing Emerald WhatsApp Phone with Ribbons) */}
              <div className="relative w-40 sm:w-48 h-56 flex-shrink-0 flex items-center justify-center select-none pointer-events-none mx-auto sm:mx-0">
                <img
                  src="/assets/reference_parts/part_01_phone.png"
                  alt="3D WhatsApp Emerald Phone"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(16,185,129,0.55)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 mt-2 border-t border-white/5 relative z-10">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Our WhatsApp Channel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2C. SELL YOUR ACCOUNT WITH VIB (Matching Reference media_1790095363501.jpg)*/}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#140b2b] via-[#0d071c] to-[#080512] border border-purple-500/30 overflow-hidden shadow-2xl relative p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Ambient purple aura */}
          <div className="absolute right-10 top-0 w-80 h-full bg-purple-600/20 blur-3xl pointer-events-none" />

          {/* Left: Content */}
          <div className="space-y-4 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#d946ef] uppercase font-bold">
              <MessageSquare className="w-3.5 h-3.5 text-[#d946ef]" />
              <span>SELL YOUR ACCOUNT WITH VIB</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white font-rajdhani tracking-tight leading-none">
              Turn Your Profile Into Profit
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
              Looking to sell your account? List it with VIB and reach thousands of buyers. Choose from our flexible advertisement plans and get the exposure you deserve.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button
                onClick={() => onOpenCheckout('VIB Profile Advertisement Plan', 1499)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-600 hover:from-purple-600 hover:to-fuchsia-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(217,70,239,0.35)] flex items-center justify-center gap-2 cursor-pointer w-fit"
              >
                <span>View Advertisement Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Reach Genuine Buyers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Fast &amp; Easy Listing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Flexible Plans</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Trusted Platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Authentic Part 06 ("LIST. SELL. EARN." graffiti art cutout with cyberpunk girl & coins) */}
          <div className="relative w-full md:w-[45%] max-w-[420px] h-56 sm:h-64 flex-shrink-0 flex items-center justify-end select-none pointer-events-none">
            <img
              src="/assets/reference_parts/part_06.png"
              alt="Sell with VIB List Sell Earn"
              className="w-full h-full object-contain object-right"
              style={{
                maskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3B. VIB URGENT SALE OFFER & REGIONAL VP PACKS HUB (Matching Reference 2)  */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Urgent Sale Offer Dual Cards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1c0817] via-[#240a1c] to-[#12050f] border border-rose-500/40 shadow-2xl relative overflow-hidden">
          {/* Atmospheric Crimson Glow */}
          <div className="absolute -right-10 top-0 w-80 h-full bg-rose-600/20 blur-3xl pointer-events-none" />

          {/* Authentic Reference Asset: Part 07 (Red hooded assassin & glowing cards) with smooth edge blend */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[42%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
            <img
              src="/assets/reference_parts/part_07.png"
              alt="Urgent Sale Red Assassin"
              className="h-full w-auto object-contain object-right opacity-80"
              style={{
                maskImage: 'linear-gradient(to left, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 65%, transparent 100%)',
              }}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold">
                <Zap className="w-3.5 h-3.5 text-rose-400" />
                <span>SELL YOUR PROFILE • TWO WAYS TO SELL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white font-rajdhani tracking-tight leading-none">
                VIB URGENT SALE OFFER
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Need to sell your profile fast? Get an urgent sale offer through VIB. Our verified buyer network gives you a rapid cashout or maximum marketplace value.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs">
                <button
                  onClick={() => onOpenCheckout('Urgent Profile Valuation Request', 0)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold font-rajdhani uppercase tracking-wider text-xs shadow-lg shadow-rose-600/30 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Get My Profile Evaluated</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('vp')}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold font-rajdhani uppercase tracking-wider text-gray-200 hover:text-white transition-colors cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Dual Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto relative z-10">
              <div className="p-4 rounded-xl bg-[#11050e]/90 backdrop-blur-sm border border-rose-500/40 space-y-2 min-w-[240px] shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">URGENT SALE</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/40 uppercase">FASTER</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>✓ Instant valuation within 2h</div>
                  <div>✓ Immediate payout to UPI</div>
                  <div>✓ Zero listing waiting period</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14081c]/90 backdrop-blur-sm border border-purple-500/40 space-y-2 min-w-[240px] shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">PROMOTION METHOD</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/40 uppercase">HIGHER VALUE</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>✓ You set your asking price</div>
                  <div>✓ Featured on all VIB channels</div>
                  <div>✓ Direct buyer inquiries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VP Packs Regional Hub (Indian vs PHP cards + Region Switch Banner + EMI strip) */}
        <div className="space-y-4 relative">
          {/* Subtle Ambient VP Vault Atmosphere */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-15">
            <img
              src="/assets/reference_parts/part_08.png"
              alt="VP Vault Ambient"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
              }}
            />
          </div>

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 relative z-10">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                TOP UP &amp; PLAY WITHOUT LIMITS
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-rajdhani tracking-wide uppercase">
                VP PACKS: MORE PLAY. MORE POSSIBILITIES.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('vp')}
              className="text-xs text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 cursor-pointer font-rajdhani"
            >
              <span>View All VP Packs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {/* Indian Region Card with authentic Part 09 (Indian Agent + Taj Mahal glow) */}
            <div className="p-6 rounded-2xl bg-[#0a0717] border border-white/10 hover:border-purple-500/40 space-y-4 transition-all group shadow-md relative overflow-hidden flex flex-col justify-between">
              {/* Blended Reference Part 09 */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
                <img
                  src="/assets/reference_parts/part_09.png"
                  alt="Indian Region Agent"
                  className="h-full w-auto object-contain object-right opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  style={{
                    maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                  }}
                />
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇮🇳</span>
                    <div>
                      <h3 className="font-extrabold text-base text-white font-rajdhani">INDIAN REGION VP</h3>
                      <div className="text-[11px] text-gray-400">Top up your Indian region account at the best rates</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-gray-300 max-w-[280px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Official Region Top Ups (475 to 10,000 VP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Instant 5-10 Min Riot Code Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>UPI, QR &amp; NetBanking Accepted</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('vp-catalog')}
                className="w-full py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 font-bold text-xs font-rajdhani uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 relative z-10 shadow-md"
              >
                <span>View Indian VP Packs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Philippines Region Card with authentic Part 11 (Manila Skyline + Agent) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#120826] to-[#1c0d38] border border-fuchsia-500/40 space-y-4 transition-all group shadow-md relative overflow-hidden flex flex-col justify-between">
              {/* Blended Reference Part 11 */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
                <img
                  src="/assets/reference_parts/part_11.png"
                  alt="Philippines Region Agent"
                  className="h-full w-auto object-contain object-right opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  style={{
                    maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                  }}
                />
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇵🇭</span>
                    <div>
                      <h3 className="font-extrabold text-base text-white font-rajdhani">PHP REGION VP</h3>
                      <div className="text-[11px] text-fuchsia-300">Save up to 40% on every VP denomination</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-fuchsia-950 text-fuchsia-200 border border-fuchsia-500/40 uppercase">
                    SAVE 40%
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-gray-200 max-w-[280px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Massive Savings on All Bundles &amp; Passes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Identical Low Ping on Mumbai &amp; Singapore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Delivery to Your PHP Account</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('vp')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-xs font-rajdhani uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-600/30 relative z-10"
              >
                <span>View PHP VP Packs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dedicated "CHANGE REGION IND TO PHP" Gateway Banner (Authentic Part 18) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#180d2b] via-[#10081f] to-[#0a0515] border border-fuchsia-500/30 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="absolute left-1/3 top-0 w-80 h-full bg-fuchsia-600/10 blur-3xl pointer-events-none" />

            <div className="space-y-2 max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#e879f9] uppercase font-bold">
                <Globe className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>CROSS-REGION MIGRATION GATEWAY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-rajdhani uppercase tracking-wide">
                CHANGE REGION: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-fuchsia-400 to-cyan-400">INDIA TO PHILIPPINES (PHP)</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Permanently convert your existing account to the Philippines region to unlock lifetime 40% discounts on all Valorant Points while maintaining identical low ping on Mumbai and Singapore servers.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <button
                  onClick={() => onOpenCheckout('Region Change: IND to PHP Migration', 1299)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold font-rajdhani uppercase tracking-wider text-xs shadow-md shadow-fuchsia-600/30 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Migrate Account (₹1,299)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('vp')}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold font-rajdhani uppercase tracking-wider text-gray-200 hover:text-white transition-colors cursor-pointer"
                >
                  Region FAQ
                </button>
              </div>
            </div>

            {/* Seamless Visual Cutout: Part 18 (Twin Portals Gateway with zero box outline) */}
            <div className="relative w-full md:w-[42%] max-w-[420px] h-36 sm:h-44 flex items-center justify-center select-none pointer-events-none flex-shrink-0">
              <img
                src="/assets/reference_parts/part_18.png"
                alt="Region Migration Twin Portals"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(217,70,239,0.5)]"
                style={{
                  maskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
                }}
              />
            </div>
          </div>

          {/* EMI Strip */}
          <div className="p-4 rounded-xl bg-[#090615] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10">
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="w-4 h-4 text-purple-400" />
              <span>Flexible Payment Plans: Easy EMI options available on high-tier bundles &amp; collections.</span>
            </div>
            <button
              onClick={() => onOpenCheckout('EMI Payment Plan Consultation', 0)}
              className="text-purple-400 hover:text-purple-300 font-bold font-rajdhani uppercase flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Learn More &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3C. SKIN RENTALS: PREMIUM SKINS. YOUR WAY. (Matching Reference 2)         */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#120926] via-[#1a0c35] to-[#0f0720] border border-purple-500/30 space-y-5 shadow-xl relative overflow-hidden">
          {/* Authentic Reference Asset: Part 10 (VIB Experience Program Showcase Weapon Cases) */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[45%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
            <img
              src="/assets/reference_parts/part_10.png"
              alt="VIB Experience Program Weapon Cases"
              className="h-full w-auto object-contain object-right opacity-70"
              style={{
                maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-white/[0.08] pb-4 relative z-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>VIB EXPERIENCE PROGRAM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-rajdhani tracking-wide uppercase">
                SKIN RENTALS: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400">PREMIUM SKINS. YOUR WAY.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                Experience high-end skins at affordable daily and weekly rates. Play with the looks you love without long-term commitments.
              </p>
            </div>

            <button
              onClick={() => onNavigate('rentals')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-xs font-bold font-rajdhani uppercase tracking-wider text-white shadow-md shadow-purple-600/30 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore Rentals Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-300 relative z-10">
            <div className="p-3 rounded-xl bg-[#090615]/90 backdrop-blur-sm border border-white/5 space-y-1">
              <div className="font-bold text-white font-rajdhani">Wide Skin Collection</div>
              <div className="text-[11px] text-gray-400">Kuronami, Prime, RGX &amp; Reaver</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090615]/90 backdrop-blur-sm border border-white/5 space-y-1">
              <div className="font-bold text-white font-rajdhani">Affordable Plans</div>
              <div className="text-[11px] text-gray-400">Starting at ₹149 / 24 Hours</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090615]/90 backdrop-blur-sm border border-white/5 space-y-1">
              <div className="font-bold text-white font-rajdhani">Instant Access</div>
              <div className="text-[11px] text-gray-400">Credentials delivered in 5 mins</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090615]/90 backdrop-blur-sm border border-white/5 space-y-1">
              <div className="font-bold text-white font-rajdhani">100% Anti-Cheat Safe</div>
              <div className="text-[11px] text-gray-400">Clean accounts with zero risk</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3D. RANKUP & DERANK SERVICES + RANK JOURNEY (Matching Reference 3)         */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0717] border border-purple-500/30 space-y-6 shadow-xl relative overflow-hidden">
          {/* Authentic Reference Asset: Part 14 (Esports Champion holding Trophy with VIB Jacket) */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[48%] lg:w-[40%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
            <img
              src="/assets/reference_parts/part_14.png"
              alt="Esports Champion Trophy"
              className="h-full w-auto object-contain object-right opacity-65 group-hover:opacity-85 transition-opacity"
              style={{
                maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-white/[0.06] pb-4 relative z-10">
            <div className="space-y-1 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>COMPETITIVE BOOSTING &amp; DERANKING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-rajdhani tracking-wide uppercase">
                RANKUP &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400">DERANK SERVICES</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Climb to Radiant with top-500 verified players or safely lower your MMR with 100% manual gameplay, offline mode, and encrypted VPN protection.
              </p>
            </div>

            <button
              onClick={() => onNavigate('rankup')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-purple-600 to-rose-600 text-xs font-bold font-rajdhani uppercase tracking-wider text-white shadow-md transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Rankup Calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Choose Your Journey Dual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div
              onClick={() => setJourneyType('rankup')}
              className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2.5 ${
                journeyType === 'rankup'
                  ? 'bg-gradient-to-br from-[#0a1526]/90 to-[#070e1a]/90 backdrop-blur-sm border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#080b15]/90 backdrop-blur-sm border-white/10 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-white font-rajdhani text-base">RANKUP SERVICES</span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 uppercase">CLIMB</span>
              </div>
              <p className="text-xs text-gray-300">Top 500 Radiants, Solo/Duo queue, offline mode invisible to friends.</p>
            </div>

            <div
              onClick={() => setJourneyType('derank')}
              className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2.5 ${
                journeyType === 'derank'
                  ? 'bg-gradient-to-br from-[#240a15]/90 to-[#17060e]/90 backdrop-blur-sm border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                  : 'bg-[#15070f]/90 backdrop-blur-sm border-white/10 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-rose-400" />
                  <span className="font-bold text-white font-rajdhani text-base">DERANK SERVICES</span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 uppercase">LOWER MMR</span>
              </div>
              <p className="text-xs text-gray-300">Safely lower MMR for casual play. Zero ban guarantee, no behavioral penalties.</p>
            </div>
          </div>

          {/* The Rank Journey with authentic Part 12 (Glowing 9-Tier Staircase) */}
          <div className="space-y-2 pt-2 relative z-10">
            <div className="text-[10px] font-mono text-purple-300 uppercase tracking-widest font-bold">
              THE RANK JOURNEY • 9 TIER PROGRESSION
            </div>
            
            {/* Visual Rank Progression Strip */}
            <div className="relative rounded-xl overflow-hidden p-2 bg-[#06040d] border border-white/5 mb-3 flex items-center justify-center">
              <img
                src="/assets/reference_parts/part_12.png"
                alt="Rank Staircase Progression"
                className="w-full max-h-20 object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                }}
              />
            </div>

            {/* 9-Tier Rank Staircase Interactive Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {RANK_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-2.5 rounded-xl bg-[#070510] border ${tier.border}/30 text-center space-y-1.5 flex flex-col items-center justify-between hover:border-purple-400 transition-colors`}
                >
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center text-black font-black text-xs font-rajdhani shadow-sm`}>
                    {tier.badge.charAt(0)}
                  </div>
                  <div className={`font-bold text-xs ${tier.text} font-rajdhani`}>{tier.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3DD. VALO SKINS EXCHANGE: TRADE IN. UPGRADE. DOMINATE. (Reference 3)      */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#170a2a] via-[#10081d] to-[#0a0515] border border-purple-500/35 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute right-1/4 top-0 w-80 h-full bg-purple-600/15 blur-3xl pointer-events-none" />

          {/* Left Text & Actions */}
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d946ef] uppercase font-bold">
              <Repeat className="w-3.5 h-3.5 text-[#d946ef]" />
              <span>VALO SKINS EXCHANGE PROGRAM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white font-rajdhani tracking-tight leading-none">
              TRADE IN. UPGRADE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-amber-300">DOMINATE.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Bored of your current skin inventory? Trade in your existing Valorant accounts or weapon collections for instant store credit or upgrade directly to high-tier vaulted inventories.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs text-gray-300">
              <div className="p-2 rounded-lg bg-[#0c0817] border border-white/5 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-fuchsia-400" />
                <span>Instant Valuation</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0c0817] border border-white/5 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-fuchsia-400" />
                <span>Fair Trade Rates</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0c0817] border border-white/5 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-fuchsia-400" />
                <span>100% Escrow Protection</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <button
                onClick={() => onOpenCheckout('Valo Skins Exchange Valuation', 0)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold font-rajdhani uppercase tracking-wider text-xs shadow-lg shadow-fuchsia-600/30 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Get Exchange Valuation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold font-rajdhani uppercase tracking-wider text-gray-200 hover:text-white transition-colors cursor-pointer"
              >
                How Trade-In Works
              </button>
            </div>
          </div>

          {/* Right: Authentic Part 15 (Valo Skins Exchange Cylindrical Hologram Showcase) */}
          <div className="relative w-full lg:w-[45%] max-w-[480px] h-52 sm:h-64 flex items-center justify-center select-none pointer-events-none flex-shrink-0">
            <img
              src="/assets/reference_parts/part_15.png"
              alt="Valo Skins Exchange Showcase"
              className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(217,70,239,0.55)]"
              style={{
                maskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 85%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3E. VIB LIVE AUCTIONS: WORKING REAL-TIME COUNTDOWN TIMER (Reference 4)     */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#120826] via-[#1a0c35] to-[#0d071d] border border-fuchsia-500/40 space-y-6 shadow-2xl relative overflow-hidden">
          {/* Authentic Reference Asset: Part 22 (Grand Live Auction Auditorium Stage with Audience & Screen) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-30">
            <img
              src="/assets/reference_parts/part_22.png"
              alt="Live Auction Auditorium Stage"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 95%)',
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-5 relative z-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="text-rose-400">LIVE TIMED AUCTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-rajdhani">
                VIB AUCTIONS: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-300">BID. WIN. OWN.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                Place competitive bids on rare, vaulted Valorant profile collections with guaranteed escrow handover upon timer expiry.
              </p>
            </div>

            {/* LIVE TICKING COUNTDOWN TIMER */}
            <div className="p-3.5 rounded-xl bg-[#090615] border border-fuchsia-500/30 flex items-center gap-3 shadow-lg">
              <div className="text-right">
                <div className="text-[9px] font-mono text-fuchsia-300 uppercase font-bold tracking-wider">AUCTION CLOSES IN</div>
                <div className="text-xs text-gray-400 font-mono">Live Clock Sync</div>
              </div>

              <div className="flex items-center gap-1.5 font-mono font-black text-lg sm:text-xl">
                <div className="px-2.5 py-1 rounded-lg bg-fuchsia-950/80 border border-fuchsia-500/40 text-fuchsia-200">
                  {String(timeLeft.hours).padStart(2, '0')}
                  <span className="block text-[8px] text-fuchsia-400 text-center font-normal">HRS</span>
                </div>
                <span className="text-fuchsia-400">:</span>
                <div className="px-2.5 py-1 rounded-lg bg-fuchsia-950/80 border border-fuchsia-500/40 text-fuchsia-200">
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <span className="block text-[8px] text-fuchsia-400 text-center font-normal">MIN</span>
                </div>
                <span className="text-fuchsia-400">:</span>
                <div className="px-2.5 py-1 rounded-lg bg-rose-950/80 border border-rose-500/50 text-rose-200 animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                  <span className="block text-[8px] text-rose-400 text-center font-normal">SEC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Live Auction Item Showpiece with Part 20 floating case */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-6 p-5 rounded-xl bg-[#140b2a]/95 backdrop-blur-sm border border-fuchsia-500/35 space-y-3 relative overflow-hidden">
              {/* Subtle Part 20 floating showcase case backdrop */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end opacity-25">
                <img
                  src="/assets/reference_parts/part_20.png"
                  alt="Floating Weapon Showcase"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-between text-xs relative z-10">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-fuchsia-950 text-fuchsia-200 border border-fuchsia-500/40 uppercase">
                  LOT #0881 • ULTRA RARE
                </span>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Vaulted
                </span>
              </div>

              <div className="py-4 flex items-center justify-center relative z-10">
                <img
                  src="/assets/items/vandal-prime.png"
                  alt="Kuronami Vandal"
                  className="w-[85%] max-h-[160px] object-contain filter drop-shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-black text-white font-rajdhani uppercase">
                  KURONAMI VANDAL + CHAMPIONS 2024 COMBO
                </h3>
                <p className="text-xs text-gray-300">
                  Includes Kuronami Vandal (Max Level + All Colors), Champions 2024 Vandal &amp; Blade, Reaver 2.0 Karambit, 1,200 VP Balance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-xl bg-[#090615]/95 backdrop-blur-sm border border-white/10 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#110c26] space-y-0.5">
                  <div className="text-[9px] font-mono text-gray-400 uppercase">CURRENT HIGHEST BID</div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-amber-300 font-rajdhani">
                    ₹{currentBid.toLocaleString()}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">{bidCount} bids placed</div>
                </div>

                <div className="p-3 rounded-lg bg-[#110c26] space-y-0.5">
                  <div className="text-[9px] font-mono text-gray-400 uppercase">MINIMUM NEXT BID</div>
                  <div className="text-2xl font-black text-white font-rajdhani">
                    ₹{(currentBid + 150).toLocaleString()}
                  </div>
                  <div className="text-[10px] font-mono text-fuchsia-300">+₹150 step</div>
                </div>
              </div>

              {bidSuccessMessage && (
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{bidSuccessMessage}</span>
                </div>
              )}

              <form onSubmit={handlePlaceBid} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-mono font-bold">₹</span>
                    <input
                      type="number"
                      value={userBidInput}
                      onChange={(e) => setUserBidInput(e.target.value)}
                      min={currentBid + 1}
                      className="w-full pl-8 pr-3 py-2.5 rounded-xl bg-[#150f2e] border border-white/15 focus:border-fuchsia-500 focus:outline-none text-white font-mono font-bold text-sm"
                      placeholder="Amount"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-xs font-black font-rajdhani uppercase tracking-wider text-white shadow-lg cursor-pointer"
                  >
                    PLACE BID
                  </button>
                </div>
              </form>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <button
                  onClick={() => onNavigate('auctions')}
                  className="text-fuchsia-400 hover:text-fuchsia-300 font-bold font-rajdhani uppercase flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Active Lots &rarr;</span>
                </button>
                <span className="text-[11px] text-gray-400 font-mono">100% Escrow Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3F. FRESH PHP PROFILE & COACHING PROGRAM (Matching Reference 4)           */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Fresh PHP Profile Card with Part 16 (Cyberpunk Skyscraper Agent) */}
          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-purple-500/30 space-y-4 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Blended Reference Part 16 */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
              <img
                src="/assets/reference_parts/part_16.png"
                alt="Cyberpunk Neon City Agent"
                className="h-full w-auto object-contain object-right opacity-35 group-hover:opacity-60 transition-opacity"
                style={{
                  maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                }}
              />
            </div>

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>CLEAN REGIONAL PROVISIONING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-rajdhani uppercase">
                CREATE A FRESH PHP PROFILE
              </h3>
              <p className="text-xs text-gray-400 max-w-[340px]">
                Start with a brand new, unranked Philippines (PHP) profile to immediately access 40% cheaper VP store rates without altering your main account.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-gray-300 max-w-[360px]">
                <div className="p-2.5 rounded-lg bg-[#080614]/80 backdrop-blur-sm border border-white/5">01 Place Order</div>
                <div className="p-2.5 rounded-lg bg-[#080614]/80 backdrop-blur-sm border border-white/5">02 Automated Setup</div>
                <div className="p-2.5 rounded-lg bg-[#080614]/80 backdrop-blur-sm border border-white/5">03 Receive &amp; Verify</div>
                <div className="p-2.5 rounded-lg bg-[#080614]/80 backdrop-blur-sm border border-white/5">04 Start Exploring</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between relative z-10">
              <div>
                <div className="text-[9px] font-mono text-gray-500">STARTING FROM</div>
                <div className="text-lg font-black text-white font-rajdhani">₹499</div>
              </div>
              <button
                onClick={() => onOpenCheckout('Fresh Philippines (PHP) Profile Provisioning', 499)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-xs font-bold font-rajdhani uppercase tracking-wider text-white shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Get Fresh Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Coaching Program Card with Part 21 (Esports Coaching Battle Station & VOD setup) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#100a24] to-[#0c081a] border border-purple-500/30 space-y-4 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Blended Reference Part 21 */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
              <img
                src="/assets/reference_parts/part_21.png"
                alt="Coaching Battle Station"
                className="h-full w-auto object-contain object-right opacity-40 group-hover:opacity-65 transition-opacity"
                style={{
                  maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                }}
              />
            </div>

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>TIER 1 COMPETITIVE COACHING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-rajdhani uppercase">
                COACHING: LEARN. IMPROVE. DOMINATE.
              </h3>
              <p className="text-xs text-gray-400 max-w-[340px]">
                1-on-1 private coaching with Radiant players, VCT analysts, and Tier 1 specialists. Custom drills, live VOD reviews, and tailored aim routines.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-gray-300 max-w-[360px]">
                <div className="p-2.5 rounded-lg bg-[#090615]/80 backdrop-blur-sm border border-white/5">🎯 Aim &amp; Peeking Drills</div>
                <div className="p-2.5 rounded-lg bg-[#090615]/80 backdrop-blur-sm border border-white/5">📺 Live VOD Reviews</div>
                <div className="p-2.5 rounded-lg bg-[#090615]/80 backdrop-blur-sm border border-white/5">🗺️ Site Executes &amp; Lineups</div>
                <div className="p-2.5 rounded-lg bg-[#090615]/80 backdrop-blur-sm border border-white/5">🧠 Clutch Game Sense</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between relative z-10">
              <div>
                <div className="text-[9px] font-mono text-gray-500">1-HOUR SESSION</div>
                <div className="text-lg font-black text-white font-rajdhani">₹799</div>
              </div>
              <button
                onClick={() => onNavigate('coaching')}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-xs font-bold font-rajdhani uppercase tracking-wider text-white shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore Coaching</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. JOIN THE VIB COMMUNITY Banner (Matching Reference Image)               */}

      {/* ========================================================================= */}
      {/* 4. JOIN THE VIB COMMUNITY Banner (Matching Reference Image)               */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#190e33] via-[#120a22] to-[#0c0817] border border-purple-500/30 overflow-hidden shadow-2xl relative min-h-[110px] flex items-center">
          {/* Ambient glow */}
          <div className="absolute left-10 top-0 w-60 h-full bg-purple-600/20 blur-3xl pointer-events-none" />

          {/* Left side: Authentic Part 26 (Team VIB championship podium with crowd and Indian flags) */}
          <div className="absolute left-0 top-0 bottom-0 w-52 sm:w-72 overflow-hidden pointer-events-none select-none z-0">
            <img
              src="/assets/reference_parts/part_26.png"
              alt="Team VIB Championship Community"
              className="w-full h-full object-cover object-left opacity-90"
              style={{
                maskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 pl-44 sm:pl-72 gap-5">
            <div className="space-y-1 text-left">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-rajdhani tracking-wide">
                JOIN THE VIB COMMUNITY
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Connect, trade, learn and grow with thousands of members across India &amp; SEA.
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