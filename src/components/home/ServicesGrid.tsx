import React from 'react';
import {
  UserCheck,
  Zap,
  TrendingUp,
  RefreshCw,
  Globe2,
  Megaphone,
  GraduationCap,
  Grid,
  ArrowRight,
} from 'lucide-react';
import { AppPage } from '../../types';
import { soundFx } from '../../utils/audio';

interface ServicesGridProps {
  onNavigate: (page: AppPage) => void;
  onOpenServiceModal?: (title: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onNavigate,
  onOpenServiceModal,
}) => {
  const services = [
    {
      id: 'profiles',
      title: 'Digital Profiles',
      subtitle: 'Verified & Secure',
      icon: UserCheck,
      color: 'from-purple-500/20 to-fuchsia-500/10',
      border: 'hover:border-fuchsia-500/50',
      iconColor: 'text-fuchsia-400',
      action: () => onNavigate('profiles'),
    },
    {
      id: 'vp',
      title: 'VP Packs',
      subtitle: 'Flexible Plans',
      icon: Zap,
      color: 'from-amber-500/20 to-yellow-500/10',
      border: 'hover:border-amber-500/50',
      iconColor: 'text-amber-400',
      action: () => onNavigate('vp'),
    },
    {
      id: 'rankup',
      title: 'Rankup Service',
      subtitle: 'Boost Your Progress',
      icon: TrendingUp,
      color: 'from-rose-500/20 to-pink-500/10',
      border: 'hover:border-rose-500/50',
      iconColor: 'text-rose-400',
      action: () => onNavigate('rankup'),
    },
    {
      id: 'exchange',
      title: 'Profile Exchange',
      subtitle: 'Trade Safely',
      icon: RefreshCw,
      color: 'from-blue-500/20 to-cyan-500/10',
      border: 'hover:border-cyan-500/50',
      iconColor: 'text-cyan-400',
      action: () => onOpenServiceModal ? onOpenServiceModal('Profile Exchange Trade Portal') : onNavigate('services'),
    },
    {
      id: 'region',
      title: 'Region Support',
      subtitle: 'More Possibilities',
      icon: Globe2,
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-400',
      action: () => onOpenServiceModal ? onOpenServiceModal('Region Support & Server Transfer') : onNavigate('services'),
    },
    {
      id: 'promotion',
      title: 'Profile Promotion',
      subtitle: 'Get Noticed',
      icon: Megaphone,
      color: 'from-violet-500/20 to-purple-500/10',
      border: 'hover:border-violet-500/50',
      iconColor: 'text-violet-400',
      action: () => onOpenServiceModal ? onOpenServiceModal('Profile Promotion & Listing Boost') : onNavigate('services'),
    },
    {
      id: 'coaching',
      title: 'Coaching',
      subtitle: 'Learn & Improve',
      icon: GraduationCap,
      color: 'from-indigo-500/20 to-blue-500/10',
      border: 'hover:border-indigo-500/50',
      iconColor: 'text-indigo-400',
      action: () => onOpenServiceModal ? onOpenServiceModal('Radiant 1-on-1 Coaching') : onNavigate('services'),
    },
    {
      id: 'more',
      title: 'More Services',
      subtitle: 'Explore All',
      icon: Grid,
      color: 'from-gray-500/20 to-slate-500/10',
      border: 'hover:border-gray-400/50',
      iconColor: 'text-gray-300',
      action: () => onNavigate('services'),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              onClick={() => {
                soundFx.playClickSound();
                srv.action();
              }}
              className={`p-4 sm:p-5 rounded-2xl bg-[#0c101d] border border-white/10 ${srv.border} transition-all duration-300 cursor-pointer group flex items-center justify-between shadow-lg hover:shadow-[0_0_20px_rgba(192,38,211,0.15)] hover:-translate-y-0.5 cyber-cut`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${srv.color} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${srv.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-chakra font-bold text-sm sm:text-base text-white truncate group-hover:text-fuchsia-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-rajdhani truncate">
                    {srv.subtitle}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-fuchsia-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 hidden sm:block" />
            </div>
          );
        })}
      </div>
    </section>
  );
};