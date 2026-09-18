import React, { useState } from 'react';
import { Menu, X, Search, Globe, Volume2, VolumeX, ShieldCheck, ArrowRight } from 'lucide-react';
import { Currency, AppPage } from '../types';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  currentThemeColor: string;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCheckout: () => void;
  activePage: AppPage;
  onNavigate: (page: AppPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentThemeColor,
  currency,
  onCurrencyChange,
  soundEnabled,
  onToggleSound,
  onOpenCheckout,
  activePage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppPage; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'vp', label: 'VP', badge: 'LIVE' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'trading-club', label: 'Trading Club' },
    { id: 'support', label: 'Support' },
  ];

  const handleNavClick = (page: AppPage) => {
    soundFx.playClickSound();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10 bg-[#070a10]/90 backdrop-blur-xl transition-colors">
      {/* Left: Hamburger (Mobile) & Brand */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          id="nav-menu-btn"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Navigation Menu"
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* VIB Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8">
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L14 26L18 26L28 6H22L16 19L10 6H4Z"
                fill={activePage === 'vp' ? currentThemeColor : '#c026d3'}
                className="transition-colors duration-500"
              />
              <circle
                cx="16"
                cy="9"
                r="2.5"
                fill="#ffffff"
                className="animate-pulse"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-chakra font-bold text-xl tracking-wider text-white flex items-center gap-1.5 leading-none">
              VIB
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-normal">2.0</span>
            </span>
            <span className="text-[9px] font-rajdhani font-semibold tracking-widest text-gray-400 uppercase">
              Digital Services
            </span>
          </div>
        </div>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-rajdhani font-semibold tracking-wider">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const activeColor = activePage === 'vp' ? currentThemeColor : '#c026d3';

          return (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1.5 transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold font-chakra">
                  {item.badge}
                </span>
              )}
              {isActive && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full transition-all duration-300 shadow-[0_0_8px_currentColor]"
                  style={{
                    backgroundColor: activeColor,
                    color: activeColor,
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Audio Toggle */}
        <button
          id="audio-toggle-btn"
          type="button"
          onClick={() => {
            onToggleSound();
            soundFx.enabled = !soundEnabled;
            if (!soundEnabled) soundFx.playClickSound();
          }}
          title={soundEnabled ? 'Mute Interface Audio' : 'Enable Futuristic UI Audio'}
          className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all bg-white/5 cursor-pointer"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

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
              className={`px-2 py-1 rounded transition-all cursor-pointer ${
                currency === curr
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {curr === 'INR' ? '₹ INR' : curr === 'USD' ? '$ USD' : '€ EUR'}
            </button>
          ))}
        </div>

        {/* Search */}
        <button
          id="nav-search-btn"
          type="button"
          aria-label="Search Catalog"
          onClick={() => onNavigate('marketplace')}
          className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Region */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-rajdhani text-gray-300 px-2 py-1 bg-white/5 rounded border border-white/10">
          <Globe className="w-3.5 h-3.5 text-gray-400" />
          <span>India</span>
        </div>

        {/* Log In */}
        <button
          id="nav-login-btn"
          type="button"
          onClick={onOpenCheckout}
          className="text-xs sm:text-sm font-rajdhani font-semibold px-2.5 py-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          Log In
        </button>

        {/* Get Started Button */}
        <button
          id="nav-get-started-btn"
          type="button"
          onClick={() => {
            soundFx.playClickSound();
            onNavigate('vp');
          }}
          className="text-xs sm:text-sm font-chakra font-bold px-3.5 sm:px-4 py-1.5 rounded-lg text-white transition-all transform active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #c026d3 0%, #9333ea 100%)',
            boxShadow: '0 0 15px rgba(192, 38, 211, 0.4)',
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>Get Started</span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080c14] border-b border-white/10 p-5 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl z-50">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left font-chakra text-base transition-colors ${
                    isActive
                      ? 'bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                </button>
              );
            })}
          </nav>

          {/* Currency Switcher in mobile */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-rajdhani text-gray-300">
            <span>Select Currency:</span>
            <div className="flex gap-2">
              {(['INR', 'USD', 'EUR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => {
                    onCurrencyChange(curr);
                    soundFx.playClickSound();
                  }}
                  className={`px-2.5 py-1 rounded ${
                    currency === curr ? 'bg-fuchsia-600 text-white' : 'bg-white/10 text-gray-300'
                  }`}
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
