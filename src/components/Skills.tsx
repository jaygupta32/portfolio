import React from 'react';
import {
  Layout,
  Server,
  Cloud,
  Wrench,
  Code2,
  Database,
  Layers,
  Terminal,
  Cpu,
  Sparkles
} from 'lucide-react';

interface SkillCategoryData {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  glowColor: string;
  borderColor: string;
  skills: { name: string; tag?: string }[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategoryData[] = [
    {
      title: 'Frontend',
      subtitle: 'Modern Web & UI Development',
      icon: Layout,
      glowColor: 'shadow-[0_0_25px_rgba(59,130,246,0.25)]',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      skills: [
        { name: 'HTML', tag: 'Core' },
        { name: 'CSS', tag: 'Styling' },
        { name: 'JavaScript', tag: 'ES6+' },
        { name: 'TypeScript', tag: 'Typed' },
        { name: 'React', tag: 'Library' },
        { name: 'Next.js', tag: 'SSR' },
        { name: 'Tailwind', tag: 'Utility' },
        { name: 'Material UI', tag: 'Design' }
      ]
    },
    {
      title: 'Backend',
      subtitle: 'Scalable APIs & Microservices',
      icon: Server,
      glowColor: 'shadow-[0_0_25px_rgba(139,92,246,0.25)]',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      skills: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express', tag: 'Framework' },
        { name: 'MongoDB', tag: 'NoSQL' },
        { name: 'MySQL', tag: 'SQL' },
        { name: 'REST APIs', tag: 'Architecture' },
        { name: 'GraphQL', tag: 'Query' },
        { name: 'Socket.io', tag: 'Real-time' },
        { name: 'FastAPI', tag: 'Python' }
      ]
    },
    {
      title: 'Cloud & Database',
      subtitle: 'DevOps & Cloud Infrastructure',
      icon: Cloud,
      glowColor: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      skills: [
        { name: 'Firebase', tag: 'BaaS' },
        { name: 'AWS', tag: 'Cloud' },
        { name: 'Vercel', tag: 'Deploy' },
        { name: 'Netlify', tag: 'Hosting' },
        { name: 'Cloudinary', tag: 'Media' },
        { name: 'Docker', tag: 'Container' }
      ]
    },
    {
      title: 'Tools',
      subtitle: 'Workflow, Testing & Design',
      icon: Wrench,
      glowColor: 'shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
      skills: [
        { name: 'Git', tag: 'VCS' },
        { name: 'GitHub', tag: 'Code' },
        { name: 'VS Code', tag: 'IDE' },
        { name: 'Figma', tag: 'UI/UX' },
        { name: 'Postman', tag: 'API' },
        { name: 'Cypress', tag: 'QA' },
        { name: 'ESLint', tag: 'Linter' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL ARCHITECTURE & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-slate-400 font-mono text-xs max-w-xl mx-auto">
            Comprehensive skill set spanning front-end engineering, back-end API development, cloud deployment, and test automation tools.
          </p>
        </div>

        {/* 4 Glowing Skill Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${cat.borderColor} ${cat.glowColor} space-y-5`}
              >
                {/* Card Title Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-slate-600" />
                </div>

                {/* Glowing Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/pill relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-mono font-medium hover:border-cyan-400/60 hover:text-white hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover/pill:bg-cyan-300 group-hover/pill:scale-125 transition-all" />
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded border border-slate-700/60 group-hover/pill:text-cyan-300">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
