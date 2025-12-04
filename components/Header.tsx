
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onNavigate: (page: string, sectionId?: string) => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'about', label: 'About', page: 'home' },
        { id: 'experience', label: 'Experience', page: 'experience' },
        { id: 'projects', label: 'Projects', page: 'projects' },
    ];

    const handleNavClick = (link: { id: string, page: string }) => {
        if (link.page !== 'home') {
            onNavigate(link.page);
        } else {
            onNavigate('home', link.id);
        }
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); onNavigate('home', 'hero'); }} 
                    className="text-xl font-bold text-white tracking-wider"
                >
                    <span className="gradient-text">SS</span>
                </a>
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                         <li key={link.id}>
                            <button 
                                onClick={() => handleNavClick(link)} 
                                className={`transition-colors duration-300 text-sm font-medium ${
                                    currentPage === link.page
                                    ? 'text-purple-400' 
                                    : 'text-slate-300 hover:text-purple-400'
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <button 
                    onClick={() => onNavigate('home', 'contact')} 
                    className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                    Get In Touch
                </button>
            </nav>
        </header>
    );
};

export default Header;