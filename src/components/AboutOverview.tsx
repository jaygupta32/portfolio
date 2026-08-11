import React, { useState } from 'react';
import { Download, ArrowUpRight, CheckCircle2, Award, GraduationCap, ShieldCheck, Languages, Heart } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV } from '../utils/cvGenerator';

interface AboutOverviewProps {
  data: PortfolioData;
  onOpenContact: () => void;
}

export const AboutOverview: React.FC<AboutOverviewProps> = ({ data, onOpenContact }) => {
  const { personal, stats, skills, skillCategories, education, certifications } = data;
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloaded(true);
    downloadJayGuptaCV();
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="about" className="py-12 lg:py-16 border-b border-[#E8E8E8]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="badge-blue mb-3">ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight">
            Background & Technical Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                {personal.name}
              </h3>
              <p className="text-sm font-semibold text-[#777777] mt-1 flex flex-wrap items-center gap-2">
                <span className="text-[#0A8FFF]">{personal.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FFF]" />
                <span>Based in {personal.location}</span>
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#E8E8E8]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9A9A9A]">
                PROFILE SUMMARY
              </span>
              <p className="text-[15px] text-[#444444] leading-relaxed font-normal">
                {personal.bio}
              </p>
            </div>

            {/* Skill Set Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9A9A9A] block">
                CORE TECHNICAL SKILLS
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#E8F3FF] text-[#0A8FFF] text-[12px] font-semibold rounded-full border border-[#D0E6FF] hover:bg-[#0A8FFF] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-[#F7F7F8] p-4 rounded-xl border border-[#E8E8E8]">
                  <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    {cat.category}
                  </h4>
                  <ul className="space-y-1">
                    {cat.skills.map((s, sIdx) => (
                      <li key={sIdx} className="text-[12px] text-[#666666] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FFF]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications Section */}
            <div className="pt-4 space-y-6">
              
              {/* Education */}
              {education && education.length > 0 && (
                <div className="bg-[#F3F4F5] border border-[#E8E8E8] rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#0A8FFF]" />
                    <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
                      Academic Education
                    </h4>
                  </div>
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E8E8] space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-sm font-bold text-[#111111]">{edu.degree}</h5>
                        <span className="text-[10px] font-mono font-bold bg-[#E8F3FF] text-[#0A8FFF] px-2.5 py-0.5 rounded">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#666666]">{edu.institution}</p>
                      <ul className="space-y-1 pt-1">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-[#555555] flex items-start gap-1.5">
                            <span className="text-[#0A8FFF] font-bold">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div className="bg-[#F3F4F5] border border-[#E8E8E8] rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0A8FFF]" />
                    <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
                      Professional Certifications
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E8E8] space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold bg-[#E8F3FF] text-[#0A8FFF] px-2 py-0.5 rounded inline-block mb-1">
                            {cert.period}
                          </span>
                          <h5 className="text-xs font-bold text-[#111111] leading-snug">{cert.title}</h5>
                          <p className="text-[11px] text-[#777777] mt-0.5">{cert.issuer}</p>
                        </div>
                        <ul className="space-y-0.5 pt-2 border-t border-[#F0F0F0]">
                          {cert.skillsLearned.map((s, sIdx) => (
                            <li key={sIdx} className="text-[11px] text-[#555555] flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-[#0A8FFF]" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Statistics, CV Download & Meta info */}
          <div className="lg:col-span-5 bg-[#F7F7F8] border border-[#E8E8E8] rounded-2xl p-6 lg:p-8 space-y-8">
            
            {/* Key Statistics Grid */}
            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-[#E8E8E8]">
              <div className="px-1">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight block font-mono">
                  {stats.projectsCount}
                </span>
                <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider mt-1 block">
                  Projects & Systems
                </span>
              </div>

              <div className="px-1">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight block font-mono">
                  {stats.clientSatisfaction}
                </span>
                <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider mt-1 block">
                  Satisfaction Rate
                </span>
              </div>

              <div className="px-1">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight block font-mono">
                  {stats.yearsExperience}
                </span>
                <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider mt-1 block">
                  Years Dev Exp
                </span>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#E8E8E8]">
              <button
                onClick={handleDownloadCV}
                className="w-full bg-[#0A8FFF] text-white py-4 px-6 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#111111] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {downloaded ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    Jay Gupta's CV Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download CV ↓
                  </>
                )}
              </button>

              <button
                onClick={onOpenContact}
                className="w-full bg-white text-[#111111] border border-[#E8E8E8] py-3.5 px-6 text-xs font-semibold uppercase tracking-wider rounded-xl hover:border-[#0A8FFF] hover:text-[#0A8FFF] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Start A Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Languages & Hobbies Card */}
            <div className="bg-white p-5 rounded-xl border border-[#E8E8E8] space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] flex items-center gap-1 mb-2">
                  <Languages className="w-3.5 h-3.5 text-[#0A8FFF]" />
                  Languages Spoken:
                </span>
                <div className="flex gap-2">
                  {personal.languages?.map((lang, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#F3F4F5] text-xs font-bold text-[#111111] rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E8E8]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] flex items-center gap-1 mb-2">
                  <Heart className="w-3.5 h-3.5 text-[#0A8FFF]" />
                  Personal Interests & Hobbies:
                </span>
                <ul className="space-y-1">
                  {personal.hobbies?.map((hobby, idx) => (
                    <li key={idx} className="text-xs text-[#555555] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FFF]" />
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code Quality Guarantee */}
            <div className="bg-white p-4 rounded-xl border border-[#E8E8E8] flex items-start gap-3 text-xs text-[#555555]">
              <Award className="w-5 h-5 text-[#0A8FFF] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#111111] block mb-0.5">Production Code Guarantee</span>
                Efficient, reusable, testable Python & web code with optimized database schemas, complete CI containerization, and zero-downtime microservices.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
