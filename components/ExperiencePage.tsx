
import React, { useEffect } from 'react';
import { EXPERIENCE } from '../constants';

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen container mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Professional <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          My work experience and contributions to the tech world.
        </p>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              
              <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 md:p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl group-hover:shadow-purple-500/10 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-slate-700/50 p-2 border border-slate-600 flex items-center justify-center overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                            // Fallback if logo fails to load
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=334155&color=fff`;
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-grow w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.company}</h3>
                      <span className="inline-block px-3 py-1 mt-2 md:mt-0 text-sm font-medium text-purple-300 bg-purple-900/30 border border-purple-700/30 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-xl text-purple-400 font-medium mb-4">{exp.role}</h4>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm italic">
                Looking for more details? Check out my <a href="#" className="text-purple-400 hover:underline">LinkedIn</a> or <a href="#" className="text-purple-400 hover:underline">Resume</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
