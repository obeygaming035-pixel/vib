import React from 'react';
import { ShieldCheck, UserCheck, Lock, Scale, FileText, CheckCircle2 } from 'lucide-react';

export const TrustComplianceSection: React.FC = () => {
  const pillars = [
    {
      title: 'Escrow Protection',
      desc: 'Buyer funds are held in secure escrow and only disbursed to the seller once the buyer has verified full credentials and recovery email access.',
      icon: Lock,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Identity Verification',
      desc: 'Sellers undergo rigorous KYC screening, identity cross-referencing, and profile history audits before listing accounts on the platform.',
      icon: UserCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Fraud Prevention',
      desc: 'Automated heuristics scan and analyze account credentials, transaction patterns, and Riot API signals to filter out suspicious activity.',
      icon: ShieldCheck,
      color: 'text-fuchsia-400',
      bg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    },
    {
      title: 'Dispute Resolution',
      desc: 'Dedicated human arbitration specialists review disputes within 2 hours, executing prompt replacements or refunds when warranted.',
      icon: Scale,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Legal Compliance',
      desc: 'Fully aligned with Indian digital consumer protection norms, transparent billing, and secure encrypted payment gateways.',
      icon: FileText,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Integrity & Security Framework</span>
        </div>
        <h2 className="font-chakra font-black text-3xl sm:text-4xl uppercase tracking-wider text-white">
          TRUST & COMPLIANCE
        </h2>
        <p className="text-gray-400 text-sm font-rajdhani">
          How we protect your capital and digital assets at every stage of the transaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#0c101d] border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 space-y-3 cyber-cut ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${p.bg} border flex items-center justify-center ${p.color}`}>
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="font-chakra font-bold text-lg text-white">
                {p.title}
              </h3>

              <p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};