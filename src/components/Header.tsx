import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV } from '../utils/cvGenerator';

interface HeaderProps {
  data: PortfolioData;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ data, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'projects', 'services', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white border-b border-[#E8E8E8] ${
        isScrolled ? 'shadow-sm backdrop-blur-md bg-white/95' : ''
      }`}
    >
      <div className="max-w-[1240px] mx-auto h-[72px] px-6 lg:px-12 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#111111] rounded-md flex items-center justify-center text-white font-bold text-sm tracking-tighter group-hover:bg-[#0A8FFF] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V20H4V4Z" fill="currentColor" />
              <path d="M14 4H20V12H14V4Z" fill="currentColor" />
              <path d="M14 16H20V20H14V16Z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-extrabold text-lg text-[#111111] tracking-tight group-hover:text-[#0A8FFF] transition-colors">
            {data.personal.monogram}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'about', label: 'ABOUT ME' },
            { id: 'projects', label: 'MY PORTFOLIO' },
            { id: 'services', label: 'SERVICES' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[12px] font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#0A8FFF]'
                  : 'text-[#111111] hover:text-[#0A8FFF]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A8FFF] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => downloadJayGuptaCV(data)}
            className="bg-[#E8F3FF] text-[#0A8FFF] border border-[#D0E6FF] px-4 py-2 text-[12px] font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] hover:text-white hover:border-[#0A8FFF] transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs"
            title="Download Jay Gupta's Resume"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </button>

          <button
            onClick={onOpenContact}
            className="bg-[#111111] text-white px-5 py-2 text-[12px] font-semibold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] hover:shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] hover:text-[#0A8FFF] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E8E8] px-6 py-6 space-y-4 shadow-xl">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'about', label: 'ABOUT ME' },
            { id: 'projects', label: 'MY PORTFOLIO' },
            { id: 'services', label: 'SERVICES' },
            { id: 'experience', label: 'EXPERIENCE' },
            { id: 'contact', label: 'CONTACT' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#0A8FFF] border-b border-gray-100 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => downloadJayGuptaCV(data)}
              className="w-full bg-[#E8F3FF] text-[#0A8FFF] border border-[#D0E6FF] py-3 text-xs font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 hover:bg-[#0A8FFF] hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Full CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-[#111111] text-white py-3 text-xs font-semibold uppercase tracking-wider rounded-full text-center hover:bg-[#0A8FFF] transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
