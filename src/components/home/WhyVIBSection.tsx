import React from 'react';
import { ShieldCheck, Zap, Lock, Headphones, Star, CheckCircle } from 'lucide-react';

export const WhyVIBSection: React.FC = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: '0% Ban Rate Guarantee',
      desc: 'All VP vouchers and boosting workflows use Riot-compliant API channels and private residential VPN connections.',
      color: '#c026d3',
    },
    {
      icon: Zap,
      title: 'Under 3-Minute Delivery',
      desc: 'Our automated fulfillment engine delivers codes and credentials to your dashboard and email within minutes of payment.',
      color: '#38bdf8',
    },
    {
      icon: Lock,
      title: 'Bank-Grade 256-Bit SSL',
      desc: 'All payments are encrypted via certified payment gateways with direct support for UPI, Net Banking, and global credit cards.',
      color: '#34d399',
    },
    {
      icon: Headphones,
      title: 'Round-The-Clock Human Help',
      desc: 'No robotic deflection. Live chat operators and Discord moderators are on standby 24/7/365 to resolve your inquiries.',
      color: '#f59e0b',
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#06080e] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-chakra text-gray-300 uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span>THE TRUSTED STANDARD IN VALORANT GAMING</span>
          </div>
          <h2 className="font-teko uppercase font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
            <span>WHY THOUSANDS OF PLAYERS </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-400">
              CHOOSE VIB 2.0
            </span>
          </h2>
          <p className="font-rajdhani text-base sm:text-lg text-gray-400 mt-3">
            Built by passionate radiant-tier gamers to eliminate scams, lengthy wait times, and inflated reseller markups.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#090d16]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-chakra font-bold text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-rajdhani text-sm text-gray-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-white/5 text-[11px] font-chakra text-gray-400 uppercase tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Metrics Proof Bar */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950/30 via-slate-900/40 to-cyan-950/30 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-teko text-4xl sm:text-5xl font-bold text-white leading-none">
              52,400+
            </div>
            <div className="font-chakra text-xs text-gray-400 uppercase tracking-wider mt-1">
              Completed Orders
            </div>
          </div>
          <div>
            <div className="font-teko text-4xl sm:text-5xl font-bold text-fuchsia-400 leading-none">
              4.9 / 5
            </div>
            <div className="font-chakra text-xs text-gray-400 uppercase tracking-wider mt-1">
              Player Satisfaction
            </div>
          </div>
          <div>
            <div className="font-teko text-4xl sm:text-5xl font-bold text-cyan-400 leading-none">
              &lt; 3 MIN
            </div>
            <div className="font-chakra text-xs text-gray-400 uppercase tracking-wider mt-1">
              Average Delivery
            </div>
          </div>
          <div>
            <div className="font-teko text-4xl sm:text-5xl font-bold text-emerald-400 leading-none">
              25,000+
            </div>
            <div className="font-chakra text-xs text-gray-400 uppercase tracking-wider mt-1">
              Discord Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
