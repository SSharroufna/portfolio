
import React from 'react';
import { EXPERIENCE } from '../constants';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface CurrentExperienceProps {
    onNavigate: (page: string) => void;
}

const CurrentExperience: React.FC<CurrentExperienceProps> = ({ onNavigate }) => {
    // Assuming the first item in the array is the current/most recent experience
    const currentJob = EXPERIENCE[0];

    return (
        <section id="current-experience" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2">Where I Work</h2>
                        <p className="text-purple-400">My current role</p>
                    </div>
                    <button 
                        onClick={() => onNavigate('experience')}
                        className="hidden md:flex items-center text-slate-300 hover:text-white transition-colors group"
                    >
                        View Past Experience
                        <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all duration-700"></div>
                    
                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        {/* Logo Column */}
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-700/50 p-4 border border-slate-600 flex items-center justify-center">
                                <img 
                                    src={currentJob.logo} 
                                    alt={`${currentJob.company} logo`} 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentJob.company)}&background=334155&color=fff`;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-1">{currentJob.company}</h3>
                                    <p className="text-xl text-purple-400 font-medium">{currentJob.role}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-block px-4 py-1.5 bg-indigo-900/30 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                                        {currentJob.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {currentJob.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-300 text-lg leading-relaxed">
                                        <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                     <button 
                        onClick={() => onNavigate('experience')}
                        className="inline-flex items-center text-slate-300 hover:text-white transition-colors group"
                    >
                        View Past Experience
                        <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CurrentExperience;