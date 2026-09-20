import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, ChevronDown, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { Currency } from '../../types';
import { soundFx } from '../../utils/audio';

export type ClientPage = 'home' | 'profiles' | 'vp' | 'vp-catalog' | 'services' | 'rankup' | 'community' | 'support';

interface HeaderProps {
  currentPage: ClientPage;
  onNavigate: (page: ClientPage) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onSearch: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  currency,
  onCurrencyChange,
  cartCount,
  onOpenCart,
  onOpenAuth,
  soundEnabled,
  onToggleSound,
  onSearch,
}) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNav = (p: ClientPage) => {
    soundFx.playClickSound();
    onNavigate(p);
    setMobileMenuOpen(false);
    setMoreOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      onNavigate('profiles');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07070d]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Hamburger & Brand */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* 3D Metallic VIB Logo */}
          <div
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="relative flex items-center justify-center h-8 sm:h-9">
              <div className="absolute inset-0 bg-purple-600/30 blur-md rounded-full pointer-events-none scale-125" />
              <img
                src="/assets/hires/vib_logo_metallic_hires.png"
                alt="VIB Logo"
                className="h-8 sm:h-9 w-auto object-contain relative z-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/client/vib-logo.png';
                }}
              />
            </div>
          </div>
        </div>

        {/* Center: Exact Navigation Links from Mockups */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-[13px] font-medium text-gray-300">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#8a2be2]/30 text-white font-semibold border border-[#9333ea]/50 shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleNav('vp')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              currentPage === 'vp' || currentPage === 'vp-catalog'
                ? 'bg-[#8a2be2]/30 text-white font-semibold border border-[#9333ea]/50 shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            VP Packs
          </button>

          <button
            type="button"
            onClick={() => handleNav('rankup')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              currentPage === 'rankup'
                ? 'bg-[#8a2be2]/30 text-white font-semibold border border-[#9333ea]/50 shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Rankup Service
          </button>

          {/* More Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                currentPage === 'services' || moreOpen
                  ? 'bg-[#8a2be2]/30 text-white font-semibold border border-[#9333ea]/50'
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              <span>More Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180 text-fuchsia-400' : ''}`} />
            </button>

            {moreOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#0c0d18] border border-fuchsia-500/30 p-2 shadow-2xl backdrop-blur-xl z-50 space-y-1">
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 text-xs text-gray-200 hover:text-fuchsia-300 transition-colors flex flex-col"
                >
                  <span className="font-bold">Ecosystem Overview</span>
                  <span className="text-[10px] text-gray-400">Structured service platform</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 text-xs text-gray-200 hover:text-fuchsia-300 transition-colors flex flex-col"
                >
                  <span className="font-bold">Profile Exchange</span>
                  <span className="text-[10px] text-gray-400">Escrow peer trading</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 text-xs text-gray-200 hover:text-fuchsia-300 transition-colors flex flex-col"
                >
                  <span className="font-bold">Region Conversion</span>
                  <span className="text-[10px] text-gray-400">Server migration support</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 text-xs text-gray-200 hover:text-fuchsia-300 transition-colors flex flex-col"
                >
                  <span className="font-bold">Radiant Coaching</span>
                  <span className="text-[10px] text-gray-400">1-on-1 gameplay masterclasses</span>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNav('community')}
            className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Community
          </button>

          <button
            type="button"
            onClick={() => handleNav('support')}
            className="px-3 py-1 rounded-full hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Support
          </button>
        </nav>

        {/* Right Controls: Search, Cart, Login, Sign Up matching Reference */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Glass Search Input */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center relative rounded-full border border-white/15 bg-black/40 hover:border-white/25 focus-within:border-purple-500/80 focus-within:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all w-48 xl:w-56"
          >
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search profiles, services..."
              className="w-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 bg-transparent focus:outline-none"
            />
          </form>

          {/* Shopping Cart Icon with Counter */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 rounded-full text-gray-300 hover:text-white transition-all hover:bg-white/5 cursor-pointer"
            title="Cart"
          >
            <ShoppingCart className="w-4 h-4 text-gray-300 hover:text-purple-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] flex items-center justify-center text-[9px] font-bold rounded-full bg-purple-600 text-white shadow-[0_0_8px_#9333ea] px-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login Button */}
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-white/15 bg-[#121020] hover:bg-[#1a172e] hover:border-white/25 text-gray-200 transition-colors cursor-pointer hidden sm:block"
          >
            Login
          </button>

          {/* Sign Up Button (solid purple pill matching reference) */}
          <button
            type="button"
            onClick={() => onOpenAuth('signup')}
            className="text-xs font-bold px-4 py-1.5 rounded-lg text-white bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-[0_0_15px_rgba(139,92,246,0.45)] transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Sign Up</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-2">
          <form onSubmit={handleSearchSubmit} className="relative mb-2">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search profiles, services..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none"
            />
          </form>

          <div className="grid grid-cols-2 gap-1.5 text-xs">
            <button
              onClick={() => handleNav('home')}
              className={`p-2 rounded-lg text-left ${currentPage === 'home' ? 'bg-fuchsia-600/30 text-white font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('vp')}
              className={`p-2 rounded-lg text-left ${currentPage === 'vp' || currentPage === 'vp-catalog' ? 'bg-fuchsia-600/30 text-white font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              VP Packs
            </button>
            <button
              onClick={() => handleNav('rankup')}
              className={`p-2 rounded-lg text-left ${currentPage === 'rankup' ? 'bg-fuchsia-600/30 text-white font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              Rankup Service
            </button>
            <button
              onClick={() => handleNav('services')}
              className={`p-2 rounded-lg text-left ${currentPage === 'services' ? 'bg-fuchsia-600/30 text-white font-bold' : 'text-gray-300 hover:bg-white/5'}`}
            >
              More Services
            </button>
            <button
              onClick={() => handleNav('community')}
              className="p-2 rounded-lg text-left text-gray-300 hover:bg-white/5"
            >
              Community
            </button>
            <button
              onClick={() => handleNav('support')}
              className="p-2 rounded-lg text-left text-gray-300 hover:bg-white/5"
            >
              Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};