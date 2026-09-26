import React from 'react';
import { VPPackage, Currency } from '../types';
import { soundFx } from '../utils/audio';

interface PackageCardsBarProps {
  packages: VPPackage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  currency: Currency;
}

export const PackageCardsBar: React.FC<PackageCardsBarProps> = ({
  packages,
  activeIndex,
  onSelect,
  currency,
}) => {
  const currentPkg = packages[activeIndex];

  const getPrice = (pkg: VPPackage) => {
    if (currency === 'USD') {
      const usdMap: Record<string, string> = {
        viper: '$5.99',
        neon: '$11.99',
        phoenix: '$22.99',
        clove: '$39.99',
        omen: '$56.99',
        waylay: '$114.99',
      };
      return usdMap[pkg.id] || `$${(pkg.priceINR / 83).toFixed(2)}`;
    }
    if (currency === 'EUR') {
      const eurMap: Record<string, string> = {
        viper: '€5.49',
        neon: '€10.99',
        phoenix: '€20.99',
        clove: '€36.99',
        omen: '€52.99',
        waylay: '€104.99',
      };
      return eurMap[pkg.id] || `€${(pkg.priceINR / 90).toFixed(2)}`;
    }
    return `₹${pkg.priceINR.toLocaleString('en-IN')}`;
  };

  return (
    <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2 flex flex-col items-center">
      {/* 6 Package Cards Grid / Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3.5 w-full">
        {packages.map((pkg, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={pkg.id}
              id={`vp-card-tier-${idx}`}
              type="button"
              onClick={() => {
                if (idx !== activeIndex) {
                  soundFx.playTransitionSound(pkg.theme.primaryColor);
                  onSelect(idx);
                }
              }}
              className={`relative group rounded-xl p-2.5 sm:p-3 text-left transition-all duration-500 flex flex-col justify-between border cursor-pointer select-none overflow-hidden ${
                isActive
                  ? 'bg-[#0f1724]/90 shadow-2xl scale-[1.02]'
                  : 'bg-[#090d14]/70 hover:bg-[#0d131d]/90 hover:border-white/20 border-white/10'
              }`}
              style={{
                borderColor: isActive ? currentPkg.theme.primaryColor : 'rgba(255,255,255,0.08)',
                boxShadow: isActive ? `0 0 25px ${currentPkg.theme.accentGlow}` : 'none',
              }}
            >
              {/* Active Backlight Gradient */}
              {isActive && (
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${currentPkg.theme.primaryColor}, transparent 70%)`,
                  }}
                />
              )}

              {/* Card Header: VP Icon, Agent Name & Badge */}
              <div className="flex items-center justify-between w-full mb-1.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  {/* Valorant VP Coin SVG Icon */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                      isActive ? 'border-white/40 bg-white/10' : 'border-white/15 bg-white/5'
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:rotate-12 duration-300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
                      <path
                        d="M7 8L12 17L17 8H14.5L12 13L9.5 8H7Z"
                        fill={isActive ? currentPkg.theme.primaryColor : '#cbd5e1'}
                      />
                    </svg>
                  </div>

                  <span
                    className={`text-[10px] sm:text-[11px] font-chakra font-bold tracking-wider uppercase truncate transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}
                  >
                    {pkg.agentName}
                  </span>
                </div>

                {/* Badge Tag */}
                {pkg.badge && (
                  <span
                    className="shrink-0 text-[8px] sm:text-[9px] font-chakra font-extrabold px-1.5 py-0.5 rounded tracking-wider uppercase leading-none shadow-sm ml-1"
                    style={{
                      backgroundColor: pkg.badge === 'POPULAR' ? '#00f59b' : '#ff5416',
                      color: pkg.badge === 'POPULAR' ? '#000000' : '#ffffff',
                    }}
                  >
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Card Body: VP Amount & Price */}
              <div>
                <div className="font-chakra font-bold text-xs sm:text-sm text-gray-200 group-hover:text-white transition-colors">
                  {pkg.vpLabel}
                </div>
                <div
                  className="font-rajdhani font-extrabold text-sm sm:text-base mt-0.5 transition-colors duration-500"
                  style={{
                    color: isActive ? currentPkg.theme.primaryColor : '#94a3b8',
                  }}
                >
                  {getPrice(pkg)}
                </div>
              </div>

              {/* Bottom Active Glow Strip */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full transition-colors duration-700"
                  style={{ backgroundColor: currentPkg.theme.primaryColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Segmented Progress Tracker & Slide Indicator */}
      <div className="flex items-center justify-between w-full mt-3 px-1">
        {/* Progress Track */}
        <div className="flex items-center gap-1.5 flex-1 max-w-[240px]">
          {packages.map((_, i) => (
            <div
              key={i}
              className="h-[3px] rounded-full flex-1 transition-all duration-700"
              style={{
                backgroundColor: i === activeIndex ? currentPkg.theme.primaryColor : 'rgba(255,255,255,0.12)',
                boxShadow: i === activeIndex ? `0 0 10px ${currentPkg.theme.accentGlow}` : 'none',
              }}
            />
          ))}
        </div>

        {/* Index Display: e.g. 01 / 06 */}
        <div className="flex items-center gap-2 text-xs font-chakra tracking-widest text-gray-400">
          <span
            className="font-bold transition-colors duration-700"
            style={{ color: currentPkg.theme.primaryColor }}
          >
            0{activeIndex + 1}
          </span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-500">0{packages.length}</span>
        </div>
      </div>
    </div>
  );
};
