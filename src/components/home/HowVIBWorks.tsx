import React from 'react';
import { Search, ShieldCheck, Key, Gamepad2, ArrowRight } from 'lucide-react';

export const HowVIBWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Browse & Select',
      desc: 'Explore hand-verified Valorant profiles or instant VP packs with full inventory breakdowns and live prices.',
      icon: Search,
      badge: 'DISCOVERY',
    },
    {
      num: '02',
      title: 'Secure Escrow Checkout',
      desc: 'Pay safely via UPI, Net Banking, or Cards. Funds are held in escrow until you confirm delivery.',
      icon: ShieldCheck,
      badge: 'PROTECTION',
    },
    {
      num: '03',
      title: 'Verification & Transfer',
      desc: 'Receive full account credentials, first-creation email, and recovery details with guided setup.',
      icon: Key,
      badge: 'VERIFIED',
    },
    {
      num: '04',
      title: 'Instant Play & Guarantee',
      desc: 'Jump into competitive queue with complete ownership backed by our Refund & Replacement Guarantee.',
      icon: Gamepad2,
      badge: 'WARRANTY',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-white/10 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-fuchsia-400 uppercase">
          <span>Seamless 4-Step Process</span>
        </div>
        <h2 className="font-chakra font-black text-3xl sm:text-4xl uppercase tracking-wider text-white">
          HOW VIB WORKS
        </h2>
        <p className="text-gray-400 text-sm font-rajdhani">
          A transparent, escrow-secured workflow designed for maximum player safety and peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 3D Floating VIB Rock Monolith (Matching Image 2) */}
        <div className="lg:col-span-4 flex justify-center items-center relative">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-square flex items-center justify-center">
            {/* Luminous Core Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/25 to-pink-500/20 blur-2xl animate-pulse" />
            
            {/* Cyber Ring */}
            <div className="absolute inset-2 border border-fuchsia-500/30 rounded-full animate-[spin_60s_linear_infinite]" />

            <img
              src="/assets/client/vib-3d-monolith.png"
              alt="VIB 3D Monolith"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(192,38,211,0.5)] transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = '/assets/client/vib-logo.png';
              }}
            />
          </div>
        </div>

        {/* Right: 4-Step Stepper Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-[#0c101d] border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 space-y-3 group shadow-lg cyber-cut"
              >
                <div className="flex items-center justify-between">
                  <span className="font-chakra font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30">
                    {step.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-chakra font-bold text-base text-white group-hover:text-fuchsia-300 transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};