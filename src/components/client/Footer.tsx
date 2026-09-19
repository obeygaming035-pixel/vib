import React from 'react';
import { Instagram, Disc as Discord, Youtube, Send, ArrowUp } from 'lucide-react';
import { ClientPage } from './Header';

interface FooterProps {
  onNavigate: (page: ClientPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#06060b] border-t border-white/10 pt-10 pb-8 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Row: Brand & Policy Navigation & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center h-8">
              <div className="absolute inset-0 bg-purple-600/30 blur-md rounded-full pointer-events-none scale-125" />
              <img
                src="/assets/hires/vib_logo_metallic_hires.png"
                alt="VIB Logo"
                className="h-8 w-auto object-contain relative z-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/client/vib-logo.png';
                }}
              />
            </div>
            <div>
              <span className="font-bold text-sm text-white">Digital Services Platform</span>
              <span className="block text-[11px] text-gray-500">Built for a Global Community • MSME Verified</span>
            </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px]">
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <button
              onClick={() => onNavigate('community')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Community Guidelines
            </button>
            <button
              onClick={() => onNavigate('support')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <Discord className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Official VIB Contact & Verification Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2.5 px-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-[11px] text-gray-300">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5">
              <span className="text-gray-400">WhatsApp:</span>
              <strong className="text-white">+91 9181801766</strong>
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-gray-400">Email:</span>
              <strong className="text-white">teamvibofficial@gmail.com</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono font-semibold text-purple-300">
              MSME UDYAM REGISTERED • 100% MANUAL HUMAN ESCROW
            </span>
          </div>
        </div>

        {/* Bottom Row: Made with in India, Legal Disclaimer, Trust Trade Grow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 text-center md:text-left">
          <div className="flex-shrink-0">
            Made with <span className="text-red-500">❤️</span> in India
          </div>

          <div className="max-w-2xl text-[10px] leading-relaxed text-gray-500">
            VIB is an independent digital services platform. We are not affiliated with or endorsed by any game publisher.
            All trademarks, images and brand names are the property of their respective owners and are used for identification purposes only.
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-gray-400 font-medium">Trust • Trade • Grow</span>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};