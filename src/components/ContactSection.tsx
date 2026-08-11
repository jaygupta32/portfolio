import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Sparkles, Terminal, ShieldCheck, MapPin } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { personal, socialLinks } = data;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    budget: '$10k - $25k',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Please describe your project or inquiry';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const projectTypes = [
    'Web Application',
    'Test Automation & QA',
    'Bot Management & Scripting',
    'API & Backend System',
    'Full-Stack Architecture'
  ];

  const budgetRanges = ['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSMISSION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Futuristic Command Center
          </h2>
          <p className="text-slate-400 font-mono text-xs max-w-xl mx-auto">
            Ready to deploy your next high-performance web application, automation system, or payment infrastructure? Transmit your project details directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-6 border border-cyan-500/30">
              
              {/* DIRECT EMAIL CHANNEL */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                  DIRECT EMAIL CHANNEL
                </span>
                <div className="flex items-center justify-between gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-mono font-bold text-slate-100 hover:text-cyan-300 transition-colors truncate"
                    >
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-400 block mt-2">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              {/* DIRECT PHONE CHANNEL */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                  DIRECT PHONE CHANNEL
                </span>
                <div className="flex items-center justify-between gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono font-bold text-slate-100 hover:text-cyan-300 transition-colors truncate"
                    >
                      {personal.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-pointer"
                      title="Call Phone Number"
                    >
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                {copiedPhone && (
                  <span className="text-[11px] font-mono text-emerald-400 block mt-2">
                    ✓ Phone number copied to clipboard!
                  </span>
                )}
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                  LOCATION & TIMEZONE
                </span>
                <div className="flex items-center gap-2 text-sm font-mono text-slate-200">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>{personal.location}</span>
                  <span className="text-slate-500">(IST / UTC+5:30)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">
                  NETWORK CHANNELS
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-mono font-bold transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-mono font-bold transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Network</span>
                  </a>
                </div>
              </div>

              <div className="bg-cyan-950/40 border border-cyan-500/30 p-4 rounded-xl font-mono text-[11px] text-cyan-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>GUARANTEED RESPONSE TIME</span>
                </div>
                <p className="text-slate-300">
                  Direct message review within 12 hours. NDA & privacy protected.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Command Center Glass Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-mono font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>TRANSMIT INQUIRY</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ENCRYPTED
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-slate-950/80 border border-cyan-500/40 rounded-2xl space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-mono font-bold text-white">Transmission Successful</h4>
                  <p className="text-xs font-mono text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-bold">{formData.name}</span>! Your project inquiry has been queued for execution. Jay will review and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Web Application', budget: '$10k - $25k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-cyan-300 bg-slate-900 border border-cyan-500/40 hover:bg-slate-800 cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-300 uppercase block">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all ${
                          errors.name ? 'border-rose-500/80' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-rose-400 block">{errors.name}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-300 uppercase block">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@techcorp.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all ${
                          errors.email ? 'border-rose-500/80' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-rose-400 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-300 uppercase block">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-2 text-[11px] font-bold rounded-xl border transition-all cursor-pointer ${
                            formData.projectType === type
                              ? 'bg-cyan-950 text-cyan-300 border-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                              : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-300 uppercase block">Budget Allocation</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2 text-[11px] font-bold rounded-xl border transition-all cursor-pointer text-center ${
                            formData.budget === range
                              ? 'bg-purple-950 text-purple-300 border-purple-400/80 shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                              : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase block">Project Overview / Requirements *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, tech stack preferences, timelines, or scope details..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all ${
                        errors.message ? 'border-rose-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-rose-400 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 border border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message Command</span>
                    <Send className="w-4 h-4 text-cyan-200" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
