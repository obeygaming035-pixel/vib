import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#05070d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-lg shadow-fuchsia-500/20">
                <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                    <path d="M4 6L14 26L18 26L28 6H22L16 19L10 6H4Z" fill="#c026d3" />
                    <circle cx="16" cy="9" r="2.5" fill="#ffffff" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-teko font-bold text-2xl tracking-wider text-white">
                  VIB <span className="text-fuchsia-400">2.0</span>
                </span>
                <span className="block text-[9px] font-chakra tracking-[0.25em] text-gray-400 -mt-1">
                  VALORANT DIGITAL SERVICES
                </span>
              </div>
            </div>

            <p className="font-rajdhani text-sm text-gray-400 max-w-sm mt-4 leading-relaxed">
              The premier destination for Valorant players. Official VP vouchers, verified smurfs & high-elo accounts, radiant coaching, and secure escrow trading.
            </p>

            <div className="flex items-center gap-2 mt-5 text-xs font-chakra text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • 24/7 Service</span>
            </div>
          </div>

          {/* Quick Links 1: Products */}
          <div>
            <h4 className="font-chakra font-bold text-sm text-white uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-rajdhani text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('vp')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  VP Top-Up Selector
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Valorant Accounts Vault
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Rank-Up & Boosting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Pro VOD & Aim Coaching
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Community & Membership */}
          <div>
            <h4 className="font-chakra font-bold text-sm text-white uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-rajdhani text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('trading-club')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Trading Club & Escrow
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('experience')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  VIB Experience VIP Program
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('support')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Help Center & Ticket Desk
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('support')}
                  className="hover:text-fuchsia-300 transition-colors cursor-pointer text-left"
                >
                  Dispute & Escrow Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Certifications */}
          <div>
            <h4 className="font-chakra font-bold text-sm text-white uppercase tracking-wider mb-4">
              Security Guarantee
            </h4>
            <div className="flex flex-col gap-3 text-xs font-rajdhani text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Digital Fulfillment</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Recall Lifetime Policy</span>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="mt-3 inline-flex items-center gap-2 text-xs font-chakra font-bold uppercase tracking-wider text-fuchsia-400 hover:text-fuchsia-300 cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Matching Image 1 "PLAY • IMPROVE • TRADE • BELONG" */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-chakra text-gray-500">
          <div>
            © 2026 VIB 2.0. All Rights Reserved. Not affiliated with or endorsed by Riot Games, Inc.
          </div>

          <div className="tracking-[0.25em] text-gray-400 uppercase font-bold text-center">
            PLAY • IMPROVE • TRADE • BELONG
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
