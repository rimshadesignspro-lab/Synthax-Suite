import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
      {/* Text content on the left */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Unlock Premium AI Tools for a <span className="text-cyan-400">Fraction of the Cost</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-400">
          Get access to industry-leading AI applications like ChatGPT, Canva Pro, Gemini Advanced, and more. All in one place, with one simple subscription.
        </p>
         <div className="mt-10">
          <a href="#pricing" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors">
            View Pricing
          </a>
        </div>
      </div>
      
      {/* Image on the right */}
      <div className="flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional using AI tools on a laptop" 
          className="rounded-2xl object-cover w-full max-w-md lg:max-w-none shadow-2xl shadow-cyan-500/10 border border-cyan-500/20"
        />
      </div>
    </div>
  );
};

export default Hero;