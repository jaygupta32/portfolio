import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Activity, 
  Cpu, 
  FileText, 
  Globe, 
  Monitor, 
  Layers, 
  Terminal, 
  ArrowRight, 
  Clock, 
  Database, 
  Workflow,
  Code,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0B132B] text-slate-100 border border-cyan-500/40 rounded-3xl overflow-y-auto shadow-[0_0_50px_rgba(2,6,23,0.9)] no-scrollbar space-y-6 p-6 sm:p-8">
        
        {/* Sticky Close Header */}
        <div className="sticky -top-6 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 z-20 bg-[#0B132B]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.statusTag ? (
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {project.statusTag}
              </span>
            ) : (
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/30">
                {project.category.toUpperCase()}
              </span>
            )}
            <span className="text-xs font-mono font-bold text-slate-400">
              YEAR {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full transition-colors cursor-pointer hover:border-cyan-500/40"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0A8FFF] bg-[#E8F3FF] px-2 py-0.5 rounded">
                FLAGSHIP AUTOMATION PLATFORM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#0A8FFF] mt-1.5 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Banner */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#0F172A] border border-[#E8E8E8] shadow-md group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            {project.statusTag && (
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md border border-white/20 p-3 rounded-xl text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#0A8FFF]" />
                  <span className="text-xs font-mono font-bold">Status: Currently in Active Development</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#0A8FFF]/20 text-[#0A8FFF] px-2.5 py-1 rounded border border-[#0A8FFF]/40">
                  Windows + Extension + Engine
                </span>
              </div>
            )}
          </div>

          {/* Impact Metrics / Quick Stats */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 grid grid-cols-3 gap-4 text-center">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-lg sm:text-2xl font-extrabold font-mono text-[#111111] block tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#111111] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0A8FFF]" />
              Project Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Problem vs. Solution Section */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-2xl p-5 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C53030] flex items-center gap-1.5">
                    <X className="w-4 h-4" />
                    The Problem
                  </span>
                  <p className="text-xs text-[#742A2A] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803D] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    The Solution
                  </span>
                  <p className="text-xs text-[#166534] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* QA & TESTING CASE STUDY SECTIONS (For TrustPay24) */}
          {project.testingRoleContribution && (
            <div className="space-y-8">
              
              {/* My Role & Contribution Prominent Section */}
              <div className="bg-[#F0F7FF] border-2 border-[#0A8FFF]/40 rounded-2xl p-6 space-y-3 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0A8FFF]/20 pb-3">
                  <span className="text-xs font-mono font-extrabold text-[#0A8FFF] uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    MY ROLE & CONTRIBUTION
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-[#0A8FFF] text-white px-2.5 py-0.5 rounded-full uppercase">
                    QA & Test Automation Specialist
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                  {project.testingRoleContribution}
                </p>
                <div className="pt-2 text-[11px] text-[#475569] font-mono flex items-center gap-1.5 bg-white/70 p-2.5 rounded-xl border border-[#D0E6FF]">
                  <span className="text-[#0A8FFF] font-bold">Scope Clarity:</span> Engineering responsibility was focused on Quality Assurance, API validation, UI testing, intent testing, and automated scenario development rather than core gateway architecture development.
                </div>
              </div>

              {/* Layered Testing Strategy Architecture Diagram */}
              {project.testingStrategyLayers && (
                <div className="bg-[#0F172A] text-white rounded-2xl p-6 border border-[#1E293B] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#334155] pb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#38BDF8]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                        TRUSTPAY24 LAYERED TESTING STRATEGY
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#38BDF8]">Full Stack QA Architecture</span>
                  </div>

                  <div className="font-mono text-xs text-center space-y-3 pt-2">
                    <div className="bg-[#1E293B] border border-[#0A8FFF]/50 text-[#38BDF8] py-2 px-4 rounded-xl font-bold inline-block">
                      TRUSTPAY24 PAYMENT PLATFORM
                    </div>

                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-[#0A8FFF]" /></div>

                    <div className="grid grid-cols-3 gap-3 text-[11px]">
                      <div className="bg-[#1E293B] border border-emerald-500/40 p-2.5 rounded-xl">
                        <span className="text-emerald-400 font-bold block">01 — API LAYER</span>
                        <span className="text-[10px] text-slate-400">Endpoints & Payloads</span>
                      </div>
                      <div className="bg-[#1E293B] border border-sky-500/40 p-2.5 rounded-xl">
                        <span className="text-sky-400 font-bold block">02 — UI LAYER</span>
                        <span className="text-[10px] text-slate-400">Forms & Checkout UI</span>
                      </div>
                      <div className="bg-[#1E293B] border border-purple-500/40 p-2.5 rounded-xl">
                        <span className="text-purple-400 font-bold block">03 — INTENT LAYER</span>
                        <span className="text-[10px] text-slate-400">Workflow Transitions</span>
                      </div>
                    </div>

                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-[#0A8FFF]" /></div>

                    <div className="bg-[#1E293B] border border-[#38BDF8] py-2 px-4 rounded-xl text-[#38BDF8] font-bold">
                      ⚡ AUTOMATION PIPELINE ENGINE
                    </div>

                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-[#0A8FFF]" /></div>

                    <div className="grid grid-cols-2 gap-3 text-[11px]">
                      <div className="bg-[#1E293B] border border-amber-500/40 p-2 rounded-xl text-amber-300 font-bold">
                        05 — END-TO-END INTEGRATION
                      </div>
                      <div className="bg-[#1E293B] border border-rose-500/40 p-2 rounded-xl text-rose-300 font-bold">
                        06 — REGRESSION ENGINE
                      </div>
                    </div>

                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-[#0A8FFF]" /></div>

                    <div className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 py-2 px-6 rounded-xl font-bold inline-block">
                      ✓ RESULT VALIDATION & ASSERTION LOGS
                    </div>
                  </div>
                </div>
              )}

              {/* Testing Coverage 6-Grid */}
              {project.testingCoverageCategories && (
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#111111] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#0A8FFF]" />
                    Testing Coverage Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.testingCoverageCategories.map((cat, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-2xl space-y-2 hover:border-[#0A8FFF]/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-extrabold text-[#0A8FFF]">
                            {cat.number}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <h5 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wide">
                          {cat.title}
                        </h5>
                        <p className="text-[11px] text-[#475569] leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Automation Testing Workflow */}
              {project.automationWorkflowSteps && (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#0A8FFF]" />
                    Full Automation Testing Pipeline
                  </span>
                  <p className="text-xs text-[#475569]">
                    I contributed to extensive test automation covering critical payment workflows, API scenarios, UI flows, and regression scenarios.
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-1.5 pt-2">
                    {project.automationWorkflowSteps.map((step, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <div className="bg-white border border-[#CBD5E1] px-2.5 py-1.5 rounded-lg text-center shadow-xs">
                          <span className="text-[9px] font-mono font-bold text-[#0A8FFF] block">STEP 0{sIdx + 1}</span>
                          <span className="text-[10px] font-bold font-mono text-[#0F172A]">{step}</span>
                        </div>
                        {sIdx < arr.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-[#0A8FFF] shrink-0 hidden sm:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* API & UI Testing Breakdown Subsections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* API Testing */}
                {project.apiTestingCoverage && (
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#0A8FFF]" />
                        API Testing Deep-Dive
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        REQUEST → API → RESPONSE → ASSERTIONS → PASS/FAIL
                      </span>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {project.apiTestingCoverage.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#334155] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8FFF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* UI Testing */}
                {project.uiTestingCoverage && (
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-[#0A8FFF]" />
                        UI Testing Deep-Dive
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                        USER ACTION → UI → PAYMENT FLOW → BACKEND → RESULT
                      </span>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {project.uiTestingCoverage.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#334155] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8FFF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Intent Testing Section */}
              {project.intentTestingStates && (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#0A8FFF]" />
                    Payment Intent State Testing
                  </span>
                  <p className="text-xs text-[#475569]">
                    Tested different payment intents and associated state transition workflows to ensure consistent behavior across created, pending, successful, and failed scenarios.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.intentTestingStates.map((state, sIdx) => (
                      <div key={sIdx} className="bg-white border border-[#CBD5E1] p-3 rounded-xl space-y-1 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#64748B] uppercase">{state.title}</span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            state.result === 'SUCCESS' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                          }`}>
                            {state.result}
                          </span>
                        </div>
                        <div className="text-xs font-mono font-bold text-[#0F172A]">
                          {state.flow}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Test Results Visualization Matrix */}
              {project.testingMatrix && (
                <div className="bg-[#090D16] border border-[#1E293B] rounded-2xl p-5 space-y-3 text-white">
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
                    <span className="text-xs font-mono font-bold text-slate-200 uppercase flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      TEST EXECUTION & COVERAGE MATRIX
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded">
                      ALL SUITES PASSED
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 font-mono text-xs">
                    {project.testingMatrix.map((item, mIdx) => (
                      <div key={mIdx} className="bg-[#0F172A] border border-[#1E293B] p-3 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[#38BDF8] font-bold text-[11px]">{item.category}</span>
                          <span className="text-emerald-400 font-extrabold">✓</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Execution Chain Workflow (For Bot Platform) */}
          {project.botWorkflowSteps && (
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#0A8FFF]" />
                Centralized Execution Workflow Chain
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                {project.botWorkflowSteps.map((step, sIdx, arr) => (
                  <React.Fragment key={sIdx}>
                    <div className="bg-white border border-[#CBD5E1] px-3 py-2 rounded-xl text-center shadow-xs">
                      <span className="text-[10px] font-mono font-bold text-[#64748B] block">0{sIdx + 1}</span>
                      <span className="text-xs font-bold font-mono text-[#0F172A]">{step}</span>
                    </div>
                    {sIdx < arr.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#0A8FFF] shrink-0 hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Visual Architecture Diagram (For Bot Platform) */}
          {project.id === 'project-flagship-bot' && (
            <div className="bg-[#0F172A] text-white rounded-2xl p-6 border border-[#1E293B] space-y-4">
              <div className="flex items-center justify-between border-b border-[#334155] pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0A8FFF]" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                    Platform System Architecture Diagram
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Modular Component Pipeline</span>
              </div>

              {/* Architecture Visual Grid */}
              <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-3 pt-2">
                <div className="text-center">
                  <span className="bg-[#0A8FFF]/20 text-[#38BDF8] border border-[#0A8FFF]/40 px-4 py-1.5 rounded-lg inline-block font-bold">
                    USER INTERFACE (Desktop Operator)
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-[#0A8FFF]" />
                </div>

                <div className="text-center">
                  <span className="bg-[#1E293B] border border-[#475569] text-white px-5 py-2 rounded-xl inline-block font-bold shadow-sm">
                    🖥️ WINDOWS DESKTOP APPLICATION CONTROL CENTER
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-[#0A8FFF]" />
                </div>

                {/* Bot & Script Manager row */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#1E293B] border border-[#0A8FFF]/40 p-3 rounded-xl">
                    <span className="text-[#38BDF8] font-bold block">🤖 BOT MANAGER</span>
                    <span className="text-[10px] text-slate-400">Select, Configure, Start/Stop</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#0A8FFF]/40 p-3 rounded-xl">
                    <span className="text-[#38BDF8] font-bold block">📜 SCRIPT MANAGER</span>
                    <span className="text-[10px] text-slate-400">Assign, Config & Workflow</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-[#0A8FFF]" />
                </div>

                {/* Multi-Format Data Input */}
                <div className="bg-[#1E293B] border border-[#334155] p-3 rounded-xl text-center space-y-2">
                  <span className="text-slate-200 font-bold block text-xs">📂 MULTI-FORMAT DATA INGESTION ENGINE</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['PDF', 'CSV', 'TXT', 'XLSX / Excel'].map((fmt, fIdx) => (
                      <span key={fIdx} className="bg-[#0F172A] border border-[#0A8FFF]/50 text-[#38BDF8] px-2.5 py-1 rounded text-[10px] font-bold">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-[#0A8FFF]" />
                </div>

                {/* Backend Processing Engine */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#1E293B] border border-[#334155] p-3 rounded-xl">
                    <span className="text-emerald-400 font-bold block">⚡ BACKEND ENGINE</span>
                    <span className="text-[10px] text-slate-400">Bot Execution & Automation</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] p-3 rounded-xl">
                    <span className="text-purple-400 font-bold block">🌐 BROWSER EXTENSION</span>
                    <span className="text-[10px] text-slate-400">Web DOM Data Extraction</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-[#0A8FFF]" />
                </div>

                <div className="text-center">
                  <span className="bg-[#0A8FFF] text-white font-bold px-6 py-2 rounded-xl inline-block shadow-md">
                    📊 REAL-TIME MONITORING CONSOLE & RESULT LOGS
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Simulated Live Process Console */}
          {project.liveProcessLogs && (
            <div className="bg-[#090D16] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-[#1E293B]/80 px-4 py-3 border-b border-[#334155] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-xs font-mono font-bold text-slate-200">
                    LIVE BACKEND PROCESS MONITORING CONSOLE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">BOT: Data Processing Bot</span>
                </div>
              </div>

              <div className="p-5 space-y-4 font-mono text-xs">
                {/* Live Stats Header */}
                <div className="grid grid-cols-3 gap-2 bg-[#0F172A] p-3 rounded-xl border border-[#1E293B] text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Progress</span>
                    <span className="text-sm font-bold text-[#38BDF8]">68%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Records Parsed</span>
                    <span className="text-sm font-bold text-emerald-400">1,248 / 1,820</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Elapsed Time</span>
                    <span className="text-sm font-bold text-amber-400">00:04:32</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Task: Parsing PDF & Structuring Table Data...</span>
                    <span>68%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1E293B] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0A8FFF] to-emerald-400 w-[68%] transition-all duration-500" />
                  </div>
                </div>

                {/* Live Process Console Output Logs */}
                <div className="space-y-2 pt-2 border-t border-[#1E293B]">
                  {project.liveProcessLogs.map((log, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-2 text-[11px]">
                      {log.completed ? (
                        <span className="text-emerald-400 font-bold">[✓]</span>
                      ) : log.current ? (
                        <span className="text-[#38BDF8] font-bold animate-pulse">[→]</span>
                      ) : (
                        <span className="text-slate-600 font-bold">[ ]</span>
                      )}
                      <span className={log.completed ? "text-slate-300" : log.current ? "text-[#38BDF8] font-semibold" : "text-slate-500"}>
                        {log.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Capabilities Grid (For Bot Platform) */}
          {project.dataPipelineInputs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Multi-Format Data Pipeline */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0A8FFF]" />
                  Multi-Format Data Pipeline
                </span>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Multi-format data ingestion and structured extraction. Accepts raw files and formats them automatically into clean automation payloads.
                </p>
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">Supported Ingestion Formats:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.dataPipelineInputs.current.map((fmt, fIdx) => (
                      <span key={fIdx} className="px-2.5 py-1 bg-[#E8F3FF] text-[#0A8FFF] font-mono text-[11px] font-bold rounded border border-[#D0E6FF]">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Planned Future Ingests:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.dataPipelineInputs.future.map((fmt, fIdx) => (
                      <span key={fIdx} className="px-2 py-0.5 bg-[#F1F5F9] text-[#64748B] font-mono text-[10px] font-bold rounded border border-[#E2E8F0]">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Browser Extension Integration */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0A8FFF]" />
                  Browser Extension Integration
                </span>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Extends platform automation directly into active browser sessions for real-time Web DOM scraping and web data capture.
                </p>
                <div className="bg-white border border-[#CBD5E1] p-3 rounded-xl font-mono text-[10px] text-[#334155] space-y-1">
                  <div className="text-[#0A8FFF] font-bold">EXTENSION DATA EXTRACTION FLOW:</div>
                  <div className="text-slate-600">Browser → Extension → Data Capture → Backend → Bot Workflow → Result</div>
                </div>
              </div>

            </div>
          )}

          {/* Active Development Status Matrix */}
          {project.developmentAreas && (
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#0A8FFF]" />
                Current Development Status Matrix
              </span>
              <p className="text-xs text-[#64748B]">
                Actively building and refining core orchestration modules, data processing pipelines, and real-time process monitoring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {project.developmentAreas.map((area, aIdx) => (
                  <div key={aIdx} className="flex items-center justify-between p-3 bg-white border border-[#E2E8F0] rounded-xl shadow-xs">
                    <span className="text-xs font-bold text-[#0F172A]">{area.area}</span>
                    <span className="text-[10px] font-mono font-bold text-[#0A8FFF] bg-[#E8F3FF] px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#D0E6FF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FFF] animate-pulse" />
                      {area.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Meta Info: Client & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F3F4F5] p-4 rounded-xl border border-[#E8E8E8]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block">
                Project Classification:
              </span>
              <span className="text-xs font-bold text-[#111111]">
                {project.client || 'Proprietary System (In Build)'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block">
                Engineering Role:
              </span>
              <span className="text-xs font-bold text-[#111111]">
                {project.role || 'Lead Automation Engineer'}
              </span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block">
              Platform Technologies & Core Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#E8F3FF] text-[#0A8FFF] text-xs font-mono font-bold rounded-lg border border-[#D0E6FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-3.5 bg-[#111111] text-white text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              Request Similar Automation Build
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

