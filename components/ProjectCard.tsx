
import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02] border border-slate-700 hover:border-purple-600/50">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-purple-900/50 text-purple-300 py-1 px-3 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-6">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-purple-400 transition-colors">
              <GitHubIcon className="w-6 h-6 mr-2" />
              Source Code
            </a>
          )}
          {project.liveUrl && (
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-purple-400 transition-colors">
              <ExternalLinkIcon className="w-6 h-6 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
