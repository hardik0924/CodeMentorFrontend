import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CodeExample from '../components/CodeExample';
// import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#1E1B4B] min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        <HowItWorks />
        <CodeExample />
        {/* <Testimonials /> */}
      </main>
    </div>
  );
};

export default Home;