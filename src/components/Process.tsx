import React, { useState } from 'react';
import { Search, FileText, Layout, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { ProcessStep, PortfolioData } from '../data/portfolioData';

interface ProcessProps {
  process: ProcessStep[];
  data: PortfolioData;
}

export const Process: React.FC<ProcessProps> = ({ process, data }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string, active: boolean) => {
    const iconClass = `w-5 h-5 ${active ? 'text-white' : 'text-[#0A8FFF]'}`;
    switch (iconName) {
      case 'Search': return <Search className={iconClass} />;
      case 'FileText': return <FileText className={iconClass} />;
      case 'Layout': return <Layout className={iconClass} />;
      case 'Code': return <Code className={iconClass} />;
      case 'Rocket': return <Rocket className={iconClass} />;
      default: return <Code className={iconClass} />;
    }
  };

  return (
    <section id="process" className="py-16 lg:py-24 border-b border-[#E8E8E8]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="badge-blue mb-3">PROCESS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight">
            My working process<br />
            <span className="font-semibold">step by step</span>
          </h2>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Visual Workspace Image & Active Step Spotlight */}
          <div className="lg:col-span-6 bg-[#F3F4F5] border border-[#E8E8E8] rounded-3xl p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gray-900 border border-[#E8E8E8] shadow-sm">
              <img
                src={data.personal.workspaceImage}
                alt="Developer workspace"
                className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A8FFF] bg-white/90 px-2.5 py-1 rounded inline-block w-fit mb-2">
                  CURRENT SPOTLIGHT: STEP {process[activeStep].number}
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  {process[activeStep].title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  {process[activeStep].description}
                </p>
              </div>
            </div>

            {/* Detailed Checklist for Active Step */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0A8FFF]" />
                Key Deliverables for {process[activeStep].title}:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {process[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#555555]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8FFF] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Step Buttons Stack */}
          <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
            {process.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#E8F3FF] border-[#0A8FFF] shadow-md'
                      : 'bg-[#F7F7F8] border-[#E8E8E8] hover:border-[#0A8FFF]/50 hover:bg-white'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#0A8FFF]' : 'bg-white border border-[#E8E8E8]'
                    }`}
                  >
                    {getStepIcon(step.iconName, isActive)}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold font-mono uppercase tracking-widest ${
                        isActive ? 'text-[#0A8FFF]' : 'text-[#9A9A9A]'
                      }`}>
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold tracking-tight ${
                      isActive ? 'text-[#111111]' : 'text-[#333333]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#666666] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
