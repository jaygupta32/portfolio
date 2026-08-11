import React, { useState } from 'react';
import { portfolioData as initialData, PortfolioData, Project } from './data/portfolioData';
import { FuturisticBackground } from './components/FuturisticBackground';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { DeveloperDashboard } from './components/DeveloperDashboard';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CvPreviewModal } from './components/CvPreviewModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleResetData = () => {
    setData(initialData);
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Live Animated Background Canvas */}
      <FuturisticBackground />

      {/* Interactive Custom Glowing Cursor */}
      <CustomCursor />

      {/* Main Page Layout */}
      <div className="relative z-10 space-y-4">
        
        {/* Sticky Header */}
        <Header
          data={data}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          data={data}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCvPreview={() => setIsCvPreviewOpen(true)}
        />

        {/* Key Metrics / Statistics Section */}
        <Statistics />

        {/* Live Developer Telemetry & GitHub Activity Dashboard */}
        <DeveloperDashboard />

        {/* Technical Architecture & Skills */}
        <Skills />

        {/* Featured Case Studies & Systems */}
        <Projects
          projects={data.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Career & Experience Timeline */}
        <Experience
          experiences={data.experience}
        />

        {/* Futuristic Command Center Contact Form */}
        <ContactSection
          data={data}
        />

        {/* Footer */}
        <Footer
          data={data}
        />

      </div>

      {/* Modals & Drawers */}
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

      <CvPreviewModal
        isOpen={isCvPreviewOpen}
        onClose={() => setIsCvPreviewOpen(false)}
        data={data}
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
