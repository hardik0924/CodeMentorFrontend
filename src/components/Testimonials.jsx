import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "CodeMentor AI has revolutionized my workflow. I've eliminated common bugs and improved my code quality dramatically. The real-time feedback feels like having a senior developer looking over your shoulder.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    company: "DevStream",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "As someone transitioning into tech, CodeMentor AI has been an invaluable learning tool. It doesn't just highlight issues but explains why they're issues and how to fix them. It's like having a personal tutor available 24/7.",
    stars: 5
  },
  {
    name: "Michael Okonjo",
    role: "Backend Engineer",
    company: "DataSystems",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "I was skeptical about AI code review tools, but CodeMentor AI changed my mind. It caught several critical security vulnerabilities in our codebase that even our senior engineers missed. Absolutely worth every penny.",
    stars: 5
  },
  {
    name: "Emily Zhang",
    role: "CS Student",
    company: "University of Technology",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "As a CS student, CodeMentor AI has been a game-changer for my learning. It helps me understand concepts better by showing me where I'm making mistakes and suggesting better approaches. My grades have improved significantly!",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Developers Say</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Hear from developers who've improved their coding skills with CodeMentor AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#161b22] border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-blue-500"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-white font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;