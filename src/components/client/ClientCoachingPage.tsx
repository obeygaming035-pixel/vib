import React from 'react';
import {
  Award,
  Tv,
  Crosshair,
  Target,
  Flame,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Star,
  Users,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Currency } from '../../types';
import { ClientPage } from './Header';

interface ClientCoachingPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientCoachingPage: React.FC<ClientCoachingPageProps> = ({
  currency,
  onNavigate,
  onOpenCheckout,
}) => {
  const pillars = [
    {
      icon: Tv,
      title: 'VOD Review & Macro Strategy',
      desc: 'Detailed round-by-round breakdown of your positioning, rotations, utility economy, and game sense in ranked lobbies.',
    },
    {
      icon: Crosshair,
      title: 'Aim Mechanics & Micro Adjustments',
      desc: 'Personalized crosshair placement routines, movement peeking drills, counter-strafing, and recoil mastery.',
    },
    {
      icon: Target,
      title: 'Agent Mastery & Ability Lineups',
      desc: 'In-depth playbook for your main agent pool including site executes, retakes, and post-plant setups.',
    },
    {
      icon: Flame,
      title: 'Mental Game & Clutch Execution',
      desc: 'Composure under high pressure, team communication leadership, and winning deciding 1v2 and 1v3 rounds.',
    },
  ];

  const packages = [
    {
      id: 'coach-1',
      title: 'Single 1-Hour Session',
      sub: 'Focused VOD Review or Live Coaching',
      price: 799,
      features: [
        '1-on-1 Private Discord Screen-share',
        'Detailed Match VOD Breakdown',
        'Custom Aim Routine Recommendation',
        'Session Recording Provided',
      ],
      popular: false,
    },
    {
      id: 'coach-2',
      title: '5-Session Mastery Bootcamp',
      sub: 'Complete Competitive Transformation',
      price: 3499,
      features: [
        '5 Hours of 1-on-1 Coaching',
        'Full Gameplay & Macro Diagnostic',
        'Personalized Daily Aim & Movement Routine',
        'Agent Lineup & Setup Playbook',
        '24/7 Discord & WhatsApp Coach Access',
        'Guaranteed Rank Improvement',
      ],
      popular: true,
    },
    {
      id: 'coach-3',
      title: 'Duo Coaching Package',
      sub: 'Level Up With Your Duo Partner',
      price: 1499,
      features: [
        '2-Hour Duo Synergy Session',
        'Crossfire & Trade Mechanics',
        'Double-Initiator / Duelist Pairings',
        'Both Players Coached Simultaneously',
      ],
      popular: false,
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-12 pb-20 font-sans">
      {/* 1. HERO HEADER */}
      <section className="relative w-full overflow-hidden min-h-[300px] sm:min-h-[340px] flex items-center pt-8 pb-6 border-b border-white/5">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-4">
          {/* Full-bleed Reference Part 21 background with gradient overlay */}
        <img
          src="/assets/reference_parts/part_21.png"
          alt="Coaching Battle Station"
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05040a] via-[#05040a]/80 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05040a] via-transparent to-transparent z-[1]" />

          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono relative z-10">
            <button onClick={() => onNavigate('home')} className="hover:text-purple-300 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-purple-400 font-semibold">Coaching</span>
          </div>

          <div className="max-w-3xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>TIER 1 COMPETITIVE COACHING</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none font-rajdhani">
              COACHING: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400">LEARN. IMPROVE. DOMINATE.</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              1-on-1 private coaching with Radiant players, VCT tier analysts, and competitive specialists. Custom drills, live VOD reviews, and tailored aim routines.
            </p>
          </div>

          {/* Coach Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-300 font-mono">
            <span className="px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300">
              Top 500 Radiants Only
            </span>
            <span className="px-3 py-1 rounded-lg bg-fuchsia-950/50 border border-fuchsia-500/30 text-fuchsia-300">
              VCT Analysis Methodology
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
              98% Rank Improvement Rate
            </span>
          </div>
        </div>
      </section>

      {/* 2. 4 SKILL PILLARS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-0.5 border-b border-white/[0.06] pb-3">
          <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
            COACHING CURRICULUM
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-rajdhani tracking-wide uppercase">
            THE 4 PILLARS OF MASTERY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0a0717] border border-white/10 hover:border-purple-500/40 transition-all space-y-3 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white font-rajdhani tracking-wide">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. COACHING PACKAGES */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-rajdhani uppercase">CHOOSE YOUR COACHING PLAN</h2>
          <p className="text-xs text-gray-400">Tailored sessions designed to immediately boost your rank and in-game confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between relative shadow-xl ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#180e33] to-[#0c081e] border-fuchsia-500/60 shadow-[0_0_25px_rgba(217,70,239,0.25)]'
                  : 'bg-[#0a0717] border-white/10'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </span>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-lg text-white font-rajdhani uppercase">{pkg.title}</h3>
                  <p className="text-xs text-gray-400">{pkg.sub}</p>
                </div>

                <div className="text-3xl font-black text-white font-rajdhani">
                  ₹{pkg.price.toLocaleString()}
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenCheckout(`Coaching: ${pkg.title}`, pkg.price)}
                  className={`w-full py-3 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white shadow-lg shadow-fuchsia-600/30'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  <span>Book This Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-mono text-gray-300 ml-2">4.9 / 5.0 Average Coaching Rating</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-[#090615] border border-white/5 space-y-2">
              <p className="text-xs text-gray-300 italic">
                &ldquo;Went from Gold 2 to Ascendant 3 in 3 weeks. The round-by-round VOD breakdowns and crosshair placement routines completely transformed my game sense.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-purple-400 font-bold">— Aarav K. (Gold 2 &rarr; Ascendant 3)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090615] border border-white/5 space-y-2">
              <p className="text-xs text-gray-300 italic">
                &ldquo;Coach pinpointed my bad peek timings within 15 minutes. Improved my K/D from 0.85 to 1.34 in competitive lobbies.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-fuchsia-400 font-bold">— Rohan M. (Silver 3 &rarr; Diamond 2)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090615] border border-white/5 space-y-2">
              <p className="text-xs text-gray-300 italic">
                &ldquo;The post-plant lineups and retake communication drills made ranking up feel effortless. Reached Immortal for the first time!&rdquo;
              </p>
              <div className="text-[11px] font-mono text-cyan-400 font-bold">— Priya S. (Platinum 1 &rarr; Immortal 1)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
