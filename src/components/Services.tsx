import React from 'react';
import { Monitor, Server, Layers, Code, Zap, Lightbulb, ArrowUpRight, Check } from 'lucide-react';
import { Service } from '../data/portfolioData';

interface ServicesProps {
  services: Service[];
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Api': return <Layers className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-[#E8E8E8] bg-[#F7F7F8]/50">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="badge-blue">SERVICES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight leading-[1.08]">
              Offer a range of services<br />
              <span className="font-semibold">to elevate your projects</span>
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md leading-relaxed">
            Everything you need to launch or grow your web product — from front end, back end, APIs, deployment, and optimization, I build clean, scalable solutions with modern tools.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white border border-[#E8E8E8] rounded-2xl p-6 hover:border-[#0A8FFF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A8FFF] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-[#0A8FFF] bg-[#E8F3FF] px-2.5 py-1 rounded">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F3F4F5] text-[#111111] group-hover:bg-[#0A8FFF] group-hover:text-white flex items-center justify-center transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#0A8FFF] transition-colors flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#0A8FFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description */}
                <p className="text-xs text-[#666666] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="pt-3 border-t border-[#E8E8E8]/60 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] text-[#444444]">
                      <Check className="w-3 h-3 text-[#0A8FFF] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-[#E8E8E8]/60 flex flex-wrap gap-1.5">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#F3F4F5] text-[#555555] text-[10px] font-mono font-semibold rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-white border border-[#E8E8E8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-lg font-bold text-[#111111]">Need a custom technical service or solution?</h4>
            <p className="text-xs text-[#777777] mt-1">Let’s discuss your architecture, requirements, and project timeline.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-[#111111] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
