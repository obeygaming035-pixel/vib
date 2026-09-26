import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onGetStarted: () => void;
  onJoinDiscord: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onGetStarted,
  onJoinDiscord,
}) => {
  return (
    <section className="relative w-full py-24 bg-[#070912] border-t border-white/5 overflow-hidden">
      {/* Dynamic Lighting Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-cyan-500/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-chakra text-fuchsia-300 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>JOIN THE NEXT EVOLUTION OF VALORANT COMMERCE</span>
        </div>

        <h2 className="font-teko uppercase font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]">
          <span>YOUR NEXT CLUTCH </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-400">
            STARTS HERE
          </span>
        </h2>

        <p className="font-rajdhani text-base sm:text-xl text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed">
          Level up your skins inventory, secure peak radiant ranks, or find trusted teammates in our thriving community.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={onGetStarted}
            className="px-8 py-4 rounded-xl font-chakra font-bold text-base sm:text-lg tracking-wider text-white flex items-center justify-center gap-2.5 transition-all duration-300 transform active:scale-95 shadow-xl hover:shadow-[0_0_35px_rgba(192,38,211,0.6)] cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, #c026d3 0%, #9333ea 50%, #7c3aed 100%)',
            }}
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onJoinDiscord}
            className="px-7 py-4 rounded-xl font-chakra font-semibold text-base tracking-wider text-gray-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span>Join Discord Lounge</span>
          </button>
        </div>
      </div>
    </section>
  );
};
