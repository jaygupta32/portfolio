import React from 'react';
import { Linkedin, Github, ArrowDown, Code2, MapPin, Download } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV } from '../utils/cvGenerator';

interface HeroProps {
  data: PortfolioData;
  onViewProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onViewProjects }) => {
  const { personal, socialLinks, companies } = data;

  return (
    <section id="home" className="pt-10 pb-12 lg:pt-16 lg:pb-20 border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8F3FF] border border-[#D0E6FF] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0A8FFF] animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A8FFF]">
                {personal.status}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-medium tracking-tight text-[#111111] leading-[0.98]">
              Hi, I’m <span className="font-semibold text-[#111111]">Jay Gupta</span>,<br />
              <span className="font-semibold text-[#0A8FFF]">Senior Python</span><br />
              <span className="text-[#111111]">& Application Dev</span>
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-lg font-normal">
              {personal.bio}
            </p>

            {/* Primary Action & Social Links Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => downloadJayGuptaCV(data)}
                className="bg-[#0A8FFF] text-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider rounded-full hover:bg-[#111111] hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>

              <button
                onClick={onViewProjects}
                className="bg-[#111111] text-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                View Portfolio
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#E8F3FF] hover:bg-[#0A8FFF] text-[#0A8FFF] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F3F4F5] hover:bg-[#111111] text-[#111111] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image Composition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch">
              {/* Card A: Developer Portrait */}
              <div className="sm:col-span-1 lg:col-span-6 relative group overflow-hidden rounded-2xl bg-[#F3F4F5] border border-[#E8E8E8] shadow-sm">
                <img
                  src={personal.portraitImage}
                  alt={personal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-[260px] lg:h-[280px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card B: Professional Info Card */}
              <div className="sm:col-span-1 lg:col-span-6 bg-[#F3F4F5] border border-[#E8E8E8] rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#111111] tracking-tight">{personal.name}</h3>
                  <p className="text-xs text-[#777777] flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0A8FFF]" />
                    {personal.location}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E8E8E8] rounded-md text-[11px] font-bold text-[#111111] font-mono">
                    <Code2 className="w-3.5 h-3.5 text-[#0A8FFF]" />
                    {personal.badge}
                  </div>

                  {/* <div className="pt-1 border-t border-[#E8E8E8]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A9A9A] block">
                      Hourly Rate:
                    </span>
                    <span className="text-xs font-bold text-[#0A8FFF] bg-[#E8F3FF] px-2.5 py-1 rounded inline-block mt-1 font-mono">
                      {personal.hourlyRate}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Blue Company Strip Panel */}
            <div className="bg-[#1683E8] rounded-2xl p-5 text-white shadow-sm overflow-hidden">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 block mb-3">
                COMPANIES THAT I WORKED FOR:
              </span>
              <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 no-scrollbar">
                {companies.map((c, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-bold tracking-wider text-white whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {c.logoText}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
