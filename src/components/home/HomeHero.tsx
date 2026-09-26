import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HomeHeroProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
  onNavigateToVP: (pkgIndex?: number) => void;
}

const SQUAD_AGENTS = [
  {
    id: 'viper',
    name: 'VIPER',
    role: 'CONTROLLER',
    color: '#00f59b',
    glow: 'rgba(0, 245, 155, 0.45)',
    asset: '/assets/agents/viper.png',
    vpIndex: 0,
  },
  {
    id: 'neon',
    name: 'NEON',
    role: 'DUELIST',
    color: '#00d2ff',
    glow: 'rgba(0, 210, 255, 0.45)',
    asset: '/assets/agents/neon.png',
    vpIndex: 1,
  },
  {
    id: 'phoenix',
    name: 'PHOENIX',
    role: 'DUELIST',
    color: '#ff5416',
    glow: 'rgba(255, 84, 22, 0.45)',
    asset: '/assets/agents/phoenix.png',
    vpIndex: 2,
  },
  {
    id: 'clove',
    name: 'CLOVE',
    role: 'CONTROLLER',
    color: '#e855de',
    glow: 'rgba(232, 85, 222, 0.45)',
    asset: '/assets/agents/clove.png',
    vpIndex: 3,
  },
  {
    id: 'omen',
    name: 'OMEN',
    role: 'CONTROLLER',
    color: '#536dfa',
    glow: 'rgba(83, 109, 250, 0.45)',
    asset: '/assets/agents/omen.png',
    vpIndex: 4,
  },
  {
    id: 'waylay',
    name: 'WAYLAY',
    role: 'INITIATOR',
    color: '#e056fd',
    glow: 'rgba(224, 86, 253, 0.45)',
    asset: '/assets/agents/waylay.png',
    vpIndex: 5,
  },
];

export const HomeHero: React.FC<HomeHeroProps> = ({
  onGetStarted,
  onExploreServices,
  onNavigateToVP,
}) => {
  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#070a10]">
      {/* Background Volumetric Atmosphere & Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-purple-900/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[120px]" />

        {/* Angular Cyber Lines Background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(ellipse at 60% 40%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 20%, transparent 80%)',
          }}
        />

        {/* High-Tech Laser Beam Accent */}
        <div
          className="absolute -top-32 right-1/3 w-[2px] h-[1200px] transform rotate-[35deg] opacity-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #c026d3, #38bdf8, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN: Main Hero Copy, Eyebrow & CTAs (Guaranteed safe bounds, no overlap) */}
        <div className="lg:col-span-5 flex flex-col items-start z-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 text-xs font-chakra uppercase tracking-[0.25em] text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            <span>PLAY • TRADE • UPGRADE • BELONG</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-teko uppercase font-bold text-6xl sm:text-7xl lg:text-7xl xl:text-8xl leading-[0.88] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
            <span className="block text-white">YOUR</span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 filter drop-shadow-[0_0_35px_rgba(192,38,211,0.5)]"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              VALORANT
            </span>
            <span className="block text-white">HUB</span>
          </h1>

          {/* Subtitle Copy */}
          <div className="mt-4 sm:mt-5 text-gray-300 font-rajdhani font-medium text-base sm:text-lg max-w-md leading-relaxed">
            <p className="font-semibold text-white">Accounts. VP. Coaching. Trading. And More.</p>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Trusted by thousands of players worldwide. Everything you need for your Valorant journey in one unified, secure platform.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-7 w-full sm:w-auto">
            {/* Primary Get Started Button */}
            <button
              id="hero-get-started-btn"
              type="button"
              onClick={onGetStarted}
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-chakra font-bold text-base sm:text-lg tracking-wider text-white flex items-center justify-center gap-2.5 transition-all duration-300 transform active:scale-95 shadow-xl hover:shadow-[0_0_35px_rgba(192,38,211,0.6)] cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, #c026d3 0%, #9333ea 50%, #7c3aed 100%)',
              }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Explore Services Button */}
            <button
              id="hero-explore-services-btn"
              type="button"
              onClick={onExploreServices}
              className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-chakra font-semibold text-sm sm:text-base tracking-wider text-gray-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Micro Brand Tag */}
          <div className="flex items-center gap-2 mt-7 text-xs font-chakra tracking-widest text-gray-500 uppercase">
            <svg viewBox="0 0 32 32" className="w-4 h-4" fill="none">
              <path d="M4 6L14 26L18 26L28 6H22L16 19L10 6H4Z" fill="#c026d3" />
              <circle cx="16" cy="9" r="2" fill="#ffffff" />
            </svg>
            <span>VIB 2.0 // OFFICIAL VALORANT SERVICES</span>
          </div>
        </div>

        {/* RIGHT COLUMN: 6 Agents Standing Together with Neon Line Underneath (Seamless, No Box, No Names) */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[460px] lg:h-[480px] flex flex-col justify-end items-center z-10 w-full">
          {/* Subtle Ambient Backlight Glow behind the squad */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[450px] sm:w-[560px] h-[280px] sm:h-[340px] rounded-full bg-gradient-to-r from-emerald-500/15 via-purple-600/20 to-cyan-500/15 blur-[120px]" />
          </div>

          {/* 6-Column Grid — Pure characters standing in 1 line with small neon line under each */}
          <div className="relative z-10 w-full max-w-[680px] lg:max-w-[720px] h-full grid grid-cols-6 gap-1 sm:gap-2 items-end px-1">
            {SQUAD_AGENTS.map((agent) => (
              <div
                key={agent.id}
                id={`hero-squad-agent-${agent.id}`}
                className="group relative h-full flex flex-col items-center justify-end select-none transition-all duration-300 cursor-default"
              >
                {/* Ground Spotlight Aura for this Agent */}
                <div
                  className="absolute bottom-1 w-12 sm:w-16 h-8 sm:h-10 rounded-full blur-md opacity-25 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: agent.color }}
                />

                {/* Character Asset Standing Naturally */}
                <div className="relative w-full h-[320px] sm:h-[370px] lg:h-[410px] flex items-end justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1.5 pointer-events-none">
                  <img
                    src={agent.asset}
                    alt={agent.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full w-auto h-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
                  />
                </div>

                {/* Small Line Underneath the Character */}
                <div
                  className="w-6 sm:w-8 h-[2.5px] rounded-full opacity-40 group-hover:opacity-100 group-hover:w-12 transition-all duration-300 mb-1 pointer-events-none"
                  style={{
                    backgroundColor: agent.color,
                    boxShadow: `0 0 12px ${agent.glow}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
