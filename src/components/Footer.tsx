import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV } from '../utils/cvGenerator';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { personal, socialLinks } = data;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] text-white py-12 px-6 lg:px-12 rounded-b-3xl border-t border-gray-800">
      <div className="max-w-[1180px] mx-auto space-y-10">
        
        {/* Top Navigation Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800 pb-10">
          
          {/* Left: Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              MY PORTFOLIO
            </button>
            <button
              onClick={() => downloadJayGuptaCV(data)}
              className="text-[#0A8FFF] hover:text-white font-bold transition-colors cursor-pointer"
            >
              DOWNLOAD CV
            </button>
          </div>

          {/* Center: Monogram Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center text-[#080808] font-bold text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H10V20H4V4Z" fill="currentColor" />
                <path d="M14 4H20V12H14V4Z" fill="currentColor" />
                <path d="M14 16H20V20H14V16Z" fill="currentColor" />
              </svg>
            </div>
            <span className="font-extrabold text-sm tracking-tight text-white">
              {personal.monogram}
            </span>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A8FFF] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A8FFF] transition-colors"
            >
              GITHUB
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-4">
          <p>© {personal.monogram} 2025. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Senior Full Stack Developer • {personal.location}
          </p>
        </div>

      </div>
    </footer>
  );
};
