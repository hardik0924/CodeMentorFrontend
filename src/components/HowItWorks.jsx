import React from 'react';
import { Upload, FileCode, Zap, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: <FileCode size={32} className="text-blue-500" />,
    title: "Write or Upload Your Code",
    description: "Start by writing code in our online editor or uploading your existing code files."
  },
  {
    icon: <Zap size={32} className="text-purple-500" />,
    title: "AI Analysis & Mentoring",
    description: "Our AI instantly analyzes your code for bugs, style issues, and optimization opportunities."
  },
  {
    icon: <Lightbulb size={32} className="text-yellow-500" />,
    title: "Receive Personalized Feedback",
    description: "Get detailed explanations, suggestions, and examples to improve your coding skills."
  },
  {
    icon: <Upload size={32} className="text-green-500" />,
    title: "Implement & Learn",
    description: "Apply the suggested improvements and learn best practices to become a better programmer."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works\" className="py-20 bg-[#161b22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How CodeMentor AI Works</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Our AI-powered platform provides real-time code mentoring in just a few simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#0d1117] border border-gray-800 rounded-lg p-8 relative z-10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#161b22] border-2 border-blue-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;