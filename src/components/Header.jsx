import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2E1065] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full bg-[#7C3AED] py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm font-medium">
            Supports JavaScript, Python, React, and other popular frameworks! 🚀
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">CodeMentor AI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md flex items-center transition-colors"
          >
            <Github size={18} className="mr-2" /> GitHub
          </a>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#2E1065] border-t border-[#4C1D95]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#examples" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md flex items-center justify-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github size={18} className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;