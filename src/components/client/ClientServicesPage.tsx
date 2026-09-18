import React from 'react';
import {
  ShieldCheck,
  Check,
  Headphones,
  ArrowRight,
  ShoppingCart,
  Users,
  Globe,
  Megaphone,
  RefreshCw,
  Zap,
  Lock,
  FileText,
  ChevronLeft,
  ChevronRight,
  MousePointer,
  Package,
  CreditCard,
  BarChart2,
  BadgeCheck,
  HelpCircle,
  ExternalLink,
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
      desc: 'Flexible access options tailored to your needs.',
      icon: Users,
      action: () => onOpenCheckout('Profile Access Program Consultation', 0),
    },
    {
      id: 'srv-3',
      title: 'Rank Progression Assistance',
      desc: 'Get professional assistance to enhance your profile progression.',
      icon: BarChart2,
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
      icon: Globe,
      action: () => onOpenCheckout('Region Conversion Support', 999),
    },
    {
      id: 'srv-6',
      title: 'Trading & Escrow Facilitation',
      desc: 'A safer way to trade with escrow support and brokered facilitation.',
      icon: ShieldCheck,
      action: () => onOpenCheckout('Trading & Escrow Facilitation', 499),
    },
    {
      id: 'srv-7',
      title: 'Urgent Sale Evaluation',
      desc: 'Get your profile evaluated for faster processing.',
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
    {
      num: '01',
      title: 'Select a Service',
      desc: 'Choose from our range of digital services.',
      icon: MousePointer,
    },
    {
      num: '02',
      title: 'Submit Required Details',
      desc: 'Provide the necessary information for processing.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Verification & Payment Review',
      desc: 'We verify your details and process your payment securely.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Service Fulfilment',
      desc: 'Our team completes your request as per the selected service.',
      icon: Package,
    },
  ];

  const compliance = [
    {
      title: 'Identity Verification',
      desc: 'KYC procedures to ensure genuine users.',
      icon: BadgeCheck,
    },
    {
      title: 'Transparent Service Terms',
      desc: 'Clear policies for all our services.',
      icon: FileText,
    },
    {
      title: 'Fraud Prevention Measures',
      desc: 'Active monitoring and risk control systems.',
      icon: ShieldCheck,
    },
    {
      title: 'Data Handling & Privacy',
      desc: 'Your data is protected and handled responsibly.',
      icon: Lock,
    },
    {
      title: 'Customer Support',
      desc: 'Dedicated support for any queries or issues.',
      icon: Headphones,
    },
  ];

  const featuredListings = [
    {
      id: 'l-1',
      badge: 'FEATURED',
      badgeColor: 'amber',
      code: 'Profile #A1023',
      sub: 'Level Ready • Multiple Features',
      priceINR: 4999,
      weapon: '/assets/items/vandal-prime.png',
      weaponName: 'Prime Vandal Edition',
    },
    {
      id: 'l-2',
      badge: 'POPULAR',
      badgeColor: 'amber',
      code: 'Profile #B4481',
      sub: 'Well Configured • Great Value',
      priceINR: 3499,
      weapon: '/assets/items/vandal-rgx.png',
      weaponName: 'RGX 11z Pro Vandal',
    },
    {
      id: 'l-3',
      badge: '',
      badgeColor: '',
      code: 'Profile #C7710',
      sub: 'Premium Setup • Ready to Use',
      priceINR: 5999,
      weapon: '/assets/items/phantom-rgx.png',
      weaponName: 'RGX 11z Pro Phantom',
    },
    {
      id: 'l-4',
      badge: 'NEW',
      badgeColor: 'cyan',
      code: 'Profile #D3091',
      sub: 'Balanced Profile • Smooth Progress',
      priceINR: 2499,
      weapon: '/assets/items/vandal-reaper.png',
      weaponName: 'Reaver Vandal Spec',
    },
  ];

  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-9 sm:space-y-12 pb-16 font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Reference 5)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden pt-4 sm:pt-6">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute top-10 right-1/4 w-[650px] h-[550px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[450px] h-[350px] bg-fuchsia-800/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] font-mono tracking-[0.22em] text-[#e879f9] uppercase font-bold">
              MORE THAN A PLATFORM
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase tracking-tight leading-[1.02] font-rajdhani">
              <span className="text-white">DIGITAL SERVICES.</span> <br />
              <span className="text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                STRUCTURED. SECURE.
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_25px_rgba(192,38,211,0.5)]">
                PROFESSIONAL.
              </span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              VIB provides digital profile services, marketplace facilitation, promotional services, access programs, and customer support through a structured service platform.
            </p>

            {/* CTAs matching Reference 5 */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg flex items-center gap-2 font-rajdhani"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('profiles')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-200 hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer border border-white/20 bg-[#0c0a18] hover:bg-white/5 flex items-center gap-2 font-rajdhani"
              >
                <BarChart2 className="w-4 h-4 text-purple-400" />
                <span>VIEW MARKETPLACE</span>
              </button>
            </div>

            {/* Terms notice with shield */}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-400 max-w-lg">
              <ShieldCheck className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>
                Services are provided subject to applicable terms, platform policies, service-specific conditions, and verification requirements.
              </span>
            </div>

            {/* 3 Micro Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-300 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-mono text-[10px] tracking-wider uppercase">SECURE PROCESS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-[10px] tracking-wider uppercase">VERIFIED USERS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-mono text-[10px] tracking-wider uppercase">DEDICATED SUPPORT</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic: 3D VIB Monolith on Rock Base */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[400px]">
            {/* Top Right Vertical Labels matching Reference 5 */}
            <div className="absolute right-0 top-0 text-right space-y-1 pointer-events-none select-none z-20">
              <div className="text-[9px] font-mono tracking-[0.25em] text-gray-400 font-bold uppercase">PEOPLE</div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-gray-400 font-bold uppercase">PLATFORMS</div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-gray-400 font-bold uppercase">POSSIBILITIES</div>
            </div>

            {/* Right Slide Indicators matching Reference 5 */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 space-y-2.5 text-right text-[10px] font-mono hidden xl:block z-20 pointer-events-none select-none">
              <div className="text-purple-400 font-bold flex items-center justify-end gap-1">
                <span className="w-3 h-0.5 bg-purple-500 inline-block" />
                <span>01</span>
              </div>
              <div className="text-gray-600">02</div>
              <div className="text-gray-600">03</div>
            </div>

            {/* Monolith Container */}
            <div className="relative w-full max-w-[560px] flex flex-col items-center justify-center">
              {/* Vertical Neon Light Tubes on sides */}
              <div className="absolute -left-2 top-6 bottom-6 w-1 bg-purple-500/60 rounded-full blur-[2px] shadow-[0_0_12px_rgba(168,85,247,0.8)] pointer-events-none hidden sm:block" />
              <div className="absolute -right-2 top-6 bottom-6 w-1 bg-purple-500/60 rounded-full blur-[2px] shadow-[0_0_12px_rgba(168,85,247,0.8)] pointer-events-none hidden sm:block" />

              {/* 3D VIB Monolith Render */}
              <div className="w-full aspect-[4/3] flex items-center justify-center relative z-10">
                <img
                  src="/assets/hires/vib_services_monolith.png"
                  alt="VIB 3D Monolith"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(168,85,247,0.55)] scale-105"
                />
              </div>

              {/* Monolith subtext under rock base matching Reference 5 */}
              <div className="text-[10px] font-mono tracking-[0.22em] text-purple-300 uppercase text-center mt-1 opacity-85">
                A SAFER DIGITAL ECOSYSTEM FOR A STRONGER TOMORROW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR SERVICES: Everything You Need, In One Place (Matching Reference 5) */}
      {/* ========================================================================= */}
      <section id="services-grid" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
              OUR SERVICES
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-rajdhani tracking-wide">
              Everything You Need, In One Place
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md md:text-right">
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
                className="p-5 rounded-xl bg-[#0c0a18] border border-white/[0.08] hover:border-purple-500/50 hover:bg-[#120f26] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[170px] shadow-md relative"
              >
                <div className="space-y-3">
                  {/* Top Row: Icon + Circle Arrow Button */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-500 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-sm text-white group-hover:text-purple-300 transition-colors font-rajdhani tracking-wide">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW VIB WORKS: Simple. Secure. Seamless. (Matching Reference 5)        */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0a18] border border-purple-500/25 space-y-6 shadow-md">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                HOW VIB WORKS
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-rajdhani tracking-wide">
                Simple. Secure. Seamless.
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md md:text-right">
              Get started in just a few steps and experience a structured service process.
            </p>
          </div>

          {/* 4 Steps in an open horizontal timeline matching Reference 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative pt-2">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="space-y-3 relative">
                  {/* Step Number & Icon Row */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-950/60 border border-purple-500/50 text-purple-300 font-extrabold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)] flex-shrink-0 font-rajdhani">
                      {step.num}
                    </div>
                    <div className="text-purple-400">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    {/* Connecting line to next step on desktop */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-purple-500/40 via-purple-500/20 to-transparent ml-2" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-sm text-white font-rajdhani tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRUST & COMPLIANCE: Your Safety Is Our Priority (Matching Reference 5) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
              TRUST &amp; COMPLIANCE
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-rajdhani tracking-wide">
              Your Safety Is Our Priority
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md md:text-right">
            We follow structured policies and security measures to ensure a trusted and reliable experience.
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {compliance.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0c0a18] border border-white/[0.08] space-y-2.5 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-white font-rajdhani tracking-wide">
                    {c.title}
                  </h3>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED LISTINGS: Explore Digital Profiles (Matching Reference 5)      */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0a18] border border-purple-500/25 space-y-5 shadow-md relative">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
                FEATURED LISTINGS
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase font-rajdhani tracking-wide">
                Explore Digital Profiles
              </h2>
            </div>
            <button
              onClick={() => onNavigate('profiles')}
              className="text-xs text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1.5 cursor-pointer font-rajdhani transition-colors"
            >
              <span>View All Listings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Carousel Arrows */}
          <button
            aria-label="Previous Featured Profiles"
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            aria-label="Next Featured Profiles"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#180f2d] border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white flex items-center justify-center z-20 shadow-lg cursor-pointer transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 4 Cards in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredListings.map((l) => (
              <div
                key={l.id}
                className="rounded-xl bg-[#090714] border border-white/[0.08] hover:border-purple-500/50 overflow-hidden flex flex-col justify-between group shadow-md transition-all duration-300"
              >
                {/* 16:9 Banner Preview with Weapon Render */}
                <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#140e28] to-[#090714] p-3 flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
                  {/* Subtle diagonal background stripes */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />

                  {/* Badge */}
                  {l.badge && (
                    <span
                      className={`absolute top-2 left-2 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider font-rajdhani z-10 shadow-sm ${
                        l.badgeColor === 'cyan'
                          ? 'bg-sky-500 text-black'
                          : 'bg-[#f59e0b] text-black'
                      }`}
                    >
                      {l.badge}
                    </span>
                  )}

                  {/* High-Res 3D Weapon Render */}
                  <img
                    src={l.weapon}
                    alt={l.weaponName}
                    className="w-[85%] h-auto object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                </div>

                {/* Card Content */}
                <div className="p-3.5 space-y-2">
                  <div>
                    <div className="font-extrabold text-sm text-white font-rajdhani tracking-wide">
                      {l.code}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{l.sub}</div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                    <div className="font-black text-sm text-white font-rajdhani tracking-wide">
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
                          image: l.weapon,
                          quantity: 1,
                        })
                      }
                      className="p-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/30 transition-colors cursor-pointer shadow-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. READY TO GET STARTED? BOTTOM CTA (Matching Reference 5)                */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d071f] via-[#160a33] to-[#0d071f] border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          {/* Neon Crystal Facets in background */}
          <div className="absolute -left-10 top-0 w-60 h-60 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-10 bottom-0 w-60 h-60 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#e879f9] uppercase font-bold">
              READY TO GET STARTED?
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white font-rajdhani tracking-wide">
              Explore Our Services Today
            </h3>
            <p className="text-xs text-gray-300">
              Join thousands of users who trust VIB for their digital service needs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('services-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg flex items-center gap-2 font-rajdhani relative z-10 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #c026d3 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
            }}
          >
            <span>EXPLORE SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};