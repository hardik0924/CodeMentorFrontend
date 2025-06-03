import React from 'react';
import { Upload, FileCode, Zap, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: <FileCode size={32} className="text-[#FF00FF]" />,
    title: "Write or Paste Your Code",
    description: "Drop your code into CodeMentor — no prompt engineering needed."
  },
  {
    icon: <Zap size={32} className="text-[#FF00FF]" />,
    title: "AI-Powered Review with Gemini",
    description: "Your code is sent to Gemini AI with a smart, backend-generated prompt. It reviews your code for bugs, improvements, and best practices."
  },
  {
    icon: <Lightbulb size={32} className="text-[#FF00FF]" />,
    title: "Instant Mentorship Feedback",
    description: "Gemini sends back personalized suggestions — from fixes to optimization tips — instantly."
  },
  {
    icon: <Upload size={32} className="text-[#FF00FF]" />,
    title: "Improve & Learn Instantly",
    description: "Apply changes, learn clean coding techniques, and level up — without extra effort."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#0D0D0D] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="code-pattern"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">How It Works</h2>
          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            CodeMentor gives you instant, AI-driven code mentorship in a few effortless steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Neon connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF00FF] via-pink-500 to-[#FF00FF] transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-8 relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#FF00FF] hover:border-[#FF00FF]"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-11 h-11 rounded-full bg-[#0D0D0D] border-2 border-[#FF00FF] flex items-center justify-center text-[#F5F5F5] font-bold text-sm">
                {index + 1}
              </div>

              <div className="flex justify-center mb-6">{step.icon}</div>

              <h3 className="text-[#F5F5F5] font-semibold text-xl text-center mb-3">{step.title}</h3>

              <p className="text-[#CCCCCC] text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
