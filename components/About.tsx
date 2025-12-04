
import React from 'react';
import { SKILLS, EDUCATION } from '../constants';

interface AboutProps {
    onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center text-white mb-4">About Me</h2>
      
      {/* Education Section */}
      <div className="max-w-4xl mx-auto mb-16 px-4 md:px-0">
         <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Education</h3>
         <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg">
            {EDUCATION.map((edu, index) => (
                <div key={index} className="text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                        <span className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full mt-2 md:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-lg text-slate-300 font-medium">{edu.degree}</p>
                    <p className="text-slate-400 mt-2">{edu.details}</p>
                </div>
            ))}
         </div>
      </div>

      {/* Skills Section */}
      <h3 className="text-2xl font-semibold text-center text-purple-400 mb-8">Technical Skills</h3>
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-slate-800 border border-slate-700 text-slate-300 text-base font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 cursor-default">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;