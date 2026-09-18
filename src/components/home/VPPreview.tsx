import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, ExternalLink } from 'lucide-react';
import { VP_PACKAGES } from '../../data/packages';
import { Currency } from '../../types';

interface VPPreviewProps {
  currency: Currency;
  onNavigateToVP: (packageIndex?: number) => void;
}

export const VPPreview: React.FC<VPPreviewProps> = ({
  currency,
  onNavigateToVP,
}) => {
  const formatPrice = (inr: number) => {
    if (currency === 'USD') return `$${(inr * 0.012).toFixed(2)}`;
    if (currency === 'EUR') return `€${(inr * 0.011).toFixed(2)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <section id="vp-preview" className="relative w-full py-20 bg-[#080c14] border-t border-white/5 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-chakra text-cyan-300 uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>DIRECT RIOT STORE FULFILLMENT</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>VALORANT POINTS </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
                TOP-UP VAULT
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3">
              Direct riot digital vouchers delivered in real time. Valid for all regional servers including India, APAC, Europe & NA with instant automated delivery.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigateToVP(0)}
            className="self-start sm:self-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-chakra font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer group"
          >
            <span>Launch Character VP Selector</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 6 VP Package Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {VP_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              onClick={() => onNavigateToVP(index)}
              className="relative rounded-2xl border border-white/10 bg-[#0a101d]/80 hover:bg-[#0f172a] p-4 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1.5 shadow-lg group cursor-pointer overflow-hidden"
            >
              {/* Badge if Popular or Best Value */}
              {pkg.badge && (
                <div className="absolute top-2 right-2">
                  <span
                    className="px-2 py-0.5 rounded text-[8px] font-chakra font-extrabold uppercase tracking-wider shadow-sm"
                    style={{
                      backgroundColor: pkg.badge === 'BEST VALUE' ? '#ef4444' : '#c026d3',
                      color: '#ffffff',
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Agent Silhouette / Avatar */}
              <div className="w-full h-24 flex items-center justify-center my-2 pointer-events-none select-none">
                <img
                  src={pkg.characterAsset}
                  alt={pkg.agentName}
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Package Content */}
              <div className="text-center pt-2 border-t border-white/5">
                <div className="text-[10px] font-chakra text-gray-400 uppercase tracking-wider">
                  {pkg.agentName}
                </div>
                <div className="font-teko font-bold text-2xl text-white tracking-wide leading-tight">
                  {pkg.vpLabel}
                </div>
                <div className="font-rajdhani font-bold text-base text-cyan-300 mt-1">
                  {formatPrice(pkg.priceINR)}
                </div>
              </div>

              {/* Bottom select hint */}
              <div className="mt-3 w-full py-1 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 text-[10px] font-chakra text-center text-gray-400 group-hover:text-cyan-300 transition-colors uppercase font-bold tracking-wider">
                Select VP
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
