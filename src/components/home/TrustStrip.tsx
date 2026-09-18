import React from 'react';
import { ShieldCheck, Zap, Users, Headphones, CreditCard } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      id: 'safe',
      icon: ShieldCheck,
      title: '100% Safe',
      subtitle: 'Secure Transactions',
      color: '#c026d3',
      bgGlow: 'rgba(192, 38, 211, 0.15)',
    },
    {
      id: 'delivery',
      icon: Zap,
      title: 'Instant Delivery',
      subtitle: 'Fast & Reliable',
      color: '#ec4899',
      bgGlow: 'rgba(236, 72, 153, 0.15)',
    },
    {
      id: 'platform',
      icon: Users,
      title: 'Trusted Platform',
      subtitle: 'Thousands of Happy Players',
      color: '#a855f7',
      bgGlow: 'rgba(168, 85, 247, 0.15)',
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Support',
      subtitle: "We're Always Here",
      color: '#38bdf8',
      bgGlow: 'rgba(56, 189, 248, 0.15)',
    },
    {
      id: 'payment',
      icon: CreditCard,
      title: 'Multiple Payment Options',
      subtitle: 'UPI, Cards & More',
      color: '#34d399',
      bgGlow: 'rgba(52, 211, 153, 0.15)',
    },
  ];

  return (
    <section className="relative w-full border-y border-white/5 bg-[#090d15]/80 backdrop-blur-md z-20 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03] group"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{
                    backgroundColor: item.bgGlow,
                    boxShadow: `0 0 15px ${item.bgGlow}`,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                </div>
                <div className="flex flex-col">
                  <span className="font-chakra font-bold text-sm sm:text-base text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="font-rajdhani text-xs sm:text-sm text-gray-400 leading-tight">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
