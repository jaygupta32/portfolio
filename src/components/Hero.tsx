import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Activity,
  Code,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV } from '../utils/cvGenerator';
import { Globe3D } from './Globe3D';

interface HeroProps {
  data: PortfolioData;
  onOpenContact: () => void;
  onOpenCvPreview?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenContact, onOpenCvPreview }) => {
  // Terminal typing animation state
  const [typedText, setTypedText] = useState('');
  const terminalLines = [
    '$ npm run dev',
    '> JayGupta-Portfolio@2026 dev',
    '> Starting development server...',
    '> Ready in 240ms [Vite 6.2]',
    '> Compiled successfully.'
  ];

  useEffect(() => {
    let currentLine = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const line = terminalLines[currentLine];
      if (!isDeleting) {
        setTypedText(line.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === line.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setTypedText(line.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          currentLine = (currentLine + 1) % terminalLines.length;
        }
      }
      timeout = setTimeout(type, isDeleting ? 30 : 60);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-8 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cinematic Hero Info */}
          <div className="lg:col-span-7 space-y-6 z-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
                AVAILABLE FOR WORK • 2026
              </span>
            </div>

            {/* Large Cinematic Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 glow-text-cyan">{data.personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-slate-300 flex flex-wrap items-center gap-2">
                <span className="text-cyan-400">Full Stack Developer</span>
                <span className="text-slate-600">|</span>
                <span className="text-blue-400">Automation Engineer</span>
                <span className="text-slate-600">|</span>
                <span className="text-purple-400">API & QA Specialist</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I build scalable web applications, automation solutions, payment systems, and intelligent software with modern technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 border border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-sm text-slate-200 bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={() => downloadJayGuptaCV()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono font-bold text-xs text-slate-300 hover:text-cyan-300 bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV ↓</span>
              </button>
            </div>

            {/* Social Links & Quick Badge */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="Email"
                  title={`Email ${data.personal.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${data.personal.phone.replace(/\s+/g, '')}`}
                  className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="Phone"
                  title={`Call ${data.personal.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Holographic Card + 3D Globe + Floating Tech Widgets */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center space-y-6">
            
            {/* 3D Glowing Globe Container */}
            <div className="relative z-10">
              <Globe3D />
            </div>

            {/* Floating Holographic Profile Card */}
            <div className="w-full max-w-md glass-panel rounded-2xl p-5 border border-cyan-500/30 shadow-[0_0_30px_rgba(2,6,23,0.8)] relative z-20 space-y-4 hover:border-cyan-400/60 transition-all">
              
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={data.personal.portraitImage}
                    alt={data.personal.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{data.personal.name}</h3>
                    <span className="text-[10px] font-mono font-extrabold bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Verified
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>India (GMT +5:30)</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for Projects & Automation</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar Inside Card */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 font-mono text-center">
                <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                  <span className="text-sm font-extrabold text-cyan-400 block">10+</span>
                  <span className="text-[9px] text-slate-400 uppercase">Projects</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                  <span className="text-sm font-extrabold text-purple-400 block">4+ Yrs</span>
                  <span className="text-[9px] text-slate-400 uppercase">Experience</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                  <span className="text-sm font-extrabold text-emerald-400 block">95%</span>
                  <span className="text-[9px] text-slate-400 uppercase">Satisfaction</span>
                </div>
              </div>

              {/* Download CV Action in Profile Card */}
              <button
                onClick={() => downloadJayGuptaCV()}
                className="w-full mt-2 py-2.5 px-4 bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 hover:text-white border border-cyan-500/40 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.2)]"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV ↓</span>
              </button>

            </div>

            {/* FLOATING FUTURISTIC TECH WIDGETS */}
            
            {/* Widget 1: System Status Card (Top Left) */}
            <div className="hidden sm:block absolute -top-6 -left-8 glass-panel p-3.5 rounded-xl border border-cyan-500/40 shadow-xl font-mono text-[11px] space-y-1.5 z-30 animate-float-slow max-w-[190px]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                <span className="text-[10px] font-bold text-cyan-400 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" /> SYSTEM STATUS
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="flex justify-between text-slate-300">
                <span>CPU Load:</span> <span className="text-cyan-300 font-bold">12%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>RAM Usage:</span> <span className="text-purple-300 font-bold">1.2 GB</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>DEV MODE:</span> <span className="text-emerald-400 font-bold">ACTIVE</span>
              </div>
              <div className="pt-0.5 text-[9px] text-emerald-400 font-bold text-center bg-emerald-950/60 rounded py-0.5 border border-emerald-500/30">
                ✓ BUILD 100% SUCCESS
              </div>
            </div>

            {/* Widget 2: Animated Typing Terminal Widget (Bottom Right) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 glass-panel p-3.5 rounded-xl border border-blue-500/40 shadow-2xl font-mono text-[11px] text-slate-200 z-30 animate-float-medium w-64 space-y-1">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase">terminal.sh</span>
              </div>
              <div className="text-cyan-400 font-bold min-h-[22px] flex items-center">
                <span>{typedText}</span>
                <span className="w-2 h-3.5 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Widget 3: Code Snippet Widget (Mid Left) */}
            <div className="hidden sm:block absolute top-1/2 -left-12 -translate-y-1/2 glass-panel p-3 rounded-xl border border-purple-500/40 shadow-xl font-mono text-[10px] text-purple-300 z-20 animate-float-slow space-y-1">
              <div className="text-slate-400 flex items-center gap-1 border-b border-slate-800 pb-0.5">
                <Code className="w-3 h-3 text-purple-400" />
                <span>app.ts</span>
              </div>
              <p className="text-slate-300 font-bold">
                <span className="text-purple-400">function</span> <span className="text-cyan-300">buildFuture</span>() &#123;
              </p>
              <p className="pl-2 text-slate-400">
                const skills = [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node"</span>];
              </p>
              <p className="pl-2 text-blue-300">return skills.map(deploy);</p>
              <p className="text-slate-300">&#125;</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
