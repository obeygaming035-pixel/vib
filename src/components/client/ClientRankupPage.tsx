import React from 'react';
import { ShieldCheck, Zap, Lock, Clock, CheckCircle, ChevronRight, Award, MessageSquare } from 'lucide-react';
import { Currency } from '../../types';
import { ClientPage } from './Header';
import { RankProgressionCalculator } from '../home/RankProgressionCalculator';

interface ClientRankupPageProps {
  currency: Currency;
  onNavigate: (page: ClientPage) => void;
  onOpenCheckout: (title: string, price: number) => void;
}

export const ClientRankupPage: React.FC<ClientRankupPageProps> = ({
  currency,
  onNavigate,
  onOpenCheckout,
}) => {
  return (
    <div className="w-full bg-[#05040a] text-white selection:bg-purple-600 selection:text-white space-y-12 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO HEADER                                                            */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden min-h-[260px] sm:min-h-[300px] flex items-center pt-8 pb-4 border-b border-white/5">
        {/* Atmospheric purple glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[200px] bg-fuchsia-800/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-purple-400 font-semibold">Rankup Service</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Verified Boosting &amp; Deranking Service</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none font-rajdhani">
              COMPETITIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500">RANK-UP SERVICE</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Achieve your dream rank with verified Radiant &amp; Immortal boosters. 100% manual gameplay, offline mode protection, and instant direct WhatsApp coordination.
            </p>
          </div>

          {/* 4 Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/10 flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">Offline Mode</div>
                <div className="text-[10px] text-gray-400">Boost completely invisible to friends</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/10 flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">VPN Encryption</div>
                <div className="text-[10px] text-gray-400">Matched to your exact location</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/10 flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">Radiant Boosters</div>
                <div className="text-[10px] text-gray-400">Top 500 verified players only</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0c18] border border-white/10 flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">Fast Completion</div>
                <div className="text-[10px] text-gray-400">Express queue available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE RANK PROGRESSION CALCULATOR                                 */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <RankProgressionCalculator currency={currency} />
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW IT WORKS & FAQ                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-rajdhani">
            HOW VIB RANK-UP WORKS
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Transparent, secure, and monitored from order placement to rank delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-black text-base flex items-center justify-center font-rajdhani">
              01
            </div>
            <h3 className="font-bold text-base text-white font-rajdhani">Select Ranks &amp; Queue</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Choose your current tier and target tier. Select Solo (booster plays on your account) or Duo (play alongside a Radiant booster).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-black text-base flex items-center justify-center font-rajdhani">
              02
            </div>
            <h3 className="font-bold text-base text-white font-rajdhani">Direct WhatsApp Booking</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Click Book on WhatsApp to connect with our dispatch team. Submit payment proof via UPI/QR and receive your assigned booster details.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0a18] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-black text-base flex items-center justify-center font-rajdhani">
              03
            </div>
            <h3 className="font-bold text-base text-white font-rajdhani">Track &amp; Enjoy Your Rank</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Receive live game-by-game updates. Once the target rank is locked in, change your password and enjoy your new competitive rank.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
