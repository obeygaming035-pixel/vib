import React from 'react';
import { Users, MessageSquare, Trophy, Gift, ArrowRight } from 'lucide-react';

interface CommunityBannerProps {
  onJoinDiscord: () => void;
}

export const CommunityBanner: React.FC<CommunityBannerProps> = ({ onJoinDiscord }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170e2c] via-[#0e1428] to-[#120b22] border border-fuchsia-500/40 relative overflow-hidden shadow-2xl cyber-cut">
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-chakra font-bold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>Official Gaming Hub</span>
            </div>

            <h2 className="font-chakra font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              JOIN INDIA'S LARGEST <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-400">
                VALORANT COMMUNITY
              </span>
            </h2>

            <p className="text-gray-300 font-rajdhani text-sm sm:text-base max-w-xl leading-relaxed">
              Connect with 15,000+ verified players. Participate in daily custom scrims, exclusive VP giveaways, and trade securely in our monitored community lounge.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-chakra text-gray-300">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Weekly Tournaments</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-chakra text-gray-300">
                <Gift className="w-4 h-4 text-fuchsia-400" />
                <span>VP Drops & Giveaways</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-chakra text-gray-300">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>24/7 Verified Escrow Lounge</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <button
              type="button"
              onClick={onJoinDiscord}
              className="px-8 py-4 rounded-2xl font-chakra font-bold text-sm tracking-wider uppercase text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-xl flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #5865F2 0%, #7289da 100%)',
                boxShadow: '0 0 25px rgba(88, 101, 242, 0.4)',
              }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
              </svg>
              <span>Join Discord (15K+)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-gray-400 font-rajdhani mt-2">
              Instant access • No verification fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};