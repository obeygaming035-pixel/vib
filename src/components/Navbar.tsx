import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ShoppingBag, Volume2, VolumeX, ShieldCheck, ArrowRight, User } from 'lucide-react';
import { Currency, AppPage } from '../types';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  currentThemeColor?: string;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCheckout: (title?: string, price?: number) => void;
  activePage: AppPage;
  onNavigate: (page: AppPage) => void;
  cartCount?: number;
  onOpenCart?: () => void;
  onSearchQuery?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentThemeColor = '#c026d3',
  currency,
  onCurrencyChange,
  soundEnabled,
  onToggleSound,
  onOpenCheckout,
  activePage,
  onNavigate,
  cartCount = 0,
  onOpenCart,
  onSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreServicesOpen, setMoreServicesOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: AppPage) => {
    soundFx.playClickSound();
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreServicesOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      if (onSearchQuery) onSearchQuery(searchValue.trim());
      onNavigate('profiles');
    }
  };

  const moreServices = [
    { title: 'Profile Exchange', desc: 'Player-to-player trade portal', path: 'services' as AppPage },
    { title: 'Region Support', desc: 'Account migration assistance', path: 'services' as AppPage },
    { title: 'Profile Promotion', desc: 'Featured listing promotion', path: 'services' as AppPage },
    { title: 'Pro Coaching', desc: '1-on-1 radiant coaching', path: 'services' as AppPage },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 flex items-center justify-between border-b border-white/10 bg-[#070a10]/95 backdrop-blur-2xl transition-colors">
      {/* Left: Mobile Toggle & VIB Logo */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          id="nav-menu-btn"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* 3D VIB Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9">
            <img
              src="/assets/client/vib-logo.png"
              alt="VIB Logo"
              className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback SVG if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-chakra font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 leading-none drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                VIB
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-fuchsia-600/30 text-fuchsia-300 border border-fuchsia-500/40">
                2.0
              </span>
            </div>
            <span className="text-[9px] font-rajdhani font-bold tracking-[0.2em] text-gray-400 uppercase">
              Digital Services
            </span>
          </div>
        </div>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-rajdhani font-semibold tracking-wider">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className={`relative py-1.5 transition-all cursor-pointer select-none ${
            activePage === 'home' ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <span>Home</span>
          {activePage === 'home' && (
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-fuchsia-500 rounded-full shadow-[0_0_8px_#c026d3]" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('profiles')}
          className={`relative py-1.5 transition-all cursor-pointer select-none ${
            activePage === 'profiles' || activePage === 'marketplace'
              ? 'text-white font-bold'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <span>Digital Profiles</span>
          {(activePage === 'profiles' || activePage === 'marketplace') && (
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-fuchsia-500 rounded-full shadow-[0_0_8px_#c026d3]" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('vp')}
          className={`relative py-1.5 transition-all cursor-pointer select-none flex items-center gap-1.5 ${
            activePage === 'vp' ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <span>VP Packs</span>
          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
            INSTANT
          </span>
          {activePage === 'vp' && (
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-fuchsia-500 rounded-full shadow-[0_0_8px_#c026d3]" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('rankup')}
          className={`relative py-1.5 transition-all cursor-pointer select-none ${
            activePage === 'rankup' ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <span>Rankup Service</span>
          {activePage === 'rankup' && (
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-fuchsia-500 rounded-full shadow-[0_0_8px_#c026d3]" />
          )}
        </button>

        {/* More Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setMoreServicesOpen((prev) => !prev)}
            className={`py-1.5 flex items-center gap-1 transition-all cursor-pointer select-none ${
              moreServicesOpen || activePage === 'services' ? 'text-fuchsia-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span>More Services</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreServicesOpen ? 'rotate-180 text-fuchsia-400' : ''}`} />
          </button>

          {moreServicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-60 bg-[#0c101a] border border-fuchsia-500/30 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl z-50 cyber-cut">
              <div className="text-[10px] uppercase font-mono tracking-widest text-fuchsia-400 px-2.5 py-1">
                Additional Esports Services
              </div>
              {moreServices.map((srv, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleNavClick(srv.path)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-fuchsia-950/40 hover:border-fuchsia-500/30 border border-transparent transition-all flex flex-col group cursor-pointer"
                >
                  <span className="text-xs font-chakra font-bold text-gray-200 group-hover:text-fuchsia-300">
                    {srv.title}
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-gray-300">
                    {srv.desc}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => handleNavClick('community')}
          className="py-1.5 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer select-none"
        >
          Community
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('support')}
          className="py-1.5 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer select-none"
        >
          Support
        </button>
      </nav>

      {/* Right Controls: Search, Cart, Login, Sign Up */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Bar Input */}
        <form
          onSubmit={handleSearchSubmit}
          className={`hidden md:flex items-center relative rounded-full border transition-all duration-300 ${
            searchFocused
              ? 'border-fuchsia-500 bg-black/70 shadow-[0_0_15px_rgba(192,38,211,0.25)] w-56'
              : 'border-white/10 bg-white/5 hover:border-white/20 w-44'
          }`}
        >
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search profiles, services..."
            className="w-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 bg-transparent focus:outline-none font-rajdhani"
          />
        </form>

        {/* Currency Switcher */}
        <div className="hidden sm:flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5 text-xs font-rajdhani font-bold">
          {(['INR', 'USD', 'EUR'] as Currency[]).map((curr) => (
            <button
              key={curr}
              id={`currency-select-${curr}`}
              type="button"
              onClick={() => {
                onCurrencyChange(curr);
                soundFx.playClickSound();
              }}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                currency === curr
                  ? 'bg-fuchsia-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {curr === 'INR' ? '₹ INR' : curr === 'USD' ? '$ USD' : '€ EUR'}
            </button>
          ))}
        </div>

        {/* Audio Toggle */}
        <button
          type="button"
          onClick={() => {
            onToggleSound();
            soundFx.enabled = !soundEnabled;
            if (!soundEnabled) soundFx.playClickSound();
          }}
          title={soundEnabled ? 'Mute Interface Sound FX' : 'Enable Futuristic UI Sound FX'}
          className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all bg-white/5 cursor-pointer"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

        {/* Cart Icon with badge */}
        <button
          type="button"
          onClick={onOpenCart}
          className="relative p-2 rounded-lg border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all bg-white/5 cursor-pointer"
          title="Shopping Cart"
        >
          <ShoppingBag className="w-4 h-4 text-gray-300 hover:text-fuchsia-300 transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold font-chakra rounded-full bg-fuchsia-500 text-white shadow-[0_0_8px_#c026d3] animate-pulse px-1">
              {cartCount}
            </span>
          )}
        </button>

        {/* Log In */}
        <button
          type="button"
          onClick={() => onOpenCheckout('Login / Account Portal')}
          className="text-xs sm:text-sm font-rajdhani font-semibold px-2.5 py-1 text-gray-300 hover:text-white transition-colors cursor-pointer hidden sm:block"
        >
          Log In
        </button>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={() => onOpenCheckout('Sign Up / Register')}
          className="text-xs sm:text-sm font-chakra font-bold px-3.5 sm:px-4 py-1.5 rounded-full text-white transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #c026d3 50%, #9333ea 100%)',
            boxShadow: '0 0 16px rgba(192, 38, 211, 0.45)',
          }}
        >
          <User className="w-3.5 h-3.5 text-white" />
          <span>Sign Up</span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080c14] border-b border-white/10 p-5 flex flex-col gap-3 shadow-2xl backdrop-blur-2xl z-50">
          <form onSubmit={handleSearchSubmit} className="relative mb-2">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search profiles, services..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500"
            />
          </form>

          <nav className="flex flex-col gap-1.5 font-chakra text-sm">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-left transition-colors ${activePage === 'home' ? 'bg-fuchsia-600/20 text-fuchsia-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('profiles')}
              className={`p-2.5 rounded-lg text-left transition-colors ${activePage === 'profiles' ? 'bg-fuchsia-600/20 text-fuchsia-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              Digital Profiles
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('vp')}
              className={`p-2.5 rounded-lg text-left flex items-center justify-between transition-colors ${activePage === 'vp' ? 'bg-fuchsia-600/20 text-fuchsia-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              <span>VP Packs</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">INSTANT</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('rankup')}
              className={`p-2.5 rounded-lg text-left transition-colors ${activePage === 'rankup' ? 'bg-fuchsia-600/20 text-fuchsia-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              Rankup Service
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('community')}
              className="p-2.5 rounded-lg text-left text-gray-300 hover:bg-white/5"
            >
              Community
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('support')}
              className="p-2.5 rounded-lg text-left text-gray-300 hover:bg-white/5"
            >
              Support
            </button>
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-rajdhani text-gray-300">
            <span>Currency:</span>
            <div className="flex gap-2">
              {(['INR', 'USD', 'EUR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2.5 py-1 rounded ${currency === curr ? 'bg-fuchsia-600 text-white font-bold' : 'bg-white/10 text-gray-300'}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};