
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import Header from './components/Header';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import CurrentExperience from './components/CurrentExperience';
import { Project } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    
    // If navigating to home with a section ID, handle scrolling
    if (page === 'home') {
        if (sectionId) {
            // Short timeout to allow render if switching pages
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 10);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
      switch (currentPage) {
          case 'experience':
              return <ExperiencePage />;
          case 'projects':
              return <ProjectsPage onProjectClick={handleProjectClick} />;
          case 'project-detail':
              return selectedProject ? (
                  <ProjectDetailPage 
                      project={selectedProject} 
                      onBack={() => navigateTo('projects')} 
                  />
              ) : (
                  <ProjectsPage onProjectClick={handleProjectClick} />
              );
          case 'home':
          default:
              return (
                  <>
                      <Hero onNavigate={navigateTo} />
                      <About onNavigate={navigateTo} />
                      <CurrentExperience onNavigate={navigateTo} />
                      <Projects onNavigate={navigateTo} onProjectClick={handleProjectClick} />
                      <Contact />
                  </>
              );
      }
  };

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 flex-grow">
        <Header onNavigate={navigateTo} currentPage={currentPage} />
        <main>
            {renderContent()}
        </main>
      </div>
       <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;
