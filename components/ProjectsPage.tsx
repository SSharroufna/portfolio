
import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { Project } from '../types';

interface ProjectsPageProps {
    onProjectClick?: (project: Project) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onProjectClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen container mx-auto px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
          Explore my portfolio of applications, solving real-world problems with modern technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
                key={index} 
                onClick={() => onProjectClick && onProjectClick(project)}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
            >
               {/* Image Container */}
               <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
               </div>

               <div className="p-6 flex flex-col flex-grow">
                   <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                   </div>

                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                       {project.title}
                   </h3>
                   
                   <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                       {project.description}
                   </p>

                   <div className="mt-auto flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                       View Case Study
                       <ArrowRightIcon className="w-4 h-4 ml-1" />
                   </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
