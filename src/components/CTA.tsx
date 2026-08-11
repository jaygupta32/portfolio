import React from 'react';
import { ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { downloadJayGuptaCV } from '../utils/cvGenerator';

interface CTAProps {
  onOpenContact: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="relative bg-[#080808] border border-gray-800 rounded-3xl p-10 sm:p-14 lg:p-20 text-center text-white overflow-hidden shadow-2xl">
          
          {/* Subtle Abstract Background Geometric Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90">
              <Sparkles className="w-3 h-3 text-[#0A8FFF]" />
              START A PROJECT OR HIRE JAY!
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Got an idea? Let’s make it happen,
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto font-normal">
              Need a Senior Full-Stack Python Developer? Let’s connect or download my complete resume.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] hover:text-white transition-all duration-300 hover:shadow-xl cursor-pointer group"
              >
                Let’s Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => downloadJayGuptaCV()}
                className="inline-flex items-center gap-2 bg-[#0A8FFF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
