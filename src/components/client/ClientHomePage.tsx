import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  Users,
  Headphones,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Check,
  Globe2,
  Megaphone,
  GraduationCap,
  RefreshCw,
  MoreHorizontal,
  Crown,
  Award,
  Instagram,
  Disc as Discord,
  Youtube,
  Send,
  Sparkles,
  BarChart3,
  TrendingUp,
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
  const [featuredTab, setFeaturedTab] = useState<'featured' | 'our' | 'community'>('featured');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    soundFx.playClickSound();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const featuredProfiles = [
    {
      id: 'p-a1023',
      badge: 'FEATURED',
      badgeType: 'featured',
      playBadge: true,
      title: 'Profile #A1023',
      sub: 'Immortal 1 • 210+ Skins • Prime',
      priceINR: 4999,
      originalPriceINR: 6999,
      image: '/assets/items/vandal-rgx.png',
      imageGlow: 'from-purple-950/80 via-fuchsia-950/30 to-[#0c0919]',
      subBanner: null,
    },
    {
      id: 'p-b4481',
      badge: 'HOT',
      badgeType: 'hot',
      playBadge: true,
      title: 'Profile #B4481',
      sub: 'Radiant • 350+ Skins • Full Access',
      priceINR: 12499,
      originalPriceINR: 16999,
      image: '/assets/hires/singularity_mask.png',
      imageGlow: 'from-indigo-950/80 via-purple-950/30 to-[#0c0919]',
      subBanner: 'SINGULARITY',
    },
    {
      id: 'p-c7710',
      badge: 'POPULAR',
      badgeType: 'popular',
      playBadge: false,
      title: 'Profile #C7710',
      sub: 'Ascendant 3 • 120+ Skins • Prime',
      priceINR: 3999,
      originalPriceINR: 5999,
      image: '/assets/items/phantom-rgx.png',
      imageGlow: 'from-cyan-950/80 via-purple-950/30 to-[#0c0919]',
      subBanner: null,
    },
    {
      id: 'p-d3091',
      badge: 'EXCLUSIVE',
      badgeType: 'exclusive',
      playBadge: false,
      title: 'Profile #D3091',
      sub: 'Immortal 2 • 180+ Skins • Prime',
      priceINR: 7999,
      originalPriceINR: 11999,
      image: '/assets/items/vandal-reaper.png',
      imageGlow: 'from-violet-950/90 via-indigo-950/40 to-[#0c0919]',
      subBanner: 'KURONAMI',
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-7 sm:space-y-9 pb-12">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-3 sm:pt-4 pb-2 overflow-hidden">
        {/* Ambient atmospheric purple glows */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[500px] h-[400px] bg-fuchsia-800/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative z-10">
          {/* Left Column: Headline, Subtitle, CTAs, 4 Metrics */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.22em] text-[#e879f9] uppercase font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e879f9]" />
              <span>TRUSTED • SECURE • COMMUNITY DRIVEN</span>
            </div>

            {/* Main Headline (2 lines matching reference exactly, condensed font) */}
            <div className="space-y-0.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-extrabold uppercase tracking-tight text-white leading-tight font-rajdhani">
                INDIA'S MOST TRUSTED
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-extrabold uppercase tracking-tight leading-tight font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-[#e879f9] via-[#c084fc] to-[#a855f7] drop-shadow-[0_0_25px_rgba(192,38,211,0.5)]">
                ESPORTS DIGITAL SERVICE PLATFORM
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-[13px] leading-relaxed font-normal max-w-xl">
              Digital Profiles &nbsp;|&nbsp; VP Packs &nbsp;|&nbsp; Rank Progression &nbsp;|&nbsp; Profile Services <br className="hidden sm:inline" />
              Promotions &nbsp;|&nbsp; Community Marketplace &nbsp;|&nbsp; And More – All in One Place.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
                  boxShadow: '0 0 24px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('profiles')}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-gray-200 hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer border border-white/20 bg-[#0c0a18]/90 hover:bg-white/5 hover:border-white/35"
              >
                Browse Profiles
              </button>
            </div>

            {/* 4 Trust Metrics Strip (Single clean horizontal bar with vertical dividers) */}
            <div className="rounded-xl bg-[#0c0a18]/85 border border-white/[0.09] p-2.5 sm:p-3 max-w-xl flex items-center justify-between gap-1 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 px-1.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-white leading-tight">50K+</div>
                  <div className="text-[10px] text-gray-400 leading-tight">Happy Users</div>
                </div>
              </div>

              <div className="w-px h-7 bg-white/10" />

              <div className="flex items-center gap-2 px-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400/30" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-white leading-tight">4.9/5</div>
                  <div className="text-[10px] text-gray-400 leading-tight">User Rating</div>
                </div>
              </div>

              <div className="w-px h-7 bg-white/10" />

              <div className="flex items-center gap-2 px-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-white leading-tight">100%</div>
                  <div className="text-[10px] text-gray-400 leading-tight">Secure Transactions</div>
                </div>
              </div>

              <div className="w-px h-7 bg-white/10" />

              <div className="flex items-center gap-2 px-1.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-white leading-tight">24/7</div>
                  <div className="text-[10px] text-gray-400 leading-tight">Customer Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Character Visual & Angled Typography */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/35 via-fuchsia-500/25 to-pink-500/15 blur-[75px] pointer-events-none" />

            {/* Stylized Graffiti Phrases (Matching Reference 4) */}
            <div className="absolute left-0 top-10 select-none pointer-events-none z-10">
              <div className="font-marker text-2xl sm:text-3xl text-fuchsia-400 -rotate-12 drop-shadow-[0_0_12px_rgba(232,121,249,0.9)] tracking-wider">
                LEVEL UP
              </div>
              <div className="font-marker text-2xl sm:text-3xl text-purple-300 -rotate-8 drop-shadow-[0_0_12px_rgba(192,132,252,0.9)] tracking-wider -mt-1">
                YOUR GAME
              </div>
              <div className="font-marker text-3xl sm:text-4xl text-fuchsia-500 -rotate-12 drop-shadow-[0_0_18px_rgba(217,70,239,1)] tracking-wider font-bold">
                WITH <span className="text-white drop-shadow-[0_0_15px_#a855f7]">VIB</span>
              </div>
            </div>

            {/* Right edge angled graffiti text: PLAY TRADE UPGRADE BELONG */}
            <div className="absolute right-3 bottom-6 select-none pointer-events-none z-10 text-right space-y-0.5">
              <div className="font-marker text-lg text-purple-400 -rotate-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                PLAY
              </div>
              <div className="font-marker text-lg text-purple-400 -rotate-10 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                TRADE
              </div>
              <div className="font-marker text-lg text-purple-400 -rotate-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                UPGRADE
              </div>
              <div className="font-marker text-xl text-fuchsia-400 font-bold -rotate-6 drop-shadow-[0_0_12px_rgba(232,121,249,0.9)]">
                BELONG
              </div>
            </div>

            {/* Vertical Micro Navigation on Far Right */}
            <div className="absolute right-0 top-6 space-y-3 text-right text-[9px] font-mono tracking-[0.2em] text-gray-500 hidden xl:block z-10 select-none">
              <div className="text-gray-400 font-bold">PROFILES</div>
              <div>SERVICES</div>
              <div>COMMUNITY</div>
              <div>OPPORTUNITIES</div>
              <div className="w-4 h-0.5 bg-purple-500 ml-auto mt-2" />
            </div>

            {/* Cyberpunk Sniper Heroine */}
            <img
              src="/assets/hires/hero_sniper_girl_flipped.png"
              alt="VIB Esports Heroine"
              className="relative z-0 w-full max-w-[430px] h-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] transform scale-105"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 8 QUICK-CATEGORY CARDS ROW (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            {
              id: 'profiles',
              title: 'Digital Profiles',
              sub: 'Verified & Secure',
              avatar: '/assets/agents/reyna.png',
              active: true,
              page: 'profiles' as ClientPage,
            },
            {
              id: 'vp',
              title: 'VP Packs',
              sub: 'Flexible Plans',
              iconType: 'coins',
              active: false,
              page: 'vp' as ClientPage,
            },
            {
              id: 'rankup',
              title: 'Rankup Service',
              sub: 'Boost Your Progress',
              iconType: 'crest',
              active: false,
              page: 'rankup' as ClientPage,
            },
            {
              id: 'exchange',
              title: 'Profile Exchange',
              sub: 'Trade Safely',
              iconType: 'exchange',
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'region',
              title: 'Region Support',
              sub: 'More Possibilities',
              iconType: 'globe',
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'promotion',
              title: 'Profile Promotion',
              sub: 'Get Noticed',
              iconType: 'megaphone',
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'coaching',
              title: 'Coaching',
              sub: 'Learn & Improve',
              iconType: 'coaching',
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'more',
              title: 'More Services',
              sub: 'Explore All',
              iconType: 'dots',
              active: false,
              page: 'services' as ClientPage,
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.page)}
              className={`p-3 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group relative overflow-hidden ${
                item.active
                  ? 'bg-gradient-to-b from-[#1c1438] to-[#0c0919] border-2 border-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.45)]'
                  : 'bg-[#0b0916] border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#120f24]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center mb-2 overflow-hidden group-hover:scale-110 transition-transform flex-shrink-0">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.title}
                    className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  />
                ) : item.iconType === 'coins' ? (
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-cyan-400 bg-gradient-to-tr from-purple-800 to-cyan-700 flex items-center justify-center text-[9px] font-black text-white shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                      V
                    </div>
                  </div>
                ) : item.iconType === 'crest' ? (
                  <div className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                    <Award className="w-5 h-5" />
                  </div>
                ) : item.iconType === 'exchange' ? (
                  <div className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                ) : item.iconType === 'globe' ? (
                  <div className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                ) : item.iconType === 'megaphone' ? (
                  <div className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                    <Megaphone className="w-5 h-5" />
                  </div>
                ) : item.iconType === 'coaching' ? (
                  <div className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-purple-400">
                    <MoreHorizontal className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors leading-tight">
                {item.title}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5 leading-tight font-medium">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED: Explore Digital Profiles (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-mono tracking-[0.2em] font-bold uppercase mb-0.5">
              <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>FEATURED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Explore</span>
              <span className="text-purple-400">Digital Profiles</span>
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#0d0a18] p-1 rounded-full border border-white/10 text-xs font-semibold">
              {(['featured', 'our', 'community'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFeaturedTab(tab)}
                  className={`px-4 py-1 rounded-full transition-all cursor-pointer capitalize ${
                    featuredTab === tab
                      ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'our' ? 'Our Profiles' : tab === 'community' ? 'Community Listings' : 'Featured'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous"
            className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#120e24] border border-purple-500/40 hover:bg-purple-600 hover:border-purple-400 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-lg cursor-pointer hidden md:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            aria-label="Next"
            className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#120e24] border border-purple-500/40 hover:bg-purple-600 hover:border-purple-400 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-lg cursor-pointer hidden md:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProfiles.map((p) => {
              const isFav = favoriteIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  className="rounded-2xl bg-[#0d0b1a] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div className={`relative h-40 w-full bg-gradient-to-b ${p.imageGlow} flex items-center justify-center overflow-hidden p-3 border-b border-white/[0.06]`}>
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                      {p.badgeType === 'featured' && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wide">
                          FEATURED
                        </span>
                      )}
                      {p.badgeType === 'hot' && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase tracking-wide">
                          HOT
                        </span>
                      )}
                      {p.badgeType === 'popular' && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 uppercase tracking-wide">
                          POPULAR
                        </span>
                      )}
                      {p.badgeType === 'exclusive' && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wide">
                          EXCLUSIVE
                        </span>
                      )}
                    </div>

                    {p.playBadge && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 px-3 py-0.5 rounded-b text-[8px] font-black text-white tracking-widest uppercase shadow">
                        PLAY
                      </div>
                    )}

                    {p.subBanner && (
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-cyan-300 font-bold bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        {p.subBanner}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(p.id)}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer z-10"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}`} />
                    </button>

                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-4/5 max-h-24 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute bottom-1.5 inset-x-2 bg-black/70 backdrop-blur-sm rounded-lg py-1 px-1.5 border border-white/10 grid grid-cols-6 gap-1 z-10">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="h-3.5 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                          title={`Weapon Slot #${i}`}
                        >
                          <div className="w-2 h-0.5 rounded-full bg-purple-400/60" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <h3 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-xs text-gray-400 font-medium">
                      {p.sub}
                    </div>
                  </div>

                  <div className="p-3.5 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-black text-base text-white">
                        {formatCurrencyPrice(p.priceINR, currency)}
                      </span>
                      <span className="text-xs text-gray-500 line-through font-mono">
                        {formatCurrencyPrice(p.originalPriceINR, currency)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onAddToCart({
                          id: p.id,
                          title: p.title,
                          subtitle: p.sub,
                          priceINR: p.priceINR,
                          type: 'profile',
                          image: p.image,
                          quantity: 1,
                        })
                      }
                      className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_12px_rgba(147,51,234,0.4)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PREMIUM DIGITAL PROFILES SPOTLIGHT (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b0916] via-[#100d22] to-[#0b0916] border border-purple-500/25 p-5 lg:p-6 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left side: Character + Headline + Checklist + Button */}
            <div className="lg:col-span-5 flex items-center gap-5">
              <div className="w-28 sm:w-32 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/assets/agents/yoru.png"
                  alt="Agent"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.25em] text-[#e879f9] uppercase font-bold">
                    PREMIUM
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight font-rajdhani">
                    DIGITAL PROFILES
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Handpicked &amp; Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Multiple Tiers &amp; Budgets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Safe &amp; Secure Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Lifetime Support (Our Profiles)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('profiles')}
                  className="px-4 py-2 rounded-full bg-[#120f26] border border-purple-500/50 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-purple-600/30 hover:border-purple-400 transition-all shadow-[0_0_12px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <span>View All Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: 3 Interactive Sub-Panels (Matching Reference 4) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Panel 1: SKINS COLLECTION */}
              <div className="rounded-xl border border-white/10 bg-[#080612] p-3 flex flex-col justify-between shadow-lg min-h-[200px]">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-wider text-gray-300 font-bold uppercase">
                    SKINS COLLECTION
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-2">
                  {[
                    { name: 'Prime Vandal', color: 'border-amber-500/40 text-amber-300 bg-amber-500/5' },
                    { name: 'Reaver Vandal', color: 'border-purple-500/40 text-purple-300 bg-purple-500/5' },
                    { name: 'RGX Blade', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/5' },
                    { name: 'Ion Phantom', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/5' },
                    { name: 'Glitchpop', color: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-500/5' },
                    { name: 'Kuronami', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/5' },
                  ].map((sk, idx) => (
                    <div
                      key={idx}
                      className={`p-1.5 rounded border ${sk.color} flex flex-col items-center justify-center text-center`}
                    >
                      <div className="w-6 h-1 rounded bg-current opacity-70 mb-1" />
                      <span className="text-[9px] font-semibold leading-tight truncate w-full">
                        {sk.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 2: RANK HISTORY */}
              <div className="rounded-xl border border-white/10 bg-[#080612] p-3 flex flex-col items-center justify-between shadow-lg text-center min-h-[200px]">
                <div className="w-full flex items-center justify-between pb-2 border-b border-white/10 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-gray-300 font-bold uppercase">
                    RANK HISTORY
                  </span>
                  <span className="text-[9px] text-purple-400 font-bold">PEAK</span>
                </div>
                <div className="py-2 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-fuchsia-500/20 to-purple-600/30 border border-amber-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <Crown className="w-8 h-8 text-amber-400 fill-amber-400/50" />
                  </div>
                  <span className="text-sm font-black tracking-widest text-white mt-1.5 uppercase font-rajdhani">
                    RADIANT
                  </span>
                </div>
                <div className="w-full grid grid-cols-6 gap-1 pt-1.5 border-t border-white/10">
                  {['IRON', 'BRZ', 'SLV', 'GLD', 'PLT', 'IMM'].map((r, i) => (
                    <div key={i} className="text-[7px] text-gray-400 font-mono font-bold">
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: PLAYER CARD */}
              <div className="rounded-xl border border-white/10 bg-[#080612] p-3 flex flex-col justify-between shadow-lg min-h-[200px]">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-wider text-gray-300 font-bold uppercase">
                    PLAYER CARD
                  </span>
                  <span className="text-[9px] text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="py-2 flex items-center justify-center">
                  <div className="w-16 h-24 rounded-lg bg-gradient-to-b from-purple-700 via-indigo-900 to-black border border-purple-400/40 p-1 flex flex-col items-center justify-between shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <Sparkles className="w-3.5 h-3.5 text-purple-300 mt-1" />
                    <div className="text-[8px] font-black text-white text-center leading-tight uppercase font-rajdhani">
                      VIB ELITE
                    </div>
                    <div className="w-8 h-1 rounded bg-fuchsia-400 mb-1" />
                  </div>
                </div>
                <div className="text-[9px] text-gray-400 text-center truncate">
                  Prime Collection Full Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR SERVICES: Single row of 6 cards (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Our Services</span>
            </h2>
            <span className="text-xs text-gray-400 font-normal">
              Everything you need, in one place.
            </span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="px-3.5 py-1 rounded-full border border-purple-500/30 hover:border-purple-400 bg-[#0e0b1a] text-xs font-semibold text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3 h-3 text-purple-400" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            {
              title: 'VP Packs',
              desc: 'Flexible payment plans for your in-game currency needs.',
              iconType: 'coins',
              action: () => onNavigate('vp'),
            },
            {
              title: 'Rankup Service',
              desc: 'Professional assistance to enhance your profile progress.',
              iconType: 'crest',
              action: () => onNavigate('rankup'),
            },
            {
              title: 'Region Support',
              desc: 'Guidance for region conversion and profile setup.',
              iconType: 'shield',
              action: () => onNavigate('services'),
            },
            {
              title: 'Profile Promotion',
              desc: 'Get more visibility for your profiles with our promotional plans.',
              iconType: 'analytics',
              action: () => onNavigate('services'),
            },
            {
              title: 'Coaching',
              desc: 'Learn from experienced players and improve your skills.',
              iconType: 'users',
              action: () => onNavigate('services'),
            },
            {
              title: 'Profile Exchange',
              desc: 'A safer way to trade profiles with escrow support.',
              iconType: 'arrows',
              action: () => onNavigate('services'),
            },
          ].map((srv, idx) => (
            <div
              key={idx}
              onClick={srv.action}
              className="p-3.5 rounded-2xl bg-[#0b0916] border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#120e24] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[155px]"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-2 text-purple-400 group-hover:scale-105 transition-transform">
                  {srv.iconType === 'coins' ? (
                    <div className="w-6 h-6 rounded-full border border-purple-400 bg-gradient-to-tr from-purple-900 to-indigo-800 flex items-center justify-center text-[9px] font-bold text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                      V
                    </div>
                  ) : srv.iconType === 'crest' ? (
                    <Award className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  ) : srv.iconType === 'shield' ? (
                    <ShieldCheck className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  ) : srv.iconType === 'analytics' ? (
                    <BarChart3 className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  ) : srv.iconType === 'users' ? (
                    <Users className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  ) : (
                    <RefreshCw className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  )}
                </div>

                <h3 className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors leading-tight">
                  {srv.title}
                </h3>
                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-purple-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BECOME A PART OF VIB COMMUNITY BANNER (Matching Reference 4) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0c081e] via-[#150a2e] to-[#0c081e] border border-purple-500/30 overflow-hidden relative shadow-2xl p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute right-1/4 top-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Details */}
          <div className="space-y-3 max-w-md relative z-10">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-semibold">
              BECOME A PART OF
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight font-rajdhani">
              VIB COMMUNITY
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Connect, trade, learn and grow with thousands of members.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('community')}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] cursor-pointer"
              >
                <span>Join Our Community</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="w-8 h-8 rounded-full bg-[#1b1536] hover:bg-[#5865F2] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <Discord className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#1b1536] hover:bg-pink-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-full bg-[#1b1536] hover:bg-sky-500 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <Send className="w-3 h-3" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#1b1536] hover:bg-red-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Composition: Silhouette + Brush text + Shield */}
          <div className="flex items-center justify-end gap-6 relative z-10 w-full lg:w-auto">
            <div className="relative hidden md:flex items-center justify-center opacity-85">
              <div className="flex -space-x-8 items-end">
                <img
                  src="/assets/agents/omen.png"
                  alt="Member"
                  className="w-24 h-28 object-contain filter brightness-50 contrast-125 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
                <img
                  src="/assets/agents/clove.png"
                  alt="Member"
                  className="w-28 h-32 object-contain filter brightness-60 contrast-125 z-10 drop-shadow-[0_0_20px_rgba(217,70,239,0.6)]"
                />
                <img
                  src="/assets/agents/phoenix.png"
                  alt="Member"
                  className="w-24 h-28 object-contain filter brightness-50 contrast-125"
                />
              </div>
            </div>

            <div className="text-right select-none pointer-events-none">
              <div className="font-marker text-base sm:text-lg text-fuchsia-400 -rotate-8 drop-shadow-[0_0_10px_rgba(232,121,249,0.8)] tracking-wider">
                SAME PASSION
              </div>
              <div className="font-marker text-xs sm:text-sm text-purple-300 -rotate-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] tracking-wider">
                A BIGGER COMMUNITY
              </div>
            </div>

            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <div className="w-12 h-14 rounded-xl bg-gradient-to-b from-purple-600/30 to-purple-950/60 border-2 border-purple-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <ShieldCheck className="w-8 h-8 text-purple-300 drop-shadow-[0_0_10px_#c084fc]" />
              </div>
              <div className="text-left font-black text-xs uppercase tracking-wider text-white leading-tight max-w-[100px] font-rajdhani">
                SAFE <br />
                SECURE <br />
                <span className="text-[10px] text-gray-400 font-semibold font-sans">AND BUILT FOR PLAYERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};