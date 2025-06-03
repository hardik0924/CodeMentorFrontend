import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  // Simple fade-in animation effect on mount
  useEffect(() => {
    const hero = document.querySelector('.hero-content');
    hero.classList.add('opacity-0');
    setTimeout(() => {
      hero.classList.remove('opacity-0');
      hero.classList.add('opacity-100');
    }, 100);
  }, []);

  // Smooth scroll to section
  const handleScrollToSection = () => {
    const targetSection = document.getElementById('how-it-works');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="code-pattern"></div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="text-center max-w-4xl mx-auto hero-content transition-opacity duration-1000">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#FF00FF]">AI-Powered Code</span> Mentor<br />
            <span className="text-[#F5F5F5]"> — to Boost Your Skills!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#F5F5F5] text-xl mb-8 max-w-2xl mx-auto">
            Spot bugs, clean up your code, and master best practices with AI guidance — instantly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/review')}
              className="bg-[#FF00FF] text-[#0D0D0D] font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-[0_0_15px_#FF00FF] hover:shadow-[0_0_25px_#FF00FF,0_0_35px_#FF00FF]"
            >
              Get Started Free ✨
            </button>

            <button
              onClick={handleScrollToSection}
              className="border border-[#FF00FF] text-[#F5F5F5] hover:text-[#0D0D0D] hover:bg-[#FF00FF] font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <span className="flex items-center">
                See How It Works <ArrowRight size={16} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
