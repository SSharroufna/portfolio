
import React from 'react';
import { PROJECTS } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { Project } from '../types';

interface ProjectsProps {
    onNavigate: (page: string) => void;
    onProjectClick?: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate, onProjectClick }) => {
  // Get the most recent project (assuming order in constant file)
  const featuredProject = PROJECTS[0];

  const handleCaseStudyClick = () => {
      if (onProjectClick) {
          onProjectClick(featuredProject);
      } else {
          onNavigate('projects');
      }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
                <h2 className="text-4xl font-bold text-white mb-2">Latest Project</h2>
                <p className="text-purple-400">Highlights from my recent development</p>
            </div>
            {/* Desktop View All Button */}
            <button 
                onClick={() => onNavigate('projects')}
                className="hidden md:flex items-center text-slate-300 hover:text-white transition-colors group"
            >
                View All Projects
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
        
        {/* Featured Project Card */}
        <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl hover:border-purple-500/30 transition-all duration-300 group">
            <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 lg:hidden"></div>
                    <img 
                        src={featuredProject.imageUrl} 
                        alt={featuredProject.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {featuredProject.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                         <button 
                            onClick={handleCaseStudyClick}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-purple-900/20 hover:scale-105"
                        >
                            View Case Study
                        </button>
                        
                        {featuredProject.repoUrl && (
                            <a href={featuredProject.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white px-4 py-2 transition-colors">
                                <GitHubIcon className="w-5 h-5 mr-2" />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
             <button 
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center text-slate-300 hover:text-white transition-colors group"
            >
                View All Projects
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
