import React from 'react';
import { Briefcase, Award, Clock, GitCommit, ShieldCheck, Sparkles } from 'lucide-react';

export const Statistics: React.FC = () => {
  const statItems = [
    {
      value: '10+',
      label: 'Projects',
      subtitle: 'Completed Applications & Systems',
      icon: Briefcase,
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]'
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      subtitle: 'High Precision Quality & QA',
      icon: Award,
      color: 'from-blue-500 to-purple-500',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
    },
    {
      value: '4+',
      label: 'Years Experience',
      subtitle: 'Full Stack & Automation',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]'
    },
    {
      value: '100+',
      label: 'Commits',
      subtitle: 'Version Controlled Quality Code',
      icon: GitCommit,
      color: 'from-emerald-400 to-teal-500',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'
    },
    {
      value: '24/7',
      label: 'Problem Solver',
      subtitle: 'Dedicated Engineering Mindset',
      icon: ShieldCheck,
      color: 'from-amber-400 to-rose-500',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
    }
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {statItems.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${stat.glow}`}
              >
                {/* Background ambient glow */}
                <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all" />

                <div className="space-y-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color} block`}>
                      {stat.value}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {stat.label}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
