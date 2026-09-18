import React from 'react';
import {
  ShieldCheck,
  Check,
  Headphones,
  ArrowRight,
  ShoppingCart,
  Users,
  Award,
  Globe2,
  Megaphone,
  RefreshCw,
  Zap,
  UserCheck,
  Lock,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Currency, CartItem } from '../../types';
import { formatCurrencyPrice } from '../../utils/format';
import { ClientPage } from './Header';

interface ClientServicesPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCheckout: (title: string, priceINR: number) => void;
}

export const ClientServicesPage: React.FC<ClientServicesPageProps> = ({
  currency,
  onNavigate,
  onAddToCart,
  onOpenCheckout,
}) => {
  const serviceCards = [
    {
      id: 'srv-1',
      title: 'Digital Profile Marketplace',
      desc: 'Explore a wide range of digital profiles listed by verified users and our platform.',
      icon: ShoppingCart,
      action: () => onNavigate('profiles'),
    },
    {
      id: 'srv-2',
      title: 'Profile Access Programs',
      desc: 'Flexible access options tailored to your needs and playing style.',
      icon: Users,
      action: () => onOpenCheckout('Profile Access Program Consultation', 0),
    },
    {
      id: 'srv-3',
      title: 'Rank Progression Assistance',
      desc: 'Get professional assistance to enhance your profile progression and rating.',
      icon: Award,
      action: () => onNavigate('rankup'),
    },
    {
      id: 'srv-4',
      title: 'Digital Profile Promotion',
      desc: 'Increase visibility for your profiles with our promotional services.',
      icon: Megaphone,
      action: () => onOpenCheckout('Digital Profile Promotion Plan', 1499),
    },
    {
      id: 'srv-5',
      title: 'Region Conversion Support',
      desc: 'Assistance with region conversion and profile configuration.',
      icon: Globe2,
      action: () => onOpenCheckout('Region Conversion Support', 999),
    },
    {
      id: 'srv-6',
      title: 'Trading & Escrow Facilitation',
      desc: 'A safer way to trade with escrow support and brokered facilitation.',
      icon: RefreshCw,
      action: () => onOpenCheckout('Trading & Escrow Facilitation', 499),
    },
    {
      id: 'srv-7',
      title: 'Urgent Sale Evaluation',
      desc: 'Get your profile evaluated for faster processing and quick liquidation.',
      icon: Zap,
      action: () => onOpenCheckout('Urgent Profile Valuation', 0),
    },
    {
      id: 'srv-8',
      title: 'Customer Verification & Support',
      desc: 'Identity verification and dedicated support for a smoother experience.',
      icon: Headphones,
      action: () => onNavigate('support'),
    },
  ];

  const steps = [
    { num: '01', title: 'Select a Service', desc: 'Choose from our range of digital services.' },
    { num: '02', title: 'Submit Required Details', desc: 'Provide the necessary information for processing.' },
    { num: '03', title: 'Verification & Payment Review', desc: 'We verify your details and process your payment securely.' },
    { num: '04', title: 'Service Fulfilment', desc: 'Our team completes your request as per the selected service.' },
  ];

  const compliance = [
    { title: 'Identity Verification', desc: 'KYC procedures to ensure genuine users and prevent fraudulent activity.', icon: UserCheck },
    { title: 'Transparent Service Terms', desc: 'Clear policies for all our services, refund rules, and escrow terms.', icon: FileText },
    { title: 'Fraud Prevention Measures', desc: 'Active monitoring and risk control systems safeguarding every transaction.', icon: ShieldCheck },
    { title: 'Data Handling & Privacy', desc: 'Your data is protected and handled responsibly with 256-bit encryption.', icon: Lock },
    { title: 'Customer Support', desc: 'Dedicated support for any queries, disputes or order assistance.', icon: Headphones },
  ];

  const featuredListings = [
    { id: 'l-1', badge: 'FEATURED', code: 'Profile #A1023', sub: 'Level Ready • Multiple Features', priceINR: 4999, img: '/assets/client/skin-banner-1.png' },
    { id: 'l-2', badge: 'POPULAR', code: 'Profile #B4481', sub: 'Well Configured • Great Value', priceINR: 3499, img: '/assets/client/skin-banner-2.png' },
    { id: 'l-3', badge: '', code: 'Profile #C7710', sub: 'Premium Setup • Ready to Use', priceINR: 5999, img: '/assets/client/skin-banner-3.png' },
    { id: 'l-4', badge: 'NEW', code: 'Profile #D3091', sub: 'Balanced Profile • Smooth Progress', priceINR: 2499, img: '/assets/client/skin-banner-4.png' },
  ];

  return (
    <div className="w-full bg-[#07070d] text-white selection:bg-fuchsia-600 selection:text-white space-y-12 sm:space-y-16 pb-16">
      {/* 1. HERO SECTION (Matching Image 2) */}
      <section className="relative w-full pt-8 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
              MORE THAN A PLATFORM
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              DIGITAL SERVICES. <br />
              STRUCTURED. SECURE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 drop-shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                PROFESSIONAL.
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              VIB provides digital profile services, marketplace facilitation, promotional services, access programs, and customer support through a structured service platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('profiles')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-200 hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20 bg-[#0e0d1a] hover:bg-white/5"
              >
                View Marketplace
              </button>
            </div>

            <p className="text-[11px] text-gray-500 max-w-lg">
              Services are provided subject to applicable terms, platform policies, service-specific conditions, and verification requirements.
            </p>

            {/* 3 Micro Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
                <span>Secure Process</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Verified Users</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-cyan-400" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual: 3D VIB Monolith on Rock Base (Matching Image 2) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/30 to-pink-500/20 blur-3xl animate-pulse" />
              <img
                src="/assets/client/vib-3d-monolith.png"
                alt="VIB 3D Monolith"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]"
              />
              <div className="absolute right-0 top-6 space-y-1 text-right text-[9px] font-mono tracking-widest text-gray-400 hidden xl:block">
                <div>PEOPLE</div>
                <div>PLATFORMS</div>
                <div>POSSIBILITIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES: Everything You Need, In One Place (Matching Image 2) */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
            OUR SERVICES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Everything You Need, In One Place
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A complete ecosystem of digital services, built for a better and safer community.
          </p>
        </div>

        {/* 8 Cards in 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={srv.action}
                className="p-5 rounded-2xl bg-[#0d0d18] border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-fuchsia-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-fuchsia-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="flex justify-end pt-1">
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-fuchsia-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW VIB WORKS: Simple. Secure. Seamless. (Matching Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
            HOW VIB WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Simple. Secure. Seamless.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Get started in just a few steps and experience a structured service process.
          </p>
        </div>

        {/* 4 Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-[#0d0d18] border border-white/10 space-y-3"
            >
              <div className="w-8 h-8 rounded-full bg-fuchsia-600/20 text-fuchsia-300 font-bold text-xs flex items-center justify-center border border-fuchsia-500/30">
                {step.num}
              </div>
              <h3 className="font-bold text-sm text-white">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRUST & COMPLIANCE: Your Safety Is Our Priority (Matching Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
            TRUST &amp; COMPLIANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Your Safety Is Our Priority
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            We follow structured policies and security measures to ensure a trusted and reliable experience.
          </p>
        </div>

        {/* 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {compliance.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0d0d18] border border-white/10 space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-fuchsia-400 mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xs text-white">{c.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FEATURED LISTINGS: Explore Digital Profiles (Matching Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase">
            Explore Digital Profiles
          </h2>
          <button
            onClick={() => onNavigate('profiles')}
            className="text-xs text-fuchsia-400 hover:text-fuchsia-300 font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredListings.map((l) => (
            <div
              key={l.id}
              className="rounded-2xl bg-[#0d0d18] border border-white/10 overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full bg-black/50 overflow-hidden">
                <img src={l.img} alt={l.code} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                {l.badge && (
                  <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {l.badge}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-2">
                <div className="font-bold text-sm text-white">{l.code}</div>
                <div className="text-xs text-gray-400">{l.sub}</div>
                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <div className="font-black text-base text-white">
                    {formatCurrencyPrice(l.priceINR, currency)}
                  </div>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: l.id,
                        title: l.code,
                        subtitle: l.sub,
                        priceINR: l.priceINR,
                        type: 'profile',
                        image: l.img,
                        quantity: 1,
                      })
                    }
                    className="p-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. READY TO GET STARTED? (Matching Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0d1c] border border-fuchsia-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase">
              READY TO GET STARTED?
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
              Explore Our Services Today
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Join thousands of users who trust VIB for their digital service needs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('profiles')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_15px_rgba(192,38,211,0.4)] cursor-pointer whitespace-nowrap"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};