import React from 'react';
import { Terminal, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-16 pb-12 font-mono">
      
      {/* Thin Glowing Neon Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                &lt;<span className="text-cyan-400">Jay</span>/Gupta&gt;
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Full Stack Developer | Automation Engineer | API & QA Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="Email"
              title={`Email ${data.personal.email}`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${data.personal.phone.replace(/\s+/g, '')}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="Phone"
              title={`Call ${data.personal.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 hover:bg-cyan-900 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 text-center">
          <p>© 2026 Jay Gupta. Engineered with 2026 Cyber Tech Stack.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Status: <span className="text-emerald-400 font-bold">100% Operational</span></span>
            <span>•</span>
            <span className="text-slate-400">Location: <span className="text-cyan-300 font-bold">India</span></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
