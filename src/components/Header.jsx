import React, { useState, useEffect } from 'react';
import { Linkedin, Menu, X } from 'lucide-react';  // 👈 replaced Github with Linkedin

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
        isScrolled ? 'bg-[#0D0D0D] shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Banner */}
      <div className="w-full bg-[#FF00FF] py-2 shadow-[0_0_20px_#FF00FF] animate-pulse">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#0D0D0D] text-sm font-semibold tracking-wide">
            🚀 Supercharge Your Code with AI-Powered Mentorship!
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-[#F5F5F5] tracking-wide drop-shadow-[0_0_10px_#FF00FF]">
            CodeMentor AI
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/hardik-baviskar22"   // 👈 your actual LinkedIn profile or page link here
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF00FF] hover:bg-[#D100D1] text-[#0D0D0D] px-4 py-2 rounded-lg flex items-center transition-all duration-300 shadow-[0_0_20px_#FF00FF] font-medium"
          >
            <Linkedin size={18} className="mr-2" /> LinkedIn
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-[#F5F5F5] transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#FF00FF] shadow-[0_0_20px_#FF00FF]">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            {/* <a 
              href="#features" 
              className="text-[#F5F5F5] hover:text-[#FF00FF] text-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-[#F5F5F5] hover:text-[#FF00FF] text-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#examples" 
              className="text-[#F5F5F5] hover:text-[#FF00FF] text-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </a> */}
            <a 
              href="https://www.linkedin.com/in/hardik-baviskar22"   // 👈 your LinkedIn link here too
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF00FF] hover:bg-[#D100D1] text-[#0D0D0D] px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_#FF00FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
