import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'mobile', label: 'MOBILE' },
    { id: 'saas', label: 'SAAS' },
    { id: 'ecommerce', label: 'ECOMMERCE' },
    { id: 'dashboard', label: 'DASHBOARD' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-[#E8E8E8]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="badge-blue">PROJECTS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight leading-[1.08]">
              A closer look at some<br />
              <span className="font-semibold">of the projects I’m proud of</span>
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md leading-relaxed">
            Here are some of the featured projects I’ve worked on — each one built with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E8E8E8]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-[#F3F4F5] text-[#777777] hover:text-[#111111] hover:bg-[#E8E8E8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project, idx) => {
            // Highlight flagship project or make project #2 span full width
            const isFullWidth = project.isCurrentProject || idx === 3;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer bg-[#F3F4F5] border rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:border-[#0A8FFF] hover:shadow-xl ${
                  project.isCurrentProject 
                    ? 'border-[#0A8FFF]/50 bg-gradient-to-br from-[#F0F7FF] via-[#F3F4F5] to-white shadow-sm' 
                    : 'border-[#E8E8E8]'
                } ${isFullWidth ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-200 mb-5 border border-[#E8E8E8]/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top img-editorial-hover"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <span className="bg-white text-[#111111] px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                      View Case Study
                      <Eye className="w-3.5 h-3.5 text-[#0A8FFF]" />
                    </span>
                  </div>

                  {/* Top Status Badge */}
                  {project.statusTag ? (
                    <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-md text-white border border-[#0A8FFF]/40 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#0A8FFF] animate-pulse" />
                      <span className="text-[#0A8FFF]">{project.statusTag}</span>
                    </div>
                  ) : project.featured ? (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-white/50 text-[#111111] px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#0A8FFF]" />
                      Featured
                    </div>
                  ) : null}
                </div>

                {/* Project Info Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#0A8FFF] transition-colors flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#0A8FFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h3>
                      </div>
                      <p className="text-xs text-[#777777] font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#9A9A9A] bg-white border border-[#E8E8E8] px-2.5 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#E8E8E8]/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.slice(0, 6).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 bg-[#E8F3FF] text-[#0A8FFF] text-[10px] font-bold font-mono uppercase tracking-wider rounded border border-[#D0E6FF]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="text-[10px] font-mono text-[#777777]">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A8FFF] group-hover:underline flex items-center gap-1">
                      VIEW CASE STUDY →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse All Button */}
        {filteredProjects.length > 5 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#111111] hover:text-[#0A8FFF] bg-[#F3F4F5] hover:bg-[#E8F3FF] border border-[#E8E8E8] px-8 py-3.5 rounded-full transition-all cursor-pointer"
            >
              {showAll ? 'Show Featured Only ↑' : 'Browse All Projects →'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
