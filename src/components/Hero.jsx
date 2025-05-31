import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 bg-[#1E1B4B] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="code-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-gray-400 font-medium text-xl mb-4">Used By 100+ Developers</h2>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#7C3AED]">AI-Powered Code</span> Mentor<br />
            <span className="text-white">— Instantly Improve Your Skills!</span>
          </h1>
          
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            With AI-powered code mentoring, you can catch errors, improve readability,
            learn best practices, and level up your coding skills in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('/review')}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Coding Now 🚀
            </button>
            <button className="bg-transparent border border-[#7C3AED] text-gray-300 hover:text-white hover:border-white font-medium py-3 px-8 rounded-md transition-all duration-300">
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