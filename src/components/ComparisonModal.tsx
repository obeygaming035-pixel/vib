import React from 'react';
import { X, Check, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { VPPackage, Currency } from '../types';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: VPPackage[];
  selectedIndex: number;
  onSelectTier: (index: number) => void;
  currency: Currency;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  packages,
  selectedIndex,
  onSelectTier,
  currency,
}) => {
  if (!isOpen) return null;

  const skinTiers = [
    { name: 'Select Tier Skins (875 VP)', minVp: 875 },
    { name: 'Deluxe Edition Skins (1,275 VP)', minVp: 1275 },
    { name: 'Premium Edition Skins (1,775 VP)', minVp: 1775 },
    { name: 'Exclusive Edition Melees (4,350 VP)', minVp: 4350 },
    { name: 'Full Weapon Skin Bundles (8,700+ VP)', minVp: 8700 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#090d14] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          id="close-comparison-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-chakra tracking-widest text-emerald-400 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Official VIB 2.0 Catalog</span>
          </div>
          <h2 className="font-chakra font-bold text-2xl sm:text-3xl text-white mt-1">
            Valorant Points Tier Comparison
          </h2>
          <p className="text-xs sm:text-sm font-rajdhani text-gray-400 mt-1">
            Compare all 6 official VP packages. Choose the ideal allocation for individual weapon skins, battle passes, or complete agent skin bundles.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, idx) => {
            const isCurrent = idx === selectedIndex;
            const price =
              currency === 'USD'
                ? `$${(pkg.priceINR / 83).toFixed(2)}`
                : currency === 'EUR'
                ? `€${(pkg.priceINR / 90).toFixed(2)}`
                : `₹${pkg.priceINR.toLocaleString('en-IN')}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0f1725] shadow-xl'
                    : 'bg-[#0b0f17] hover:bg-[#0e141f] border-white/10'
                }`}
                style={{
                  borderColor: isCurrent ? pkg.theme.primaryColor : 'rgba(255,255,255,0.1)',
                  boxShadow: isCurrent ? `0 0 20px ${pkg.theme.accentGlow}` : 'none',
                }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={pkg.characterAsset}
                        alt={pkg.agentName}
                        className="w-10 h-10 object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-[10px] font-chakra text-gray-400 uppercase tracking-wider block">
                          {pkg.agentRole}
                        </span>
                        <span className="font-chakra font-bold text-sm text-white block">
                          {pkg.agentName}
                        </span>
                      </div>
                    </div>

                    {pkg.badge && (
                      <span
                        className="text-[9px] font-chakra font-extrabold px-2 py-0.5 rounded tracking-wider uppercase"
                        style={{
                          backgroundColor: pkg.badge === 'POPULAR' ? '#00f59b' : '#ff5416',
                          color: pkg.badge === 'POPULAR' ? '#000000' : '#ffffff',
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <div className="font-teko text-5xl font-bold text-white leading-none">
                    {pkg.vpLabel}
                  </div>

                  <div
                    className="font-rajdhani font-bold text-2xl mt-1"
                    style={{ color: pkg.theme.primaryColor }}
                  >
                    {price}
                  </div>

                  <p className="text-xs font-rajdhani text-gray-400 mt-2 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Skin Affordances */}
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                    <div className="text-[10px] font-chakra text-gray-400 tracking-wider uppercase mb-1">
                      Skin Affordances:
                    </div>
                    {skinTiers.map((tier, tIdx) => {
                      const canAfford = pkg.vpAmount >= tier.minVp;
                      return (
                        <div
                          key={tIdx}
                          className="flex items-center gap-1.5 text-xs font-rajdhani"
                        >
                          <Check
                            className={`w-3.5 h-3.5 ${
                              canAfford ? 'text-emerald-400' : 'text-gray-600'
                            }`}
                          />
                          <span className={canAfford ? 'text-gray-200' : 'text-gray-600'}>
                            {tier.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectTier(idx);
                    onClose();
                  }}
                  className="mt-5 w-full py-2.5 rounded-lg font-chakra font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all"
                  style={{
                    backgroundColor: isCurrent ? pkg.theme.primaryColor : 'rgba(255,255,255,0.08)',
                    color: isCurrent ? '#000000' : '#ffffff',
                  }}
                >
                  <span>{isCurrent ? 'Currently Viewing' : `Select ${pkg.agentName} Pack`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
