import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VPPackage } from '../types';

interface CyberBordersProps {
  currentPkg: VPPackage;
  onPrev: () => void;
  onNext: () => void;
}

export const CyberBorders: React.FC<CyberBordersProps> = ({
  currentPkg,
  onPrev,
  onNext,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20 flex flex-col justify-between">
      {/* Top Subtle Tech Accents (Balanced Horizontal Framing) */}
      <div className="w-full flex justify-between items-center px-4 sm:px-8 pt-3">
        {/* Left Tech Bracket */}
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 transform rotate-45 border transition-colors duration-700"
            style={{ borderColor: currentPkg.theme.primaryColor }}
          />
          <div
            className="h-[1px] w-12 sm:w-24 transition-colors duration-700"
            style={{
              background: `linear-gradient(to right, ${currentPkg.theme.primaryColor}, transparent)`,
            }}
          />
          <span className="text-[10px] font-chakra tracking-widest text-gray-500 uppercase hidden sm:inline">
            VIB 2.0 // VP CATALOG
          </span>
        </div>

        {/* Right Tech Bracket */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-chakra tracking-widest text-gray-500 uppercase hidden sm:inline">
            SECURE CHECKOUT // DIRECT RIOT DELIVERY
          </span>
          <div
            className="h-[1px] w-12 sm:w-24 transition-colors duration-700"
            style={{
              background: `linear-gradient(to left, ${currentPkg.theme.primaryColor}, transparent)`,
            }}
          />
          <div
            className="w-2.5 h-2.5 transform rotate-45 border transition-colors duration-700"
            style={{ borderColor: currentPkg.theme.primaryColor }}
          />
        </div>
      </div>

      {/* Symmetrical Left & Right Navigation Arrows */}
      <div className="w-full flex justify-between items-center px-3 sm:px-6 relative pointer-events-none">
        {/* Left Nav Arrow Button */}
        <button
          id="nav-arrow-prev"
          type="button"
          onClick={onPrev}
          aria-label="Previous VP Package"
          className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080d14]/80 hover:bg-[#0c1420] border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all duration-300 transform active:scale-90 hover:scale-105 shadow-xl group backdrop-blur-md cursor-pointer"
          style={{
            boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
          }}
        >
          <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: `0 0 20px ${currentPkg.theme.accentGlow}`,
            }}
          />
        </button>

        {/* Right Nav Arrow Button */}
        <button
          id="nav-arrow-next"
          type="button"
          onClick={onNext}
          aria-label="Next VP Package"
          className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080d14]/80 hover:bg-[#0c1420] border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all duration-300 transform active:scale-90 hover:scale-105 shadow-xl group backdrop-blur-md cursor-pointer"
          style={{
            boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
          }}
        >
          <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: `0 0 20px ${currentPkg.theme.accentGlow}`,
            }}
          />
        </button>
      </div>

      {/* Bottom Subtle Microcopy Lines */}
      <div className="w-full flex justify-between items-center px-4 sm:px-8 pb-1 text-[10px] font-chakra text-gray-500 uppercase tracking-widest">
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-gray-400">VIB 2.0</span>
          <span>// INSTANT VP FULFILLMENT</span>
        </div>
        <div className="mx-auto hidden md:block text-gray-500 tracking-[0.2em]">
          OFFICIAL VALORANT POINTS PACKAGES FOR INDIA & GLOBAL ACCOUNTS
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          <span>SERVER ONLINE</span>
        </div>
      </div>
    </div>
  );
};
