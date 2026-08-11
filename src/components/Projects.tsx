import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles, Terminal, Code, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'dashboard', label: 'AUTOMATION & BOTS' },
    { id: 'saas', label: 'PAYMENT & QA' },
    { id: 'web', label: 'WEB & APPS' }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Projects &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                System Engineering
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md leading-relaxed">
            Real-world software engineering, test automation frameworks, bot orchestration engines, and high-performance payment platform validations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-400/50'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => {
            const isFullWidth = project.isCurrentProject || project.id === 'project-flagship-bot';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer glass-panel rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                  project.isCurrentProject
                    ? 'border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                    : 'border-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]'
                } ${isFullWidth ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Project Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-950 mb-6 border border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg border border-cyan-300/40 flex items-center gap-2 group-hover:scale-105 transition-transform">
                      View Case Study
                      <Eye className="w-4 h-4 text-cyan-200" />
                    </span>
                  </div>

                  {/* Status Tag Badge */}
                  {project.statusTag && (
                    <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-cyan-300 border border-cyan-500/50 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>{project.statusTag}</span>
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md text-slate-300 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Info Container */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2.5 py-1 rounded-lg">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 6).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] font-bold rounded-md group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 bg-slate-900 text-slate-500 font-mono text-[10px] rounded-md">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  {/* View Details Link Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    {project.role && (
                      <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                        Role: {project.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button if any */}
        {filteredProjects.length > 6 && (
          <div className="text-center pt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl font-mono text-xs font-bold text-cyan-300 bg-slate-900 border border-cyan-500/40 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              {showAll ? 'Show Fewer Projects' : `View All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
