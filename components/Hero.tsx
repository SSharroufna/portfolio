
import React from 'react';
import { PERSONAL_INFO } from '../constants';

// We need to pass the navigation function or context, but since this component is simple
// and used in App.tsx, we can dispatch a custom event or simpler: make App handle it if we modify props.
// However, to keep it clean without prop drilling if I don't want to change App signature too much:
// I will dispatch a custom event on the window object which App can listen to, OR simpler:
// just expect the parent to pass a prop.
// Let's modify App.tsx to pass the navigation prop to Hero, or just use a window event for simplicity in this small app.
// Actually, modifying props is safer.

interface HeroProps {
    onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleViewWork = () => {
    if (onNavigate) {
        onNavigate('projects');
    } else {
        // Fallback if prop not provided (though it will be)
        const projectsSection = document.getElementById('projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-6">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          {PERSONAL_INFO.bio}
        </p>
        <button 
          onClick={handleViewWork}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/20"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
