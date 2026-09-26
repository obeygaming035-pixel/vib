import React, { useState } from 'react';
import {
  ShieldCheck,
  Crown,
  Users,
  Search,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Zap,
  ArrowRight,
  Filter,
  Lock,
  RefreshCw,
  Eye,
  ShoppingBag,
} from 'lucide-react';
import { Currency, DigitalProfile, CartItem } from '../../types';
import { MARKETPLACE_PROFILES_IMAGE_1 } from '../../data/mockData';
import { formatCurrencyPrice } from '../../utils/format';

interface DigitalProfilesPageProps {
  currency: Currency;
  onNavigateHome: () => void;
  onAddToCart: (item: CartItem) => void;
  onDirectBuy: (title: string, priceINR: number) => void;
  initialSearchQuery?: string;
}

export const DigitalProfilesPage: React.FC<DigitalProfilesPageProps> = ({
  currency,
  onNavigateHome,
  onAddToCart,
  onDirectBuy,
  initialSearchQuery = '',
}) => {
  const [activeMarketplace, setActiveMarketplace] = useState<'all' | 'guaranteed' | 'public'>('all');
  const [selectedRankFilter, setSelectedRankFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [inspectingProfile, setInspectingProfile] = useState<DigitalProfile | null>(null);

  // Filter profiles
  const filteredProfiles = MARKETPLACE_PROFILES_IMAGE_1.filter((profile) => {
    // Marketplace filter
    if (activeMarketplace !== 'all' && profile.marketplaceType !== activeMarketplace) {
      return false;
    }
    // Rank filter
    if (selectedRankFilter !== 'all') {
      if (!profile.rank.toLowerCase().includes(selectedRankFilter.toLowerCase())) {
        return false;
      }
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = profile.title.toLowerCase().includes(q);
      const matchRank = profile.rank.toLowerCase().includes(q);
      const matchSkins = profile.skins.some((s) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchRank && !matchSkins) return false;
    }
    return true;
  });

  const getRankColor = (rank: string) => {
    const r = rank.toLowerCase();
    if (r.includes('radiant')) return 'from-amber-400 to-yellow-200 text-amber-300 border-amber-500/40 bg-amber-500/10';
    if (r.includes('immortal')) return 'from-rose-500 to-red-400 text-rose-300 border-rose-500/40 bg-rose-500/10';
    if (r.includes('ascendant')) return 'from-emerald-500 to-teal-400 text-emerald-300 border-emerald-500/40 bg-emerald-500/10';
    return 'from-violet-500 to-purple-400 text-violet-300 border-violet-500/40 bg-violet-500/10';
  };

  const handleBuyNow = (profile: DigitalProfile) => {
    onDirectBuy(profile.title, profile.priceINR);
  };

  const handleAdd = (profile: DigitalProfile) => {
    onAddToCart({
      id: profile.id,
      title: profile.title,
      subtitle: `${profile.rank} • Level ${profile.level}`,
      priceINR: profile.priceINR,
      type: 'profile',
      image: profile.bannerAsset || profile.agentPortrait,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-white pb-24 selection:bg-fuchsia-600 selection:text-white">
      {/* Breadcrumb Strip */}
      <div className="border-b border-white/5 bg-[#090d16]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs font-rajdhani tracking-wider text-gray-400">
          <button
            onClick={onNavigateHome}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-fuchsia-400 font-semibold">Digital Profiles</span>
        </div>
      </div>

      {/* Hero Section with Jett Crystal Daggers Art (Matching Image 1) */}
      <section className="relative border-b border-white/10 bg-gradient-to-b from-[#0e1322] via-[#090d16] to-[#070a10] overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-chakra font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Verified Valorant Profiles</span>
            </div>

            <h1 className="font-chakra font-black text-4xl sm:text-5xl xl:text-6xl uppercase tracking-tight text-white leading-none drop-shadow-[0_0_20px_rgba(192,38,211,0.3)]">
              EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500">DIGITAL PROFILES</span>
            </h1>

            <p className="text-gray-300 font-rajdhani text-base sm:text-lg max-w-xl leading-relaxed">
              Browse through our collection of premium, hand-verified Valorant accounts with rare skins, high ranks, and guaranteed escrow protection.
            </p>

            {/* Quick Search & Filter Bar */}
            <div className="pt-2 space-y-3">
              <div className="relative max-w-xl">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by skin (e.g. Kuronami, Reaver), rank, or weapon..."
                  className="w-full pl-11 pr-4 py-3 bg-[#111728]/90 border border-white/15 focus:border-fuchsia-500 rounded-xl text-sm font-rajdhani text-white placeholder-gray-500 shadow-xl focus:outline-none focus:ring-1 focus:ring-fuchsia-500/50 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-gray-400 hover:text-white px-2 py-1 bg-white/5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Rank Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-gray-400 font-rajdhani font-semibold">Filter:</span>
                {[
                  { id: 'all', label: 'All Ranks' },
                  { id: 'radiant', label: 'Radiant' },
                  { id: 'immortal', label: 'Immortal' },
                  { id: 'ascendant', label: 'Ascendant' },
                  { id: 'diamond', label: 'Diamond' },
                ].map((rf) => (
                  <button
                    key={rf.id}
                    onClick={() => setSelectedRankFilter(rf.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-chakra font-bold transition-all cursor-pointer ${
                      selectedRankFilter === rf.id
                        ? 'bg-fuchsia-600 text-white shadow-[0_0_10px_rgba(192,38,211,0.5)] border border-fuchsia-400'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {rf.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Jett with Crystal Daggers */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              {/* Luminous Glow Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/20 to-cyan-500/20 blur-2xl animate-pulse" />
              
              {/* Cyber circular rings */}
              <div className="absolute inset-0 border border-fuchsia-500/20 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 border border-cyan-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

              <img
                src="/assets/client/hero-profiles-jett.png"
                alt="Valorant Agent Jett Crystal Daggers"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(192,38,211,0.6)]"
                onError={(e) => {
                  // Fallback to local agent artwork
                  e.currentTarget.src = '/assets/agents/jett.png';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose a Marketplace Section (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="font-chakra font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
            CHOOSE A MARKETPLACE
          </h2>
          <p className="text-gray-400 text-sm font-rajdhani">
            Select between VIB-guaranteed premium profiles with refund & replacement warranty, or direct peer-to-peer player listings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Lifetime Guaranteed Profiles */}
          <div
            onClick={() => setActiveMarketplace(activeMarketplace === 'guaranteed' ? 'all' : 'guaranteed')}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer group cyber-cut ${
              activeMarketplace === 'guaranteed'
                ? 'bg-gradient-to-b from-[#1b122c] to-[#0c0f1c] border-fuchsia-500 shadow-[0_0_30px_rgba(192,38,211,0.3)] ring-1 ring-fuchsia-400'
                : 'bg-[#0d1222]/80 border-white/10 hover:border-fuchsia-500/40 hover:bg-[#11172b]'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-purple-600" />

            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Crown className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-chakra font-bold tracking-widest px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                VIB VERIFIED
              </span>
            </div>

            <h3 className="font-chakra font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
              Lifetime Guaranteed Profiles
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm font-rajdhani leading-relaxed mb-6">
              Accounts sourced directly and backed by VIB's Lifetime Refund & Replacement Guarantee. Maximum safety and direct instant support.
            </p>

            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm font-rajdhani text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Refund & Replacement Guarantee</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Instant Full-Access Credentials</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Original Email & Recovery Credentials</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Priority 24/7 Concierge Support</span>
              </li>
            </ul>

            <button
              type="button"
              className="w-full py-3 rounded-xl font-chakra font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(192,38,211,0.3)]"
            >
              <span>{activeMarketplace === 'guaranteed' ? 'Showing Guaranteed Profiles' : 'Explore Guaranteed Profiles'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Public Listings */}
          <div
            onClick={() => setActiveMarketplace(activeMarketplace === 'public' ? 'all' : 'public')}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer group cyber-cut ${
              activeMarketplace === 'public'
                ? 'bg-gradient-to-b from-[#131d2e] to-[#0c0f1c] border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400'
                : 'bg-[#0d1222]/80 border-white/10 hover:border-cyan-500/40 hover:bg-[#11172b]'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-chakra font-bold tracking-widest px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                COMMUNITY MARKETPLACE
              </span>
            </div>

            <h3 className="font-chakra font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Public Listings
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm font-rajdhani leading-relaxed mb-6">
              Player-to-player community marketplace with optional VIB Escrow Protection. Great deals directly from other verified gamers.
            </p>

            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm font-rajdhani text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Buyer Escrow Protection Available</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Seller Verification Checks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Competitive Player Pricing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Dispute Resolution Assistance</span>
              </li>
            </ul>

            <button
              type="button"
              className="w-full py-3 rounded-xl font-chakra font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer bg-[#182338] hover:bg-[#202f4a] border border-cyan-500/40 text-cyan-200"
            >
              <span>{activeMarketplace === 'public' ? 'Showing Public Listings' : 'Browse Public Listings'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Handpicked Featured Profiles Grid (Matching Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-fuchsia-400 uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Transfer Ready</span>
            </div>
            <h2 className="font-chakra font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Handpicked Featured Profiles
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-rajdhani">
              Hand-selected top tier accounts verified and ready for instant transfer.
            </p>
          </div>

          <div className="text-xs font-rajdhani text-gray-400">
            Showing <span className="text-white font-bold">{filteredProfiles.length}</span> verified accounts
          </div>
        </div>

        {/* Profile Cards */}
        {filteredProfiles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0b0f1c] border border-white/10 text-gray-400">
            <Filter className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <h4 className="font-chakra font-bold text-lg text-white">No profiles match your filter</h4>
            <p className="text-xs text-gray-500 mt-1">Try resetting your search query or selecting "All Ranks".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRankFilter('all');
                setActiveMarketplace('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-fuchsia-600 text-white text-xs font-chakra font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="rounded-2xl bg-[#0c101d] border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-[0_0_25px_rgba(192,38,211,0.2)]"
              >
                {/* Card Header & Rank Banner */}
                <div className="p-5 pb-3 border-b border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-chakra font-bold px-2.5 py-0.5 rounded-full border ${getRankColor(profile.rank)} uppercase`}>
                      {profile.rank}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                      {profile.code}
                    </span>
                  </div>

                  <h3 className="font-chakra font-bold text-lg text-white group-hover:text-fuchsia-300 transition-colors">
                    {profile.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-gray-400 font-rajdhani mt-1">
                    <span>Level {profile.level}</span>
                    <span>•</span>
                    <span className="text-fuchsia-400 font-semibold">{profile.skinsCount}</span>
                  </div>
                </div>

                {/* Card Body: Featured Weapons & Skins */}
                <div className="p-5 py-4 flex-1 space-y-3">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                    Featured Inventory
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {profile.skins.map((skin, idx) => (
                      <div
                        key={idx}
                        className="px-2.5 py-1.5 rounded-lg bg-[#141a2e] border border-white/5 text-[11px] font-rajdhani font-semibold text-gray-300 truncate"
                        title={skin}
                      >
                        {skin}
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Instant Delivery</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      <Lock className="w-3 h-3 text-purple-400" />
                      <span>Escrow Protected</span>
                    </span>
                  </div>
                </div>

                {/* Card Footer: Pricing & Action Buttons */}
                <div className="p-5 pt-3 border-t border-white/10 bg-[#090d18] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-gray-500 line-through font-mono">
                      {formatCurrencyPrice(profile.originalPriceINR, currency)}
                    </div>
                    <div className="font-chakra font-black text-xl text-fuchsia-300 drop-shadow-[0_0_8px_rgba(192,38,211,0.5)]">
                      {formatCurrencyPrice(profile.priceINR, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInspectingProfile(profile)}
                      className="p-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-white/30 bg-white/5 transition-colors cursor-pointer"
                      title="Inspect Profile"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAdd(profile)}
                      className="p-2.5 rounded-xl border border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-600/20 transition-colors cursor-pointer"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleBuyNow(profile)}
                      className="px-4 py-2.5 rounded-xl font-chakra font-bold text-xs uppercase tracking-wider text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                      style={{
                        background: 'linear-gradient(135deg, #c026d3 0%, #9333ea 100%)',
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0e1424] to-fuchsia-950/30 border border-fuchsia-500/30 cyber-cut">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-chakra font-bold text-white text-base">Escrow Protected</h4>
                <p className="text-xs text-gray-400 font-rajdhani">Funds released only after you verify full access.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-chakra font-bold text-white text-base">Replacement Guarantee</h4>
                <p className="text-xs text-gray-400 font-rajdhani">Prompt replacement or refund if any issue arises.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-chakra font-bold text-white text-base">Instant Delivery</h4>
                <p className="text-xs text-gray-400 font-rajdhani">Credentials sent directly to your email/Discord in minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Modal */}
      {inspectingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-[#0b0f1c] border border-fuchsia-500/40 rounded-2xl p-6 shadow-2xl relative cyber-cut">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-chakra font-bold px-2.5 py-1 rounded-full border ${getRankColor(inspectingProfile.rank)} uppercase`}>
                  {inspectingProfile.rank}
                </span>
                <span className="font-chakra font-bold text-lg text-white">
                  {inspectingProfile.title}
                </span>
              </div>
              <button
                onClick={() => setInspectingProfile(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-gray-400">Account Code</div>
                  <div className="font-mono font-bold text-white mt-0.5">{inspectingProfile.code}</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-gray-400">Account Level</div>
                  <div className="font-mono font-bold text-white mt-0.5">Level {inspectingProfile.level}</div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-fuchsia-400 mb-2">
                  Complete Skin Inventory
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {inspectingProfile.skins.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#111728] border border-white/5 text-xs text-gray-200">
                      ⚡ {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Protected by VIB Refund & Replacement Guarantee. Full credentials + recovery email provided.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Total Price</div>
                <div className="font-chakra font-black text-2xl text-fuchsia-400">
                  {formatCurrencyPrice(inspectingProfile.priceINR, currency)}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleAdd(inspectingProfile);
                    setInspectingProfile(null);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-600/20 font-chakra font-bold text-xs"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleBuyNow(inspectingProfile);
                    setInspectingProfile(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-chakra font-bold text-xs uppercase"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};