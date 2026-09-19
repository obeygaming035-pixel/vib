import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Zap, Clock, ChevronRight, MessageCircle, 
  HelpCircle, AlertTriangle, CheckCircle2, User, Users
} from 'lucide-react';
import { Currency } from '../../types';

interface RankProgressionCalculatorProps {
  currency: Currency;
}

// All available Valorant ranks in order
export interface RankTier {
  id: string;
  name: string;
  group: 'Iron' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Ascendant' | 'Immortal' | 'Radiant';
  division: number; // 1, 2, 3 (0 for Radiant)
  tierIndex: number; // 0 to 24
  icon: string;
  costToNext: number; // Cost to advance to next tier (INR)
  stdDeliveryHours: number; // Standard delivery time in hours
  priorityDeliveryHours: number; // Priority delivery time in hours
}

export const VALORANT_RANKS: RankTier[] = [
  // Iron (₹70 / tier)
  { id: 'iron_1', name: 'Iron 1', group: 'Iron', division: 1, tierIndex: 0, costToNext: 70, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/3.png' },
  { id: 'iron_2', name: 'Iron 2', group: 'Iron', division: 2, tierIndex: 1, costToNext: 70, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/4.png' },
  { id: 'iron_3', name: 'Iron 3', group: 'Iron', division: 3, tierIndex: 2, costToNext: 70, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/5.png' },

  // Bronze (₹150 / tier)
  { id: 'bronze_1', name: 'Bronze 1', group: 'Bronze', division: 1, tierIndex: 3, costToNext: 150, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/6.png' },
  { id: 'bronze_2', name: 'Bronze 2', group: 'Bronze', division: 2, tierIndex: 4, costToNext: 150, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/7.png' },
  { id: 'bronze_3', name: 'Bronze 3', group: 'Bronze', division: 3, tierIndex: 5, costToNext: 150, stdDeliveryHours: 24, priorityDeliveryHours: 3, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/8.png' },

  // Silver (₹200 / tier)
  { id: 'silver_1', name: 'Silver 1', group: 'Silver', division: 1, tierIndex: 6, costToNext: 200, stdDeliveryHours: 24, priorityDeliveryHours: 4, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/9.png' },
  { id: 'silver_2', name: 'Silver 2', group: 'Silver', division: 2, tierIndex: 7, costToNext: 200, stdDeliveryHours: 24, priorityDeliveryHours: 4, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/10.png' },
  { id: 'silver_3', name: 'Silver 3', group: 'Silver', division: 3, tierIndex: 8, costToNext: 200, stdDeliveryHours: 24, priorityDeliveryHours: 4, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/11.png' },

  // Gold (₹300 / tier)
  { id: 'gold_1', name: 'Gold 1', group: 'Gold', division: 1, tierIndex: 9, costToNext: 300, stdDeliveryHours: 48, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/12.png' },
  { id: 'gold_2', name: 'Gold 2', group: 'Gold', division: 2, tierIndex: 10, costToNext: 300, stdDeliveryHours: 48, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/13.png' },
  { id: 'gold_3', name: 'Gold 3', group: 'Gold', division: 3, tierIndex: 11, costToNext: 300, stdDeliveryHours: 48, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/14.png' },

  // Platinum (₹500 / tier)
  { id: 'plat_1', name: 'Platinum 1', group: 'Platinum', division: 1, tierIndex: 12, costToNext: 500, stdDeliveryHours: 72, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/15.png' },
  { id: 'plat_2', name: 'Platinum 2', group: 'Platinum', division: 2, tierIndex: 13, costToNext: 500, stdDeliveryHours: 72, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/16.png' },
  { id: 'plat_3', name: 'Platinum 3', group: 'Platinum', division: 3, tierIndex: 14, costToNext: 500, stdDeliveryHours: 72, priorityDeliveryHours: 6, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/17.png' },

  // Diamond (₹750 / tier)
  { id: 'dia_1', name: 'Diamond 1', group: 'Diamond', division: 1, tierIndex: 15, costToNext: 750, stdDeliveryHours: 72, priorityDeliveryHours: 24, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/18.png' },
  { id: 'dia_2', name: 'Diamond 2', group: 'Diamond', division: 2, tierIndex: 16, costToNext: 750, stdDeliveryHours: 72, priorityDeliveryHours: 24, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/19.png' },
  { id: 'dia_3', name: 'Diamond 3', group: 'Diamond', division: 3, tierIndex: 17, costToNext: 750, stdDeliveryHours: 72, priorityDeliveryHours: 24, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/20.png' },

  // Ascendant (₹1,000 / tier, Asc 3 to Immo 1 is ₹2,000)
  { id: 'asc_1', name: 'Ascendant 1', group: 'Ascendant', division: 1, tierIndex: 18, costToNext: 1000, stdDeliveryHours: 96, priorityDeliveryHours: 48, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/21.png' },
  { id: 'asc_2', name: 'Ascendant 2', group: 'Ascendant', division: 2, tierIndex: 19, costToNext: 1000, stdDeliveryHours: 96, priorityDeliveryHours: 48, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/22.png' },
  { id: 'asc_3', name: 'Ascendant 3', group: 'Ascendant', division: 3, tierIndex: 20, costToNext: 2000, stdDeliveryHours: 120, priorityDeliveryHours: 72, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/23.png' },

  // Immortal (High-tier premium)
  { id: 'immo_1', name: 'Immortal 1', group: 'Immortal', division: 1, tierIndex: 21, costToNext: 3499, stdDeliveryHours: 120, priorityDeliveryHours: 72, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/24.png' },
  { id: 'immo_2', name: 'Immortal 2', group: 'Immortal', division: 2, tierIndex: 22, costToNext: 5499, stdDeliveryHours: 120, priorityDeliveryHours: 72, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/25.png' },
  { id: 'immo_3', name: 'Immortal 3', group: 'Immortal', division: 3, tierIndex: 23, costToNext: 9999, stdDeliveryHours: 360, priorityDeliveryHours: 240, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/26.png' },

  // Radiant
  { id: 'radiant', name: 'Radiant', group: 'Radiant', division: 0, tierIndex: 24, costToNext: 0, stdDeliveryHours: 0, priorityDeliveryHours: 0, icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/27.png' }
];

export const RankProgressionCalculator: React.FC<RankProgressionCalculatorProps> = ({ currency }) => {
  const [mode, setMode] = useState<'solo' | 'duo'>('solo');
  const [queueType, setQueueType] = useState<'standard' | 'priority'>('standard');
  const [fromRankIndex, setFromRankIndex] = useState<number>(6); // Default: Silver 1
  const [toRankIndex, setToRankIndex] = useState<number>(12); // Default: Platinum 1

  // Handle from change
  const handleFromChange = (newFrom: number) => {
    setFromRankIndex(newFrom);
    if (newFrom >= toRankIndex) {
      setToRankIndex(Math.min(newFrom + 1, VALORANT_RANKS.length - 1));
    }
  };

  // Calculate pricing & time
  let basePriceINR = 0;
  let totalStdHours = 0;
  let totalPriorityHours = 0;
  let hasHighTier = false;
  let minRefundPct = 100;

  for (let i = fromRankIndex; i < toRankIndex; i++) {
    const tier = VALORANT_RANKS[i];
    basePriceINR += tier.costToNext;
    totalStdHours += tier.stdDeliveryHours;
    totalPriorityHours += tier.priorityDeliveryHours;

    if (tier.tierIndex >= 20) {
      hasHighTier = true;
      if (tier.tierIndex === 20) minRefundPct = Math.min(minRefundPct, 80);
      else if (tier.tierIndex === 21) minRefundPct = Math.min(minRefundPct, 75);
      else if (tier.tierIndex === 22) minRefundPct = Math.min(minRefundPct, 60);
      else if (tier.tierIndex === 23) minRefundPct = Math.min(minRefundPct, 50);
    }
  }

  // Duo is 2x price as specified in document
  const modeMultiplier = mode === 'duo' ? 2 : 1;
  const queueMultiplier = queueType === 'priority' ? 1.25 : 1;
  const finalPriceINR = Math.round(basePriceINR * modeMultiplier * queueMultiplier);

  // Format delivery time
  const activeHours = queueType === 'priority' ? totalPriorityHours : totalStdHours;
  const deliveryDays = Math.ceil(activeHours / 24);
  const deliveryEstimate = activeHours < 24 
    ? `~${activeHours} Hours` 
    : deliveryDays === 1 
      ? '~1 Day' 
      : `~${deliveryDays} Days`;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const fromRank = VALORANT_RANKS[fromRankIndex];
  const toRank = VALORANT_RANKS[toRankIndex];
  const tiersCount = toRankIndex - fromRankIndex;

  const whatsappMessage = encodeURIComponent(
    `Hello VIB Team, I want to book Rank Progression Assistance:\n` +
    `• Mode: ${mode === 'solo' ? 'Solo (Executive plays)' : 'Duo (Play with Coach)'}\n` +
    `• Queue: ${queueType === 'priority' ? 'Priority Fast-Track' : 'Standard Queue'}\n` +
    `• Current Rank: ${fromRank.name}\n` +
    `• Desired Rank: ${toRank.name} (${tiersCount} Tiers)\n` +
    `• Quoted Price: ₹${finalPriceINR}\n` +
    `• Estimated Time: ${deliveryEstimate}\n` +
    `Please confirm slot availability!`
  );

  return (
    <div className="w-full bg-[#0c0d18] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            100% Human Radiant Specialists • Zero Third-Party Tools
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Competitive Rank Progression <span className="text-purple-400">Assistance</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base mt-1.5 max-w-2xl">
            Tier-based mathematical pricing according to official VIB service guidelines. Guaranteed rank advancement with discreet execution and transparent refund policies.
          </p>
        </div>

        {/* Solo vs Duo Mode Selector */}
        <div className="flex bg-[#131422] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setMode('solo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              mode === 'solo'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            Solo Progression
          </button>
          <button
            onClick={() => setMode('duo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              mode === 'duo'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            Duo with Coach (2×)
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        
        {/* Left 7 Columns: Rank Pickers & Queue Mode */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Dual Rank Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* FROM RANK */}
            <div className="bg-[#111220] border border-white/10 rounded-2xl p-4 sm:p-5 relative group hover:border-purple-500/40 transition-colors">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 block">
                Current Starting Rank
              </label>
              
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={fromRank.icon} 
                  alt={fromRank.name} 
                  className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/9.png'}
                />
                <div>
                  <div className="text-lg font-bold text-white">{fromRank.name}</div>
                  <div className="text-xs text-purple-400 font-mono">Tier Index: {fromRank.tierIndex + 1}/25</div>
                </div>
              </div>

              <select
                value={fromRankIndex}
                onChange={(e) => handleFromChange(Number(e.target.value))}
                className="w-full bg-[#18192c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                {VALORANT_RANKS.slice(0, -1).map((rank) => (
                  <option key={rank.id} value={rank.tierIndex} className="bg-[#111220]">
                    {rank.name} ({rank.group})
                  </option>
                ))}
              </select>
            </div>

            {/* TO RANK */}
            <div className="bg-[#111220] border border-white/10 rounded-2xl p-4 sm:p-5 relative group hover:border-purple-500/40 transition-colors">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 block">
                Target Desired Rank
              </label>

              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={toRank.icon} 
                  alt={toRank.name} 
                  className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/15.png'}
                />
                <div>
                  <div className="text-lg font-bold text-white">{toRank.name}</div>
                  <div className="text-xs text-green-400 font-mono">+{tiersCount} Tier{tiersCount > 1 ? 's' : ''} Climb</div>
                </div>
              </div>

              <select
                value={toRankIndex}
                onChange={(e) => setToRankIndex(Number(e.target.value))}
                className="w-full bg-[#18192c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                {VALORANT_RANKS.filter(r => r.tierIndex > fromRankIndex).map((rank) => (
                  <option key={rank.id} value={rank.tierIndex} className="bg-[#111220]">
                    {rank.name} ({rank.group})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Queue Speed Toggle */}
          <div className="bg-[#111220] border border-white/10 rounded-2xl p-4 sm:p-5">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 block">
              Execution Speed & Priority Queue
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setQueueType('standard')}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                  queueType === 'standard'
                    ? 'bg-purple-900/20 border-purple-500 text-white'
                    : 'bg-[#18192c] border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-bold text-sm">Standard Queue</span>
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">Regular assignment within 1-2 hours</span>
              </button>

              <button
                onClick={() => setQueueType('priority')}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                  queueType === 'priority'
                    ? 'bg-purple-900/20 border-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                    : 'bg-[#18192c] border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-bold text-sm text-purple-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" /> Priority Fast-Track
                  </span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-mono">+25%</span>
                </div>
                <span className="text-xs text-gray-400">Immediate start with top radiant players</span>
              </button>
            </div>
          </div>

          {/* Transparent Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Zero third-party tools or scripts</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>{minRefundPct}% Refund Guarantee</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
              <Users className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Offline mode & VPN privacy</span>
            </div>
          </div>

        </div>

        {/* Right 5 Columns: Summary & WhatsApp CTA */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#16172e] to-[#0f101d] border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Order Summary</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-2.5 py-0.5 rounded-full font-semibold">
                Slots Available Today
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Climb Journey:</span>
                <span className="text-white font-semibold flex items-center gap-1.5">
                  {fromRank.name} <ChevronRight className="w-3.5 h-3.5 text-purple-400" /> {toRank.name}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Tiers to Advance:</span>
                <span className="text-purple-300 font-mono font-bold">{tiersCount} Tier{tiersCount > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Mode:</span>
                <span className="text-white font-medium capitalize">
                  {mode === 'solo' ? 'Solo (Executive Play)' : 'Duo (Play Together 2×)'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Estimated Turnaround:</span>
                <span className="text-yellow-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {deliveryEstimate}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Refund Eligibility:</span>
                <span className="text-green-400 font-mono font-semibold">Up to {minRefundPct}%</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-1">
                Estimated Service Fee
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline gap-2">
                <span>{formatPrice(finalPriceINR)}</span>
                <span className="text-xs text-gray-400 font-normal">incl. all taxes</span>
              </div>
              {hasHighTier && (
                <p className="text-[11px] text-purple-300/80 mt-2 flex items-start gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>High tier order (Ascendant/Immortal). Quoted based on lobby conditions & server.</span>
                </p>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/919181801766?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book on WhatsApp (+91 9181801766)</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
              <span>Email: <strong className="text-gray-300">teamvibofficial@gmail.com</strong></span>
              <span>•</span>
              <span>24/7 Live Desk</span>
            </div>
          </div>

        </div>

      </div>

      {/* Official VIB Fair-Play & Transparency Notice from Document */}
      <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 leading-relaxed bg-[#0e0f1d] p-4 rounded-xl border border-white/5">
        <strong className="text-purple-300 font-semibold">Official VIB Service Guarantee:</strong> All rank progression orders are conducted manually with honest hard work by verified Radiant/Immortal players. We strictly maintain zero third-party application usage or scripts. Customers receive direct progress updates and full refund protection up to Ascendant 2 if requirements are unfulfilled.
      </div>
    </div>
  );
};
