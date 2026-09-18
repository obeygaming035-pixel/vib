import React from 'react';
import {
  ShieldCheck,
  Check,
  CreditCard,
  Zap,
  Headphones,
  Users,
  ArrowRight,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';

interface ClientVPOverviewPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientVPOverviewPage: React.FC<ClientVPOverviewPageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const indianPacks = [
    { vp: '475 VP', priceINR: 499, img: '/assets/client/vp-coins-1.png' },
    { vp: '1,000 VP', priceINR: 999, img: '/assets/client/vp-coins-2.png' },
    { vp: '2,050 VP', priceINR: 1899, img: '/assets/client/vp-coins-3.png' },
    { vp: '3,650 VP', priceINR: 3199, badge: 'POPULAR', img: '/assets/client/vp-coins-large.png' },
    { vp: '5,350 VP', priceINR: 4499, img: '/assets/client/vp-coins-large.png' },
    { vp: '7,400 VP', priceINR: 6199, img: '/assets/client/vp-coins-large.png' },
    { vp: '11,000 VP', priceINR: 8999, badge: 'BEST VALUE', img: '/assets/client/vp-coins-large.png' },
  ];

  const phpPacks = [
    { vp: '475 VP', priceINR: 299, img: '/assets/client/vp-coins-1.png' },
    { vp: '1,000 VP', priceINR: 549, img: '/assets/client/vp-coins-2.png' },
    { vp: '1,475 VP', priceINR: 799, img: '/assets/client/vp-coins-2.png' },
    { vp: '2,050 VP', priceINR: 1099, badge: 'POPULAR', img: '/assets/client/vp-coins-3.png' },
    { vp: '2,525 VP', priceINR: 1349, img: '/assets/client/vp-coins-3.png' },
    { vp: '3,050 VP', priceINR: 1599, img: '/assets/client/vp-coins-large.png' },
    { vp: '3,650 VP', priceINR: 1999, img: '/assets/client/vp-coins-large.png' },
  ];

  const handleBuy = (vp: string, price: number, region: string) => {
    onOpenCheckout(`${vp} (${region} Top-Up)`, price);
  };

  return (
    <div className="w-full bg-[#07070d] text-white selection:bg-fuchsia-600 selection:text-white space-y-12 sm:space-y-16 pb-16">
      {/* 1. HERO SECTION (Matching Image 5) */}
      <section className="relative w-full pt-8 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
              PREMIUM VP TOP-UP SERVICE
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              GET VP. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                YOUR WAY.
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Safe. Fast. Flexible. Top up your account with trusted and verified VP packs at the best prices, only at VIB.
            </p>

            {/* 5 Micro Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Secure Process</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Manual Verification</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Multiple Payment Options</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Fast Fulfilment</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-purple-400" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Omen holding phone with VP coins (Matching Image 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Top Right Floating Help Box */}
            <div className="w-full max-w-xs mb-3 p-3 rounded-2xl bg-[#120e24] border border-fuchsia-500/30 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-fuchsia-400" />
                <div className="text-[10px]">
                  <div className="font-bold text-white">WE ARE ONLINE 9 AM - 9 PM</div>
                  <div className="text-gray-400">For orders outside this time, WhatsApp us.</div>
                </div>
              </div>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] whitespace-nowrap"
              >
                WhatsApp Us &gt;
              </a>
            </div>

            <div className="relative w-full max-w-md aspect-square flex items-center justify-center min-h-[360px]">
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />

              {/* Stylized Graffiti Text from Image 5 */}
              <div className="absolute right-2 top-4 select-none pointer-events-none opacity-40 text-right z-0">
                <div className="font-marker text-xl sm:text-2xl text-purple-300 rotate-[-8deg] drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                  MORE VP.
                </div>
                <div className="font-marker text-2xl sm:text-3xl text-fuchsia-400 rotate-[-6deg] drop-shadow-[0_0_12px_rgba(232,85,222,0.8)] mt-1">
                  MORE SKINS.
                </div>
                <div className="font-marker text-xl sm:text-2xl text-purple-400 rotate-[-10deg] mt-2">
                  MORE POWER.
                </div>
                <div className="font-marker text-2xl sm:text-3xl text-fuchsia-500 font-bold rotate-[-12deg] mt-2">
                  LEVEL UP.
                </div>
              </div>

              <img
                src="/assets/client/vp-omen-hero.png"
                alt="Omen VP Hero"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGION SELECTOR CARDS (Matching Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div
            onClick={() => onNavigate('vp-catalog')}
            className="p-4 rounded-2xl bg-[#141024] border border-fuchsia-500/80 shadow-[0_0_20px_rgba(192,38,211,0.25)] flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-2xl">🇮🇳</span>
            <div>
              <div className="font-bold text-sm text-white group-hover:text-fuchsia-300 transition-colors">
                Indian VP
              </div>
              <div className="text-xs text-gray-400">Standard Rates</div>
            </div>
          </div>

          <div
            onClick={() => {
              const el = document.getElementById('php-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-4 rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-white/25 flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-2xl">🇵🇭</span>
            <div>
              <div className="font-bold text-sm text-white group-hover:text-fuchsia-300 transition-colors">
                Philippines VP
              </div>
              <div className="text-xs text-gray-400">Cheaper Rates</div>
            </div>
          </div>

          <div
            onClick={() => {
              const el = document.getElementById('other-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-4 rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-white/25 flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-2xl">🌐</span>
            <div>
              <div className="font-bold text-sm text-white group-hover:text-fuchsia-300 transition-colors">
                Other Regions
              </div>
              <div className="text-xs text-gray-400">On Request</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0d0d18] border border-white/10 flex items-center justify-between text-[11px] text-gray-400">
            <div>
              <div className="text-gray-300 font-medium leading-tight">Not sure which region?</div>
              <div className="text-[10px] text-gray-500">Compare rates &amp; options</div>
            </div>
            <button
              onClick={() => onNavigate('vp-catalog')}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[10px] font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              View Comparison &gt;
            </button>
          </div>
        </div>
      </section>

      {/* 3. INDIAN VP PACKS ROW (Matching Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🇮🇳</span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white">
                INDIAN <span className="text-fuchsia-400">VP PACKS</span>
              </h2>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Standard pricing • Direct top-up • Secure &amp; Verified
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden md:block">
              Perfect for players who prefer direct Indian top-up
            </span>
            <button
              onClick={() => onNavigate('vp-catalog')}
              className="text-xs text-fuchsia-400 hover:text-fuchsia-300 font-semibold cursor-pointer"
            >
              Why Choose Indian VP?
            </button>
          </div>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {indianPacks.map((pack, idx) => (
            <div
              key={idx}
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
              </div>

              <button
                onClick={() => handleBuy(pack.vp, pack.priceINR, 'Indian')}
                className="w-full mt-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('vp-catalog')}
            className="px-6 py-2.5 rounded-full bg-[#1b122e] border border-fuchsia-500/40 text-xs font-bold text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>View All Indian VP Packs (13 Denominations)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. PHILIPPINES VP PACKS ROW (Matching Image 5) */}
      <section id="php-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🇵🇭</span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white">
                PHILIPPINES <span className="text-fuchsia-400">VP PACKS</span>
              </h2>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Cheaper rates • Same experience • More value
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden md:block">
              Get VP at lower prices through Philippines region
            </span>
            <button className="text-xs text-fuchsia-400 hover:text-fuchsia-300 font-semibold cursor-pointer">
              Why Choose PHP?
            </button>
          </div>
        </div>

        {/* 7 PHP Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {phpPacks.map((pack, idx) => (
            <div
              key={idx}
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
              </div>

              <button
                onClick={() => handleBuy(pack.vp, pack.priceINR, 'Philippines')}
                className="w-full mt-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OTHER REGIONS STRIP (Matching Image 5) */}
      <section id="other-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-[#0e0d1c] border border-fuchsia-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="font-bold text-sm text-white">OTHER REGIONS (ON REQUEST)</div>
              <div className="text-xs text-gray-400">
                We also provide VP packs for Indonesia, Malaysia, Australia, Singapore and more regions.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-lg">
              <span>🇮🇩</span>
              <span>🇲🇾</span>
              <span>🇦🇺</span>
              <span>🇸🇬</span>
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
      </section>

      {/* 6. 3-COLUMN FEATURE BOXES (Matching Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Box 1: Flexible Payment Plans */}
          <div className="p-6 rounded-2xl bg-[#0d0d18] border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <CreditCard className="w-6 h-6 text-fuchsia-400" />
              <h3 className="font-bold text-base text-white">FLEXIBLE PAYMENT PLANS</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Can't pay the full amount right now? Avail VP with our flexible payment plans. Simple KYC, clear terms, and easy instalments.
              </p>
            </div>
            <button
              onClick={() => onOpenCheckout('Flexible Payment Plan Application', 0)}
              className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View Payment Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Box 2: How To Order */}
          <div className="p-6 rounded-2xl bg-[#0d0d18] border border-white/10 space-y-3">
            <ShoppingCart className="w-6 h-6 text-purple-400" />
            <h3 className="font-bold text-base text-white">HOW TO ORDER</h3>
            <p className="text-xs text-gray-400">Get your VP in 4 simple steps</p>
            <div className="grid grid-cols-4 gap-1 text-center pt-2">
              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                <div className="font-bold text-fuchsia-400">1</div>
                <div className="text-gray-400 mt-0.5">Select Pack</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                <div className="font-bold text-fuchsia-400">2</div>
                <div className="text-gray-400 mt-0.5">Provide Details</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                <div className="font-bold text-fuchsia-400">3</div>
                <div className="text-gray-400 mt-0.5">Make Payment</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-[10px]">
                <div className="font-bold text-emerald-400">4</div>
                <div className="text-gray-400 mt-0.5">Verification</div>
              </div>
            </div>
          </div>

          {/* Box 3: Need Help */}
          <div className="p-6 rounded-2xl bg-[#0d0d18] border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <Headphones className="w-6 h-6 text-cyan-400" />
              <h3 className="font-bold text-base text-white">NEED HELP?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our team is here to assist you with any questions or custom inquiries. Active support 9 AM – 9 PM daily.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
              >
                WhatsApp Us &gt;
              </a>
              <button
                onClick={() => onNavigate('support')}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-bold"
              >
                View FAQ &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4 TRUST BADGES (Matching Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            <div>
              <div className="font-bold text-xs text-white">Verified &amp; Secure</div>
              <div className="text-[10px] text-gray-400">Manual verification for every order</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-fuchsia-400" />
            <div>
              <div className="font-bold text-xs text-white">Multiple Payment Options</div>
              <div className="text-[10px] text-gray-400">UPI, Bank Transfer &amp; more</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <Zap className="w-6 h-6 text-amber-400" />
            <div>
              <div className="font-bold text-xs text-white">Fast &amp; Reliable</div>
              <div className="text-[10px] text-gray-400">Timely delivery after verification</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c16] border border-white/5 flex items-center gap-3">
            <Users className="w-6 h-6 text-cyan-400" />
            <div>
              <div className="font-bold text-xs text-white">Trusted by 50,000+ Users</div>
              <div className="text-[10px] text-gray-400">A growing community</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CINEMATIC BANNER (Matching Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-fuchsia-500/30 shadow-2xl relative">
          <img
            src="/assets/client/vp-bottom-banner.png"
            alt="More Than A Top-Up"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
};