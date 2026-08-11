import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Experience as ExperienceType } from '../data/portfolioData';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>CAREER & ENGINEERING TRACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work Experience & Achievements
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md leading-relaxed">
            Proven track record delivering test automation, payment integrations, web applications, and backend systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.current;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={exp.number}
                onClick={() => toggleExpand(idx)}
                className={`cursor-pointer glass-panel rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                  isCurrent
                    ? 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Number + Role + Company */}
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl text-base font-bold font-mono flex items-center justify-center shrink-0 border ${
                        isCurrent
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-300/40 shadow-lg'
                          : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      {exp.number}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {exp.role} <span className="font-mono text-cyan-400 font-normal">@ {exp.company}</span>
                        </h3>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed max-w-2xl font-mono">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Duration & Trigger */}
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                    <div className="text-left md:text-right font-mono">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Duration:
                      </span>
                      <span className="text-xs font-bold text-cyan-300">
                        {exp.period}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                </div>

                {/* Expanded Achievements */}
                {isExpanded && exp.achievements && exp.achievements.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3 font-mono">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      Key Engineering Accomplishments:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
