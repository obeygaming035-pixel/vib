import React from 'react';
import { ShieldCheck, MessageSquare, Repeat, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface TradingClubPreviewProps {
  onJoinDiscord: () => void;
  onOpenEscrowModal: () => void;
}

export const TradingClubPreview: React.FC<TradingClubPreviewProps> = ({
  onJoinDiscord,
  onOpenEscrowModal,
}) => {
  return (
    <section id="trading-club" className="relative w-full py-20 bg-[#090b10] border-t border-white/5 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-amber-900/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Card with Chamber Artwork */}
          <div className="lg:col-span-4 rounded-2xl border border-amber-500/25 bg-gradient-to-b from-[#18130d] via-[#100c07] to-[#070503] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-[10px] font-chakra font-bold tracking-widest uppercase">
                GENTLEMAN'S VAULT
              </span>
              <h3 className="font-teko uppercase text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2 leading-tight">
                HIGH-STAKES ESCROW TRADING
              </h3>
              <p className="font-rajdhani text-sm text-gray-300 mt-2">
                Never trade accounts blindly on social media. VIB certified middlemen secure credentials and hold payment in verified escrow until both parties confirm 100% satisfaction.
              </p>

              <div className="flex flex-col gap-2 mt-4 text-xs font-rajdhani text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Licensed Middleman Holding Escrow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Hardware & Email Cleanliness Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Trade-In Old Accounts Against Premium Upgrades</span>
                </div>
              </div>
            </div>

            {/* Official Chamber Artwork Cutout Anchor */}
            <div className="relative w-full h-[320px] sm:h-[360px] flex items-end justify-center mt-4 pointer-events-none select-none">
              <img
                src="/assets/agents/chamber.png"
                alt="Valorant Chamber Trading Club"
                referrerPolicy="no-referrer"
                className="max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Right Column: Escrow Steps & Community Highlights */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-chakra text-amber-300 uppercase tracking-widest mb-3">
              <Repeat className="w-3.5 h-3.5 text-amber-400" />
              <span>COMMUNITY TRADING CLUB</span>
            </div>
            <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              <span>TRADE & SWAP </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
                WITH ZERO RISK
              </span>
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-gray-300 max-w-2xl mt-3 mb-8">
              Swap accounts with rare knife skins or trade your retired account for direct store credits. Over ₹4.5 Crore in safe trade volume processed to date.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="font-teko text-3xl font-bold text-amber-400">STEP 01</div>
                  <h4 className="font-chakra font-bold text-base text-white mt-1">Initiate Escrow</h4>
                  <p className="font-rajdhani text-xs text-gray-400 mt-1">
                    Buyer and seller agree on terms and create an official ticket inside the VIB trade portal.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="font-teko text-3xl font-bold text-amber-400">STEP 02</div>
                  <h4 className="font-chakra font-bold text-base text-white mt-1">Middleman Lock</h4>
                  <p className="font-rajdhani text-xs text-gray-400 mt-1">
                    Buyer deposits funds while seller transfers login info to the verified VIB staff agent.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="font-teko text-3xl font-bold text-amber-400">STEP 03</div>
                  <h4 className="font-chakra font-bold text-base text-white mt-1">Instant Release</h4>
                  <p className="font-rajdhani text-xs text-gray-400 mt-1">
                    Email access is migrated to the new owner, and escrow funds are instantly released to the seller.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Banner */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-[#17120a] to-[#0d0a06] p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-chakra font-bold text-amber-400 tracking-wider uppercase">
                  <MessageSquare className="w-4 h-4" />
                  <span>25,000+ DISCORD COMMUNITY</span>
                </div>
                <h4 className="font-chakra font-bold text-xl text-white mt-1">
                  Join the Official VIB Trading Lounge
                </h4>
                <p className="font-rajdhani text-sm text-gray-400 mt-1 max-w-md">
                  Browse live peer-to-peer listings, participate in weekly VP giveaways, and find high-elo 5-stack teammates.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={onOpenEscrowModal}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-chakra font-bold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-lg"
                >
                  Start Escrow
                </button>
                <button
                  type="button"
                  onClick={onJoinDiscord}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-chakra font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
