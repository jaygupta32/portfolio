import React from 'react';

interface MissionProps {
  mission: string;
  technologies: string[];
}

export const Mission: React.FC<MissionProps> = ({ mission, technologies }) => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="bg-[#F7F7F8] border border-[#E8E8E8] rounded-3xl p-8 sm:p-12 lg:p-16 text-left space-y-8 shadow-xs">
          {/* Mission Text */}
          <blockquote className="text-[24px] sm:text-[32px] lg:text-[38px] font-medium text-[#111111] leading-[1.25] tracking-tight">
            “{mission}”
          </blockquote>

          {/* Understated Technology Tags */}
          <div className="pt-4 border-t border-[#E8E8E8]/80 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-[#777777]">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="hover:text-[#0A8FFF] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
