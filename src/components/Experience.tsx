import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Building2, CheckCircle } from 'lucide-react';
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
    <section id="experience" className="py-16 lg:py-24 border-b border-[#E8E8E8]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="badge-blue">EXPERIENCE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight leading-[1.08]">
              A yearly snapshot of my<br />
              <span className="font-semibold">creative growth</span>
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md leading-relaxed">
            An annual summary that communicates my creative journey and development throughout the year.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.current;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={exp.number}
                onClick={() => toggleExpand(idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                  isCurrent
                    ? 'bg-[#E8F3FF] border-[#0A8FFF] shadow-md'
                    : 'bg-[#F7F7F8] border-[#E8E8E8] hover:border-[#0A8FFF]/40 hover:bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Number + Role + Company */}
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl text-lg font-bold font-mono flex items-center justify-center shrink-0 ${
                        isCurrent
                          ? 'bg-[#0A8FFF] text-white shadow-sm'
                          : 'bg-white border border-[#E8E8E8] text-[#111111]'
                      }`}
                    >
                      {exp.number}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                          {exp.role} <span className="font-normal text-[#777777]">{exp.company}</span>
                        </h3>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 bg-[#0A8FFF] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#555555] leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Job Duration & Expand Trigger */}
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E8E8E8]">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A9A9A] block">
                        Job Duration:
                      </span>
                      <span className="text-sm font-bold font-mono text-[#111111]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#111111]">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#0A8FFF]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#777777]" />
                      )}
                    </div>
                  </div>

                </div>

                {/* Expanded Key Achievements */}
                {isExpanded && exp.achievements && (
                  <div className="mt-6 pt-6 border-t border-[#E8E8E8] space-y-3 animate-fadeIn">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A8FFF] block">
                      Key Highlights & Impact:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0A8FFF] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
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
