import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  Users,
  Headphones,
  CreditCard,
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
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';
import { soundFx } from '../../utils/audio';

interface ClientProfilesPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
  searchQuery?: string;
}

export const ClientProfilesPage: React.FC<ClientProfilesPageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
  searchQuery = '',
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [selectedMarketplace, setSelectedMarketplace] = useState<'guaranteed' | 'public'>('guaranteed');

  const toggleFav = (id: string) => {
    soundFx.playClickSound();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const profiles = [
    {
      id: 'm-1',
      badge: 'FEATURED',
      title: 'Immortal Profile',
      level: 310,
      sub: 'Level 310 • 20+ Skins',
      rank: 'Immortal',
      rankColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      priceINR: 24999,
      originalPriceINR: 32999,
      cardImg: '/assets/client/profile-card-1.png',
    },
    {
      id: 'm-2',
      badge: 'FEATURED',
      title: 'Ascendant Profile',
      level: 205,
      sub: 'Level 205 • Prime Collection',
      rank: 'Ascendant',
      rankColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      priceINR: 14999,
      originalPriceINR: 19999,
      cardImg: '/assets/client/profile-card-2.png',
    },
    {
      id: 'm-3',
      badge: 'FEATURED',
      title: 'Radiant Profile',
      level: 420,
      sub: 'Level 420 • Full Access',
      rank: 'Radiant',
      rankColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      priceINR: 59999,
      originalPriceINR: 89999,
      cardImg: '/assets/client/profile-card-3.png',
    },
    {
      id: 'm-4',
      badge: 'FEATURED',
      title: 'Diamond Profile',
      level: 180,
      sub: 'Level 180 • Multiple Skins',
      rank: 'Diamond',
      rankColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      priceINR: 8999,
      originalPriceINR: 14999,
      cardImg: '/assets/client/profile-card-4.png',
    },
    {
      id: 'm-5',
      badge: 'FEATURED',
      title: 'Ascendant Profile',
      level: 250,
      sub: 'Level 250 • Rare Skins',
      rank: 'Ascendant',
      rankColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      priceINR: 16999,
      originalPriceINR: 24999,
      cardImg: '/assets/client/profile-card-5.png',
    },
  ];

  return (
    <div className="w-full bg-[#07070d] text-white selection:bg-fuchsia-600 selection:text-white space-y-12 sm:space-y-16 pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <span>&gt;</span>
          <span className="text-gray-300 font-medium">Digital Profiles</span>
        </div>
      </div>

      {/* 1. HERO SECTION (Matching Image 1) */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              EXPLORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                DIGITAL PROFILES
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Find your next competitive identity. Choose a marketplace below to start browsing verified profiles or community listings.
            </p>

            {/* 4 Micro Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Safe &amp; Secure</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Process</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Active Community</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-amber-400" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Art: Jett with Crystal Daggers & Graffiti (Matching Image 1) */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[360px]">
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />

            {/* Stylized Graffiti Text from Image 1 */}
            <div className="absolute right-2 top-6 select-none pointer-events-none opacity-40 text-right z-0">
              <div className="font-marker text-xl sm:text-2xl text-purple-300 rotate-[-8deg] drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                MORE PLAYSTYLES
              </div>
              <div className="font-marker text-xl sm:text-2xl text-fuchsia-400 rotate-[-6deg] drop-shadow-[0_0_12px_rgba(232,85,222,0.8)] mt-0.5">
                MORE POSSIBILITIES.
              </div>
              <div className="font-marker text-lg sm:text-xl text-purple-400 rotate-[-10deg] mt-3">
                FIND. TRADE.
              </div>
              <div className="font-marker text-2xl sm:text-3xl text-fuchsia-500 font-bold rotate-[-12deg]">
                LEVEL UP.
              </div>
            </div>

            <img
              src="/assets/client/hero-profiles-jett.png"
              alt="Jett Daggers"
              className="relative z-10 w-full max-w-sm sm:max-w-md h-auto object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* 2. CHOOSE A MARKETPLACE (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
            CHOOSE A MARKETPLACE
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Where would you like to browse?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            We offer two separate marketplaces. Choose the one that fits your needs.
          </p>
        </div>

        {/* 2 Big Chooser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Lifetime Guaranteed Profiles (Gold Border) */}
          <div
            onClick={() => setSelectedMarketplace('guaranteed')}
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group space-y-6 ${
              selectedMarketplace === 'guaranteed'
                ? 'bg-[#14101e] border-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/40'
                : 'bg-[#0d0d18] border-white/10 hover:border-amber-500/50'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Crown className="w-8 h-8 text-amber-400" />
                <div className="w-9 h-9 rounded-full border border-white/20 group-hover:bg-amber-500 group-hover:border-amber-500 flex items-center justify-center text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-white">
                    <span className="text-amber-400">Lifetime</span> Guaranteed Profiles
                  </h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    VERIFIED BY VIB
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Handpicked and verified profiles with lifetime guarantee from VIB. Secure, reliable and worry-free.
                </p>
              </div>

              {/* 3 Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Lifetime Guarantee
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Verified &amp; Checked
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Direct Support
                </span>
              </div>
            </div>

            {/* Sub-box */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Profiles in this section are covered by VIB's lifetime guarantee subject to our terms and conditions.</span>
              </div>
              <span className="text-amber-400 font-bold ml-2 whitespace-nowrap">Learn More &gt;</span>
            </div>
          </div>

          {/* Card 2: Public Listings (Blue Border) */}
          <div
            onClick={() => setSelectedMarketplace('public')}
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group space-y-6 ${
              selectedMarketplace === 'public'
                ? 'bg-[#0f1424] border-cyan-500/80 shadow-[0_0_30px_rgba(6,182,212,0.25)] ring-1 ring-cyan-500/40'
                : 'bg-[#0d0d18] border-white/10 hover:border-cyan-500/50'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Users className="w-8 h-8 text-cyan-400" />
                <div className="w-9 h-9 rounded-full border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-500 flex items-center justify-center text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-white">
                    Public Listings
                  </h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    COMMUNITY MARKETPLACE
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Listings posted by our community members. More variety, more options.
                </p>
              </div>

              {/* 3 Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Wide Variety
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Direct Contact
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Optional Escrow
                </span>
              </div>
            </div>

            {/* Sub-box */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>These are community listings. Sellers are not verified by VIB. You can use our escrow service for protection.</span>
              </div>
              <span className="text-cyan-400 font-bold ml-2 whitespace-nowrap">Learn More &gt;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LISTINGS: Handpicked Featured Profiles (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>FEATURED LISTINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Handpicked Featured Profiles
            </h2>
            <p className="text-xs text-gray-400">
              Premium profiles from our marketplace
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('profiles')}
              className="px-4 py-1.5 rounded-full bg-[#1b122e] border border-fuchsia-500/40 text-xs font-bold text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Featured</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Cards Row (Matching Image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {profiles.map((p) => {
            const isFav = favoriteIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg"
              >
                {/* Header with artwork from image 1 */}
                <div className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden">
                  <img
                    src={p.cardImg}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {p.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFav(p.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-300'}`} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-3.5 space-y-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-fuchsia-300 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-[11px] text-gray-400 leading-snug">
                    {p.sub}
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.rankColor}`}>
                      {p.rank}
                    </span>
                  </div>
                </div>

                {/* Price & Buttons */}
                <div className="p-3.5 pt-2 border-t border-white/5 space-y-2.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-black text-white">
                      {formatCurrencyPrice(p.priceINR, currency)}
                    </span>
                    <span className="text-[10px] text-gray-500 line-through font-mono">
                      {formatCurrencyPrice(p.originalPriceINR, currency)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenCheckout(p.title, p.priceINR)}
                      className="flex-1 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white text-xs font-bold transition-all cursor-pointer text-center"
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
                          image: p.cardImg,
                          quantity: 1,
                        })
                      }
                      className="p-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 transition-colors cursor-pointer"
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

      {/* 4. JOIN THE VIB COMMUNITY Banner (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0e0d1c] border border-fuchsia-500/30 overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-3 hidden md:block">
              <img
                src="/assets/client/profiles-community-banner.png"
                alt="Community Agent"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:col-span-9 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  JOIN THE VIB COMMUNITY
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Connect, trade, learn and grow with thousands of members.
                </p>
                <div className="flex items-center gap-3 pt-1 justify-center sm:justify-start">
                  <a href="https://discord.gg" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white">
                    <Discord className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white">
                    <Send className="w-3 h-3" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white">
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => onNavigate('community')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_15px_rgba(192,38,211,0.4)] cursor-pointer whitespace-nowrap"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 Trust Badges (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-white">Secure Platform</div>
              <div className="text-[10px] text-gray-400">Your safety is our priority.</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-white">24/7 Support</div>
              <div className="text-[10px] text-gray-400">We're here to help.</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-white">Trusted by 50,000+</div>
              <div className="text-[10px] text-gray-400">A growing community.</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-white">Multiple Payment Options</div>
              <div className="text-[10px] text-gray-400">UPI, Bank Transfer and more.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};