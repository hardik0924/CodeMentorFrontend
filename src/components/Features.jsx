import React from 'react';
import { 
  Code, 
  Zap, 
  Shield, 
  BookOpen, 
  BarChart, 
  Languages, 
  Sparkles, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: <Code size={28} />,
    title: "Smart Code Analysis",
    description: "Our AI analyzes your code to identify bugs, security vulnerabilities, and performance issues in real-time."
  },
  {
    icon: <Zap size={28} />,
    title: "Instant Feedback",
    description: "Get immediate feedback on your code with detailed explanations and suggestions for improvement."
  },
  {
    icon: <Shield size={28} />,
    title: "Security Scanning",
    description: "Identify security vulnerabilities and best practices to keep your code secure and reliable."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Learning Resources",
    description: "Access relevant documentation, tutorials, and examples based on your code and learning needs."
  },
  {
    icon: <BarChart size={28} />,
    title: "Progress Tracking",
    description: "Monitor your coding improvement over time with detailed analytics and progress reports."
  },
  {
    icon: <Languages size={28} />,
    title: "Multi-Language Support",
    description: "Support for JavaScript, Python, Java, C++, and many more programming languages and frameworks."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Code Optimization",
    description: "Automatically suggest optimizations to make your code faster, cleaner, and more efficient."
  },
  {
    icon: <Users size={28} />,
    title: "Collaborative Learning",
    description: "Share your code and feedback with others to learn together and improve as a team."
  }
];

const Features = () => {
  return (
    <section id="features\" className="py-20 bg-[#161b22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Supercharge Your Coding Skills</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Our AI-powered features help you write better code, learn faster, and become a more proficient developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;