import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  Zap,
  Headphones,
  Crown,
  CreditCard,
  ArrowRight,
  ShoppingCart,
  ChevronDown,
  MessageSquare,
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';

interface ClientIndianVPPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientIndianVPPage: React.FC<ClientIndianVPPageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const [inStockOnly, setInStockOnly] = useState(true);
  const [popularOnly, setPopularOnly] = useState(false);
  const [priceMax, setPriceMax] = useState(200000);

  const vpPacks = [
    { id: 'in-475', vp: '475 VP', priceINR: 499, originalINR: 599, img: '/assets/client/vp-coins-1.png' },
    { id: 'in-1000', vp: '1,000 VP', priceINR: 999, originalINR: 1199, img: '/assets/client/vp-coins-2.png' },
    { id: 'in-2050', vp: '2,050 VP', priceINR: 1899, originalINR: 2199, img: '/assets/client/vp-coins-3.png' },
    { id: 'in-3650', vp: '3,650 VP', priceINR: 3199, originalINR: 3799, badge: 'POPULAR', img: '/assets/client/vp-coins-large.png' },
    { id: 'in-5350', vp: '5,350 VP', priceINR: 4499, originalINR: 5199, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-7400', vp: '7,400 VP', priceINR: 6199, originalINR: 7199, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-11000', vp: '11,000 VP', priceINR: 8999, originalINR: 10499, badge: 'BEST VALUE', img: '/assets/client/vp-coins-large.png' },
    { id: 'in-14650', vp: '14,650 VP', priceINR: 11999, originalINR: 13999, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-22000', vp: '22,000 VP', priceINR: 17999, originalINR: 20999, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-44000', vp: '44,000 VP', priceINR: 34999, originalINR: 41999, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-66000', vp: '66,000 VP', priceINR: 49999, originalINR: 59999, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-110000', vp: '110,000 VP', priceINR: 79999, originalINR: 96999, img: '/assets/client/vp-coins-large.png' },
    { id: 'in-220000', vp: '220,000 VP', priceINR: 149999, originalINR: 189999, badge: 'EXCLUSIVE', img: '/assets/client/vp-coins-large.png' },
  ];

  const handleBuy = (pack: typeof vpPacks[0]) => {
    onOpenCheckout(`${pack.vp} (Indian Region Top-Up)`, pack.priceINR);
  };

  return (
    <div className="w-full bg-[#07070d] text-white selection:bg-fuchsia-600 selection:text-white space-y-10 pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <span>&gt;</span>
          <button onClick={() => onNavigate('vp')} className="hover:text-white transition-colors cursor-pointer">
            VP Packs
          </button>
          <span>&gt;</span>
          <span className="text-gray-300 font-medium">Indian VP Packs</span>
        </div>
      </div>

      {/* 1. HERO SECTION (Matching Image 4) */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30 text-xs font-semibold">
              <span className="text-sm">🇮🇳</span>
              <span>INDIAN VP PACKS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
              PREMIUM VP PACKS
            </h1>

            <p className="text-gray-300 text-sm max-w-xl">
              Official top-up • Safe &amp; Secure • Instant Processing
            </p>

            {/* 4 Micro Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-gray-300">
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Verified Source</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Best Prices</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Manual Verification</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Glowing 3D VP Chest */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />
              <img
                src="/assets/client/vp-crate.png"
                alt="Glowing 3D VP Chest"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CATALOG LAYOUT (Matching Image 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar (Matching Image 4) */}
          <div className="lg:col-span-3 space-y-5">
            {/* Categories */}
            <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/10 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">
                CATEGORIES
              </div>
              <button
                onClick={() => onNavigate('vp-catalog')}
                className="w-full p-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md text-left"
              >
                <span>🇮🇳</span>
                <span>Indian VP Packs</span>
              </button>
              <button
                onClick={() => onNavigate('vp')}
                className="w-full p-2.5 rounded-xl hover:bg-white/5 text-gray-300 font-medium text-xs flex items-center gap-2 cursor-pointer transition-colors text-left"
              >
                <span>🇵🇭</span>
                <span>Philippines VP Packs</span>
              </button>
              <button
                onClick={() => onNavigate('vp')}
                className="w-full p-2.5 rounded-xl hover:bg-white/5 text-gray-300 font-medium text-xs flex items-center gap-2 cursor-pointer transition-colors text-left"
              >
                <span>🌐</span>
                <span>Other Regions (On Request)</span>
              </button>
            </div>

            {/* Filters */}
            <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/10 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">
                FILTERS
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>Price Range</span>
                  <span className="text-fuchsia-400 font-bold">₹0 – ₹{priceMax.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="150000"
                  step="1000"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-fuchsia-500 cursor-pointer"
                />
              </div>

              {/* Checkbox Features */}
              <div className="space-y-2 text-xs text-gray-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-fuchsia-500 rounded"
                  />
                  <span>In Stock</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={popularOnly}
                    onChange={(e) => setPopularOnly(e.target.checked)}
                    className="accent-fuchsia-500 rounded"
                  />
                  <span>Popular Packs</span>
                </label>
              </div>
            </div>

            {/* Need A Custom Amount Card */}
            <div className="p-4 rounded-2xl bg-[#120e24] border border-fuchsia-500/30 space-y-3">
              <h4 className="font-bold text-sm text-white">NEED A CUSTOM AMOUNT?</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Can't find the VP amount you need? Contact us on WhatsApp for custom bulk requests.
              </p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Online hours */}
            <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/10 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-white font-bold">
                <Headphones className="w-4 h-4 text-fuchsia-400" />
                <span>WE ARE ONLINE 9 AM – 9 PM</span>
              </div>
              <p className="text-[11px]">For orders outside this time, please contact us on WhatsApp.</p>
            </div>
          </div>

          {/* Right Main Grid (Matching Image 4) */}
          <div className="lg:col-span-9 space-y-4">
            {/* Top Bar */}
            <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <h3 className="font-bold text-base text-white">Indian VP Packs</h3>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 max-w-xl">
                  Choose from our wide range of Indian region VP packs. All packs are sourced through official channels and delivered safely to your account after verification.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>Trusted by 50,000+ Users</span>
              </div>
            </div>

            {/* 13 VP Packs Grid in 5 Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {vpPacks
                .filter((p) => p.priceINR <= priceMax)
                .map((pack) => (
                  <div
                    key={pack.id}
                    className="p-3.5 rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center text-center justify-between group shadow-lg relative"
                  >
                    {pack.badge && (
                      <span className="absolute top-2 right-2 text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        {pack.badge}
                      </span>
                    )}

                    <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center mb-2 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src={pack.img} alt={pack.vp} className="w-10 h-10 object-contain" />
                    </div>

                    <div className="space-y-1">
                      <div className="font-black text-sm text-white">{pack.vp}</div>
                      <div className="font-bold text-xs text-fuchsia-400">
                        {formatCurrencyPrice(pack.priceINR, currency)}
                      </div>
                      <div className="text-[10px] text-gray-500 line-through font-mono">
                        {formatCurrencyPrice(pack.originalINR, currency)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBuy(pack)}
                      className="w-full mt-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}

              {/* Banner card filling remaining space */}
              <div className="col-span-2 rounded-2xl overflow-hidden border border-fuchsia-500/30 shadow-lg relative">
                <img
                  src="/assets/client/vp-rifle-banner.png"
                  alt="More Value More Wins"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Custom Amount Bar */}
            <div className="p-4 rounded-2xl bg-[#0e0d1c] border border-fuchsia-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Looking for a different amount?</div>
                  <div className="text-xs text-gray-400">
                    We can help with custom VP orders. Contact us on WhatsApp with your required amount.
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap cursor-pointer"
              >
                Request on WhatsApp &gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM SECTION: How It Works & Why Choose VIB (Matching Image 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: How It Works */}
          <div className="p-6 rounded-3xl bg-[#0d0d18] border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-fuchsia-400" />
              <h3 className="font-black text-lg text-white">How It Works</h3>
            </div>
            <p className="text-xs text-gray-400">Get your VP in 4 simple steps.</p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <div className="font-bold text-xs text-fuchsia-400">1. Select Pack</div>
                <div className="text-[11px] text-gray-400">Choose your VP pack.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <div className="font-bold text-fuchsia-400 text-xs">2. Provide Details</div>
                <div className="text-[11px] text-gray-400">Share your Riot ID and Tag.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <div className="font-bold text-fuchsia-400 text-xs">3. Make Payment</div>
                <div className="text-[11px] text-gray-400">Complete payment via UPI/Card.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <div className="font-bold text-emerald-400 text-xs">4. Verification &amp; Delivery</div>
                <div className="text-[11px] text-gray-400">We verify and credit your account.</div>
              </div>
            </div>
          </div>

          {/* Right Card: Why Choose VIB? with Omen Visual */}
          <div className="p-6 rounded-3xl bg-[#0d0d18] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h3 className="font-black text-lg text-white">Why Choose VIB?</h3>
              </div>

              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Official &amp; Legitimate Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Secure &amp; Verified Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Multiple Payment Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Support</span>
                </div>
              </div>
            </div>

            {/* Omen graphic */}
            <div className="w-32 sm:w-40 flex justify-center">
              <img
                src="/assets/client/vp-omen-security.png"
                alt="Omen Security"
                className="w-full object-contain filter drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                onError={(e) => {
                  e.currentTarget.src = '/assets/agents/omen.png';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};