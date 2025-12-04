
import React, { useEffect } from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectDetailPageProps {
    project: Project;
    onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    return (
        <div className="pt-24 pb-20 min-h-screen container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <button 
                    onClick={onBack}
                    className="mb-8 flex items-center text-slate-400 hover:text-white transition-colors group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </button>

                <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                    
                    {/* Image Banner - Horizontal */}
                    <div className="w-full h-64 md:h-96 overflow-hidden border-b border-slate-700/50 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h1>
                             <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wide border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        {/* Header Info */}
                        <div className="mb-10">
                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
                                {project.description}
                            </p>
                            
                            <div className="flex items-center space-x-5">
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-slate-700 hover:bg-slate-600 px-5 py-2.5 rounded-lg transition-colors font-medium">
                                    <GitHubIcon className="w-5 h-5 mr-2" />
                                    View Code
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-colors font-medium shadow-lg shadow-purple-900/20">
                                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                                    Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Detailed Content Section */}
                        <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-slate-700/50">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
                                <h4 className="flex items-center text-xl font-bold text-white mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-500 rounded-full mr-3 text-sm">
                                        !
                                    </span>
                                    The Challenge
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    {project.problem || "Information about the specific problem this project addresses will be added soon."}
                                </p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
                                 <h4 className="flex items-center text-xl font-bold text-white mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-500 rounded-full mr-3 text-sm">
                                        ✓
                                    </span>
                                    The Solution
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    {project.solution || "Details about the solution implemented for this project will be added soon."}
                                </p>
                            </div>
                        </div>
                        
                        {project.technicalDetails && (
                            <div className="mt-10 pt-10 border-t border-slate-700/50">
                                <h4 className="flex items-center text-xl font-bold text-white mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 bg-blue-500/20 text-blue-500 rounded-full mr-3 text-sm">
                                        ⚙
                                    </span>
                                    Technical Implementation
                                </h4>
                                <div className="text-slate-300 leading-relaxed bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 font-mono text-sm md:text-base">
                                    {project.technicalDetails}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
