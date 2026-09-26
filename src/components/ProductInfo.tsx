import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Zap, ShieldCheck, ArrowRight, CreditCard, Layers } from 'lucide-react';
import { VPPackage, Currency } from '../types';
import { soundFx } from '../utils/audio';

interface ProductInfoProps {
  currentPkg: VPPackage;
  currency: Currency;
  onBuyNow: () => void;
  onViewAll: () => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  currentPkg,
  currency,
  onBuyNow,
  onViewAll,
}) => {
  // Format price based on selected currency
  const formattedPrice = React.useMemo(() => {
    if (currency === 'USD') {
      const usdMap: Record<string, string> = {
        viper: '$5.99',
        neon: '$11.99',
        phoenix: '$22.99',
        clove: '$39.99',
        omen: '$56.99',
        waylay: '$114.99',
      };
      return usdMap[currentPkg.id] || `$${(currentPkg.priceINR / 83).toFixed(2)}`;
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
      return eurMap[currentPkg.id] || `€${(currentPkg.priceINR / 90).toFixed(2)}`;
    }
    return `₹${currentPkg.priceINR.toLocaleString('en-IN')}`;
  }, [currentPkg, currency]);

  return (
    <div className="relative z-30 w-full lg:w-[480px] xl:w-[540px] flex flex-col items-center lg:items-start text-center lg:text-left">
      {/* Dynamic Animated VP Content Box */}
      <div className="relative min-h-[190px] sm:min-h-[220px] w-full flex flex-col items-center lg:items-start justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPkg.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            {/* Top Pill Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-chakra font-bold tracking-widest text-gray-300 uppercase shadow-sm">
                VP PACKAGE
              </span>
              {currentPkg.badge && (
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-chakra font-extrabold tracking-wider uppercase"
                  style={{
                    backgroundColor: currentPkg.theme.badgeBg,
                    color: currentPkg.theme.badgeText,
                    boxShadow: `0 0 10px ${currentPkg.theme.accentGlow}`,
                  }}
                >
                  {currentPkg.badge}
                </span>
              )}
            </div>

            {/* Huge VP Quantity Display */}
            <h1
              id="selected-vp-amount"
              className="font-teko font-bold text-7xl sm:text-8xl xl:text-9xl leading-none text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            >
              {currentPkg.vpLabel}
            </h1>

            {/* Price Tag */}
            <div className="flex items-baseline gap-3 mt-1 sm:mt-2">
              <span
                id="selected-vp-price"
                className="font-rajdhani font-extrabold text-3xl sm:text-4xl transition-colors duration-700 tracking-wide"
                style={{
                  color: currentPkg.theme.primaryColor,
                  textShadow: `0 0 20px ${currentPkg.theme.accentGlow}`,
                }}
              >
                {formattedPrice}
              </span>
              <span className="text-xs font-rajdhani text-gray-400 uppercase tracking-wider">
                Instant Credit
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3 Feature Value Badges (Stable Layout) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full my-4 py-3 px-3 rounded-xl bg-[#090e16]/60 border border-white/5 backdrop-blur-md">
        {/* Feature 1 */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="p-1.5 rounded-lg bg-white/5 text-gray-300">
            <Globe className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-rajdhani font-bold text-gray-200 leading-tight">
              India Region
            </div>
            <div className="text-[9px] sm:text-[10px] font-rajdhani text-gray-400 leading-tight">
              Supports All Accounts
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="p-1.5 rounded-lg bg-white/5 text-gray-300">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-rajdhani font-bold text-gray-200 leading-tight">
              Fast Processing
            </div>
            <div className="text-[9px] sm:text-[10px] font-rajdhani text-gray-400 leading-tight">
              Usually within minutes
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="p-1.5 rounded-lg bg-white/5 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-rajdhani font-bold text-gray-200 leading-tight">
              100% Safe
            </div>
            <div className="text-[9px] sm:text-[10px] font-rajdhani text-gray-400 leading-tight">
              Direct Riot Delivery
            </div>
          </div>
        </div>
      </div>

      {/* CTA Action Buttons (Anchored in place so layout never jumps) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mt-2">
        {/* Primary Buy Now Button */}
        <button
          id="btn-buy-now-primary"
          type="button"
          onClick={() => {
            soundFx.playClickSound();
            onBuyNow();
          }}
          className="flex-1 px-7 py-3.5 rounded-xl font-chakra font-bold text-base sm:text-lg tracking-wider text-black flex items-center justify-center gap-2.5 transition-all duration-300 transform active:scale-98 shadow-xl cursor-pointer hover:brightness-110"
          style={{
            background: currentPkg.theme.ctaGradient,
            boxShadow: `0 0 25px ${currentPkg.theme.accentGlow}`,
          }}
        >
          <span>Buy Now</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary View All Packs Button */}
        <button
          id="btn-view-all-packs"
          type="button"
          onClick={() => {
            soundFx.playClickSound();
            onViewAll();
          }}
          className="px-6 py-3.5 rounded-xl font-chakra font-semibold text-sm sm:text-base tracking-wider text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>View All Packs</span>
        </button>
      </div>

      {/* Microcopy Security Note */}
      <div className="flex items-center justify-center lg:justify-start gap-2 mt-3.5 text-[11px] font-rajdhani font-medium text-gray-400">
        <CreditCard className="w-3.5 h-3.5 text-gray-400" />
        <span>Manual Payment & UPI | Secure & Instant Verification</span>
      </div>
    </div>
  );
};
