import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Users, Headphones, Zap } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface HomeHeroClientProps {
  onExploreProfiles: () => void;
  onBuyVP: () => void;
}

export const HomeHeroClient: React.FC<HomeHeroClientProps> = ({
  onExploreProfiles,
  onBuyVP,
}) => {
  return (
    <section className="relative w-full border-b border-white/10 bg-gradient-to-b from-[#0e1322] via-[#090d16] to-[#070a10] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-chakra font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Official Valorant Marketplace & Services</span>
          </div>

          {/* Main Title (Matching Image 3) */}
          <h1 className="font-chakra font-black text-4xl sm:text-5xl xl:text-6xl uppercase tracking-tight text-white leading-tight">
            INDIA'S MOST TRUSTED <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
              ESPORTS DIGITAL SERVICE
            </span>{' '}
            PLATFORM
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 font-rajdhani text-base sm:text-lg max-w-xl leading-relaxed">
            Buy & sell verified Valorant profiles, instant VP top-ups, rank-up boosting, and professional esports services with guaranteed escrow protection.
          </p>

          {/* 4 Metric Badges Grid (Matching Image 3) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div>
                <div className="font-chakra font-bold text-sm text-white leading-none">50K+</div>
                <div className="text-[10px] text-gray-400 font-rajdhani mt-0.5">Happy Users</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-chakra font-bold text-sm text-white leading-none">4.9/5</div>
                <div className="text-[10px] text-gray-400 font-rajdhani mt-0.5">User Rating</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="font-chakra font-bold text-sm text-white leading-none">100%</div>
                <div className="text-[10px] text-gray-400 font-rajdhani mt-0.5">Secure Escrow</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Headphones className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="font-chakra font-bold text-sm text-white leading-none">24/7</div>
                <div className="text-[10px] text-gray-400 font-rajdhani mt-0.5">Live Support</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons (Matching Image 3) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                soundFx.playClickSound();
                onExploreProfiles();
              }}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-chakra font-bold text-sm uppercase tracking-wider text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #c026d3 0%, #9333ea 100%)',
                boxShadow: '0 0 20px rgba(192, 38, 211, 0.45)',
              }}
            >
              <span>Explore Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                soundFx.playClickSound();
                onBuyVP();
              }}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-chakra font-bold text-sm uppercase tracking-wider text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Buy VP Packs</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Art (Futuristic Cyberpunk Assassin from Image 3) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-md sm:max-w-lg aspect-square flex items-center justify-center">
            {/* Ambient Radial Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />

            {/* Glowing Cyber Rings */}
            <div className="absolute inset-0 border border-fuchsia-500/25 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-8 border border-purple-400/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

            <img
              src="/assets/client/hero-assassin.png"
              alt="Valorant Cyberpunk Hero"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(192,38,211,0.6)]"
              onError={(e) => {
                // Fallback to local agent
                e.currentTarget.src = '/assets/agents/reyna.png';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};