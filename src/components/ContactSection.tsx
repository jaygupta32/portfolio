import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { personal, socialLinks } = data;
  const [copied, setCopied] = useState(false);
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
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-[#E8E8E8] bg-[#F7F7F8]/40">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="badge-blue mb-3">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight">
            Start a project or<br />
            <span className="font-semibold">say hello</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9A9A9A] block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-3 bg-[#F3F4F5] p-3.5 rounded-xl border border-[#E8E8E8]">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-[#E8E8E8] hover:bg-[#0A8FFF] hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-semibold text-emerald-600 block mt-1.5">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9A9A9A] block mb-2">
                  LOCATION & TIMEZONE
                </span>
                <p className="text-sm font-semibold text-[#111111]">
                  {personal.location} <span className="text-[#777777] font-normal">(IST / UTC+5:30)</span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E8E8E8]">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9A9A9A] block mb-3">
                  CONNECT ON SOCIAL
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl text-xs font-bold text-[#111111] hover:border-[#0A8FFF] hover:text-[#0A8FFF] transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A8FFF]" />
                    LinkedIn
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl text-xs font-bold text-[#111111] hover:border-[#0A8FFF] hover:text-[#0A8FFF] transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 text-[#111111]" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E8E8E8] rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">Message Sent Successfully!</h3>
                <p className="text-xs text-[#666666] max-w-md mx-auto">
                  Thank you, {formData.name}. I have received your message regarding {formData.projectType} and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Web Application', budget: '$10k - $25k', message: '' });
                  }}
                  className="bg-[#111111] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] transition-colors cursor-pointer mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-4 py-3 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] focus:bg-white transition-all"
                    />
                    {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-4 py-3 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] focus:bg-white transition-all"
                    />
                    {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-4 py-3 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Full Stack Web App">Full Stack Web Application</option>
                    <option value="Frontend Interface">Frontend / Design System</option>
                    <option value="Backend & API Integration">Backend & API Integration</option>
                    <option value="Mobile Application">Mobile Application (React Native)</option>
                    <option value="Performance & Code Audit">Performance Optimization & Code Audit</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your goals, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-4 py-3 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] focus:bg-white transition-all resize-none"
                  />
                  {errors.message && <span className="text-[10px] text-red-500">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#111111] text-white py-3.5 px-6 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#0A8FFF] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
