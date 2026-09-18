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
  Zap,
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
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      title: 'Profile #A1023',
      sub: 'Immortal 1 • 210+ Skins • Prime',
      priceINR: 4999,
      originalPriceINR: 6999,
      banner: '/assets/client/skin-banner-1.png',
    },
    {
      id: 'p-b4481',
      badge: 'HOT',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      title: 'Profile #B4481',
      sub: 'Radiant • 350+ Skins • Full Access',
      priceINR: 12499,
      originalPriceINR: 16999,
      banner: '/assets/client/skin-banner-2.png',
    },
    {
      id: 'p-c7710',
      badge: 'POPULAR',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      title: 'Profile #C7710',
      sub: 'Ascendant 3 • 120+ Skins • Prime',
      priceINR: 3999,
      originalPriceINR: 5999,
      banner: '/assets/client/skin-banner-3.png',
    },
    {
      id: 'p-d3091',
      badge: 'EXCLUSIVE',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      title: 'Profile #D3091',
      sub: 'Immortal 2 • 180+ Skins • Prime',
      priceINR: 7999,
      originalPriceINR: 11999,
      banner: '/assets/client/skin-banner-4.png',
    },
  ];

  return (
    <div className="w-full bg-[#07070d] text-white selection:bg-fuchsia-600 selection:text-white space-y-12 sm:space-y-16 pb-16">
      {/* 1. HERO SECTION (Matching Image 3) */}
      <section className="relative w-full pt-8 sm:pt-14 pb-10 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Headline, Subtitle, CTAs, 4 Metrics */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-fuchsia-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>TRUSTED • SECURE • COMMUNITY DRIVEN</span>
            </div>

            {/* Main Headline matching Image 3 */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              INDIA'S MOST TRUSTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                ESPORTS DIGITAL SERVICE PLATFORM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Digital Profiles &nbsp;|&nbsp; VP Packs &nbsp;|&nbsp; Rank Progression &nbsp;|&nbsp; Profile Services &nbsp;|&nbsp; Promotions &nbsp;|&nbsp; Community Marketplace &nbsp;|&nbsp; And More – All in One Place.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('profiles')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-200 hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20 bg-[#0e0d1a] hover:bg-white/5"
              >
                Browse Profiles
              </button>
            </div>

            {/* 4 Stats Badges matching Image 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <Crown className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-xs text-white">50K+</div>
                  <div className="text-[10px] text-gray-400">Happy Users</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-xs text-white">4.9/5</div>
                  <div className="text-[10px] text-gray-400">User Rating</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-xs text-white">100%</div>
                  <div className="text-[10px] text-gray-400">Secure Transactions</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <Headphones className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-xs text-white">24/7</div>
                  <div className="text-[10px] text-gray-400">Customer Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Art with Assassin & Graffiti Text (Matching Image 3) */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px]">
            {/* Luminous Core Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />

            {/* Stylized Graffiti Phrases behind hero matching Image 3 */}
            <div className="absolute -left-6 top-8 select-none pointer-events-none opacity-40 z-0">
              <div className="font-marker text-2xl sm:text-3xl text-fuchsia-400 rotate-[-10deg] drop-shadow-[0_0_15px_rgba(232,85,222,0.8)]">
                LEVEL UP
              </div>
              <div className="font-marker text-xl sm:text-2xl text-purple-300 rotate-[-8deg] drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] mt-0.5">
                YOUR GAME
              </div>
              <div className="font-marker text-3xl sm:text-4xl text-fuchsia-500 font-bold rotate-[-12deg] drop-shadow-[0_0_20px_rgba(192,38,211,1)]">
                WITH VIB
              </div>
            </div>

            <div className="absolute right-2 bottom-6 select-none pointer-events-none opacity-35 text-right z-0">
              <div className="font-marker text-lg sm:text-xl text-purple-400 rotate-[-12deg]">
                PLAY
              </div>
              <div className="font-marker text-lg sm:text-xl text-purple-400 rotate-[-10deg]">
                TRADE
              </div>
              <div className="font-marker text-lg sm:text-xl text-purple-400 rotate-[-8deg]">
                UPGRADE
              </div>
              <div className="font-marker text-xl sm:text-2xl text-fuchsia-400 font-bold rotate-[-6deg]">
                BELONG
              </div>
            </div>

            {/* Assassin Hero Art */}
            <img
              src="/assets/client/hero-assassin.png"
              alt="VIB Hero Assassin"
              className="relative z-10 w-full max-w-sm sm:max-w-md h-auto object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]"
            />

            {/* Right Vertical Categories from Image 3 */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 text-right text-[9px] font-mono tracking-widest text-gray-500 hidden xl:block z-10">
              <div className="hover:text-fuchsia-400 transition-colors">PROFILES</div>
              <div className="hover:text-fuchsia-400 transition-colors">SERVICES</div>
              <div className="hover:text-fuchsia-400 transition-colors">COMMUNITY</div>
              <div className="hover:text-fuchsia-400 transition-colors">OPPORTUNITIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 8 GLOWING SERVICE CARDS ROW (Matching Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            {
              id: 'profiles',
              title: 'Digital Profiles',
              sub: 'Verified & Secure',
              img: '/assets/agents/reyna.png',
              active: true,
              page: 'profiles' as ClientPage,
            },
            {
              id: 'vp',
              title: 'VP Packs',
              sub: 'Flexible Plans',
              img: '/assets/client/vp-coins-2.png',
              active: false,
              page: 'vp' as ClientPage,
            },
            {
              id: 'rankup',
              title: 'Rankup Service',
              sub: 'Boost Your Progress',
              icon: Award,
              active: false,
              page: 'rankup' as ClientPage,
            },
            {
              id: 'exchange',
              title: 'Profile Exchange',
              sub: 'Trade Safely',
              icon: RefreshCw,
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'region',
              title: 'Region Support',
              sub: 'More Possibilities',
              icon: Globe2,
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'promotion',
              title: 'Profile Promotion',
              sub: 'Get Noticed',
              icon: Megaphone,
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'coaching',
              title: 'Coaching',
              sub: 'Learn & Improve',
              icon: GraduationCap,
              active: false,
              page: 'services' as ClientPage,
            },
            {
              id: 'more',
              title: 'More Services',
              sub: 'Explore All',
              icon: MoreHorizontal,
              active: false,
              page: 'services' as ClientPage,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate(item.page)}
                className={`p-3 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${
                  item.active
                    ? 'bg-[#150f28] border border-fuchsia-500/80 shadow-[0_0_20px_rgba(192,38,211,0.3)]'
                    : 'bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/40 hover:bg-[#121124]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center mb-2 overflow-hidden group-hover:scale-110 transition-transform">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
                  ) : Icon ? (
                    <Icon className="w-5 h-5 text-fuchsia-400" />
                  ) : null}
                </div>
                <div className="font-bold text-xs text-white group-hover:text-fuchsia-300 transition-colors leading-tight">
                  {item.title}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED: Explore Digital Profiles (Matching Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2">
              <span>FEATURED</span>
              <span className="text-gray-400 font-normal">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-300">
                Explore Digital Profiles
              </span>
              <ArrowRight className="w-5 h-5 text-fuchsia-400" />
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center bg-[#0d0d18] p-1 rounded-full border border-white/10 text-xs font-semibold">
              {(['featured', 'our', 'community'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFeaturedTab(tab)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer capitalize ${
                    featuredTab === tab
                      ? 'bg-fuchsia-600 text-white shadow-[0_0_10px_rgba(192,38,211,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'our' ? 'Our Profiles' : tab === 'community' ? 'Community Listings' : 'Featured'}
                </button>
              ))}
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProfiles.map((p) => {
            const isFav = favoriteIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/9] w-full bg-black/50 overflow-hidden">
                  <img
                    src={p.banner}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(p.id)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-300'}`} />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-fuchsia-300 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs text-gray-400 leading-snug">
                    {p.sub}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="p-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-gray-500 line-through font-mono">
                      {formatCurrencyPrice(p.originalPriceINR, currency)}
                    </div>
                    <div className="font-black text-base text-white">
                      {formatCurrencyPrice(p.priceINR, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        onAddToCart({
                          id: p.id,
                          title: p.title,
                          subtitle: p.sub,
                          priceINR: p.priceINR,
                          type: 'profile',
                          image: p.banner,
                          quantity: 1,
                        })
                      }
                      className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 transition-colors cursor-pointer"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenCheckout(p.title, p.priceINR)}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-xs uppercase cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PREMIUM DIGITAL PROFILES SPOTLIGHT (Matching Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0e0d1c] border border-fuchsia-500/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left art: Assassin with daggers */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <img
                src="/assets/client/inspect-assassin.png"
                alt="Assassin"
                className="w-28 sm:w-36 object-contain filter drop-shadow-[0_0_20px_rgba(192,38,211,0.5)]"
                onError={(e) => {
                  e.currentTarget.src = '/assets/agents/reyna.png';
                }}
              />
            </div>

            {/* Center: Title & 4 checkmarks */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
                PREMIUM
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                DIGITAL PROFILES
              </h3>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Handpicked &amp; Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Multiple Tiers &amp; Budgets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Safe &amp; Secure Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Lifetime Support (Our Profiles)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('profiles')}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_15px_rgba(192,38,211,0.4)] cursor-pointer"
              >
                <span>View All Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: 3 inspection panels */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src="/assets/client/inspect-skins.png"
                  alt="Skins Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src="/assets/client/inspect-rank.png"
                  alt="Rank History"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src="/assets/client/inspect-card.png"
                  alt="Player Card"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES: Everything you need, in one place (Matching Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-fuchsia-400" />
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2">
              <span>Our Services</span>
              <span className="text-gray-400 font-normal text-sm lowercase tracking-normal">
                Everything you need, in one place.
              </span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="px-4 py-1.5 rounded-full border border-white/20 hover:border-white/40 text-xs font-bold text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'VP Packs',
              desc: 'Flexible payment plans for your in-game currency needs.',
              img: '/assets/client/vp-coins-2.png',
              action: () => onNavigate('vp'),
            },
            {
              title: 'Rankup Service',
              desc: 'Professional assistance to enhance your profile progress.',
              icon: Award,
              action: () => onNavigate('rankup'),
            },
            {
              title: 'Region Support',
              desc: 'Guidance for region conversion and profile setup.',
              icon: Globe2,
              action: () => onNavigate('services'),
            },
            {
              title: 'Profile Promotion',
              desc: 'Get more visibility for your profiles with our promotional plans.',
              icon: Megaphone,
              action: () => onNavigate('services'),
            },
            {
              title: 'Coaching',
              desc: 'Learn from experienced players and improve your skills.',
              icon: GraduationCap,
              action: () => onNavigate('services'),
            },
            {
              title: 'Profile Exchange',
              desc: 'A safer way to trade profiles with escrow support.',
              icon: RefreshCw,
              action: () => onNavigate('services'),
            },
          ].map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                onClick={srv.action}
                className="p-5 rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 cursor-pointer group flex items-start justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-1">
                    {srv.img ? (
                      <img src={srv.img} alt={srv.title} className="w-6 h-6 object-contain" />
                    ) : Icon ? (
                      <Icon className="w-5 h-5 text-fuchsia-400" />
                    ) : null}
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-fuchsia-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                    {srv.desc}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-fuchsia-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all flex-shrink-0 mt-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BECOME A PART OF VIB COMMUNITY (Matching Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0c0c16] border border-fuchsia-500/30 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left details */}
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
                BECOME A PART OF
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
                VIB COMMUNITY
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                Connect, trade, learn and grow with thousands of members.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('community')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_15px_rgba(192,38,211,0.4)] cursor-pointer"
                >
                  <span>Join Our Community</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Social icons matching Image 3 */}
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord"
                    className="w-9 h-9 rounded-full bg-[#1b1536] hover:bg-[#5865F2] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Discord className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-[#1b1536] hover:bg-pink-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="w-9 h-9 rounded-full bg-[#1b1536] hover:bg-sky-500 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-full bg-[#1b1536] hover:bg-red-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right graphic: home-community-banner.png */}
            <div className="lg:col-span-6 flex justify-end">
              <img
                src="/assets/client/home-community-banner.png"
                alt="VIB Community Graphic"
                className="w-full object-cover object-right max-h-56"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};