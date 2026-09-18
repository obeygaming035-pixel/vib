import React from 'react';
import { Award, Video, Target, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Currency } from '../../types';

interface CoachingPreviewProps {
  currency: Currency;
  onOpenCheckout: (sessionTitle: string, price: number) => void;
}

export const CoachingPreview: React.FC<CoachingPreviewProps> = ({
  currency,
  onOpenCheckout,
}) => {
  const formatPrice = (inr: number) => {
    if (currency === 'USD') return `$${(inr * 0.012).toFixed(0)}`;
    if (currency === 'EUR') return `€${(inr * 0.011).toFixed(0)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const coaches = [
    {
      id: 'vod-review',
      title: '60-Min In-Depth VOD Review',
      coach: 'Coach Z1ro • Radiant Peak 850 RR',
      focus: 'Micro Decision Making & Positioning',
      priceINR: 999,
      icon: Video,
      highlights: ['Round-by-round timestamped breakdown', 'Custom training routine PDF included', 'Screen recording download provided'],
    },
    {
      id: 'live-duo',
      title: '90-Min Live Duo Coaching',
      coach: 'Coach K1ng • Ex-VCT Game Changers',
      focus: 'Real-time Comm Guidance & Mid-round calling',
      priceINR: 1499,
      icon: Users,
      highlights: ['Coach plays support alongside you', 'Immediate mid-round adjustments', 'Post-match tactical summary'],
    },
    {
      id: 'aim-mastery',
      title: 'Aim & Crosshair Placement Bootcamp',
      coach: 'Coach Sh4dow • Tier 2 Challengers Duelist',
      focus: 'Crosshair discipline, strafing & micro-adjustments',
      priceINR: 1299,
      icon: Target,
      highlights: ['Custom Aimlabs & Kovaak playlist', 'Sensitivity & grip analysis', 'Movement desync troubleshooting'],
    },
  ];

  return (
    <section id="coaching" className="relative w-full py-20 bg-[#060910] border-t border-white/5 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Card with Sage Artwork */}
          <div className="lg:col-span-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#091515] via-[#071111] to-[#050b0b] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-chakra font-bold tracking-widest uppercase">
                RADIANT MENTORSHIP
              </span>
              <h3 className="font-teko uppercase text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2 leading-tight">
                HEAL YOUR GAMEPLAY
              </h3>
              <p className="font-rajdhani text-sm text-gray-300 mt-2">
                Stop relying on coin-flip teammates. Learn how radiant players consistently convert 1v3 clutches and control rounds with high-IQ utility.
              </p>

              <div className="flex flex-col gap-2 mt-4 text-xs font-rajdhani text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Discord Private Voice & Screen Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personalized 30-Day Improvement Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Satisfaction Guaranteed or Reschedule Free</span>
                </div>
              </div>
            </div>

            {/* Official Sage Artwork Cutout Anchor */}
            <div className="relative w-full h-[300px] sm:h-[340px] flex items-end justify-center mt-4 pointer-events-none select-none">
              <img
                src="/assets/agents/sage.png"
                alt="Valorant Sage Coaching"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>

          {/* Right Sessions Grid */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-chakra text-emerald-300 uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>TIER-1 COACHING STAFF</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>ELEVATE YOUR </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                GAME SENSE & AIM
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3 mb-6">
              Book personalized sessions with verified VCT tier-2 coaches and top 500 radiant players. Every session is recorded and delivered with tailored practice drills.
            </p>

            <div className="flex flex-col gap-4">
              {coaches.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.id}
                    className="rounded-2xl border border-white/10 bg-[#090d16]/80 hover:bg-[#0d1422] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-0.5 shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-chakra font-bold text-lg text-white group-hover:text-emerald-200 transition-colors">
                          {c.title}
                        </h4>
                        <div className="text-xs font-chakra text-emerald-400 mt-0.5">
                          {c.coach}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs font-rajdhani text-gray-400">
                          {c.highlights.map((h, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-emerald-400" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="text-right">
                        <div className="text-[10px] font-rajdhani text-gray-400 uppercase">Per Session</div>
                        <div className="font-rajdhani font-bold text-2xl text-white">
                          {formatPrice(c.priceINR)}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCheckout(c.title, c.priceINR)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-chakra font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
