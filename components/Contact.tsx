
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out.
      </p>
      
      <div className="flex flex-col items-center gap-4 mb-12">
        <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/20"
        >
            Say Hello
        </a>
      </div>

      <div className="flex justify-center space-x-6">
        <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <GitHubIcon className="w-8 h-8" />
        </a>
        <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <LinkedInIcon className="w-8 h-8" />
        </a>
      </div>
      <footer className="mt-20 pt-8 border-t border-slate-800">
        <p className="text-slate-500">Designed & Built by {PERSONAL_INFO.name}</p>
      </footer>
    </section>
  );
};

export default Contact;
