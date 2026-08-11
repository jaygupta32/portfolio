import React, { useState } from 'react';
import { X, Send, Check, Mail, Copy } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, data }) => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    budget: '$10k - $25k',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Please add details';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-[#E8E8E8] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#777777] hover:text-[#111111] bg-[#F3F4F5] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-1">
          <span className="badge-blue mb-2">LET'S CONNECT</span>
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
            Start a Project with {data.personal.name}
          </h2>
          <p className="text-xs text-[#777777]">
            Fill out the form below or send an email directly to <span className="font-mono text-[#0A8FFF] font-semibold">{data.personal.email}</span>
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">Inquiry Received!</h3>
            <p className="text-xs text-[#666666]">
              Thanks {formData.name}, I’ll review your inquiry and get back to you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-[#111111] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] transition-colors cursor-pointer mt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF]"
                />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF]"
                />
                {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block mb-1">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] cursor-pointer"
              >
                <option value="Full Stack Web App">Full Stack Web Application</option>
                <option value="Frontend Architecture">Frontend Architecture / React/Next.js</option>
                <option value="Mobile App">Mobile Application (React Native)</option>
                <option value="API & Backend">Backend Microservices & Cloud APIs</option>
                <option value="Consulting & Audit">Technical Consulting & Performance Audit</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block mb-1">
                Project Details / Message *
              </label>
              <textarea
                rows={3}
                placeholder="Describe project requirements, timeline, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#0A8FFF] resize-none"
              />
              {errors.message && <span className="text-[10px] text-red-500">{errors.message}</span>}
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl text-[11px] font-semibold text-[#555555] hover:text-[#111111] flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>

              <button
                type="submit"
                className="flex-1 bg-[#111111] text-white py-3 px-6 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#0A8FFF] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Submit Project Request
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
