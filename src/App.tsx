import React, { useState } from 'react';
import { portfolioData as initialData, PortfolioData, Project } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { AboutOverview } from './components/AboutOverview';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { CTA } from './components/CTA';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleResetData = () => {
    setData(initialData);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08243b] text-[#111111] antialiased py-0 lg:py-10 px-0 lg:px-6">
      
      {/* Centered White Surface Container */}
      <div className="max-w-[1280px] mx-auto bg-white rounded-none lg:rounded-3xl shadow-2xl overflow-hidden border-0 lg:border border-[#1a3853] transition-all duration-300">
        
        {/* Sticky Header */}
        <Header
          data={data}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          data={data}
          onViewProjects={scrollToProjects}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Mission Statement Container */}
        <Mission
          mission={data.personal.mission}
          technologies={['Python', 'FastAPI', 'Django Framework', 'PostgreSQL', 'MySQL', 'Docker', 'Pandas', 'Selenium']}
        />

        {/* About Overview & Skill Breakdown */}
        <AboutOverview
          data={data}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Featured Projects Grid */}
        <Projects
          projects={data.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services / Capabilities */}
        <Services
          services={data.services}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Working Process */}
        <Process
          process={data.process}
          data={data}
        />

        {/* Experience Timeline */}
        <Experience
          experiences={data.experience}
        />

        {/* Final CTA Banner */}
        <CTA
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Contact Section */}
        <ContactSection
          data={data}
        />

        {/* Footer */}
        <Footer
          data={data}
        />

      </div>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        data={data}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      {/* Floating Customizer Drawer */}
      <CustomizerDrawer
        data={data}
        onUpdateData={(newData) => setData(newData)}
        onResetData={handleResetData}
      />

    </div>
  );
}
