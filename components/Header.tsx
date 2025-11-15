
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l4 4m0 0l-4 4m4-4H8m4 8l-4 4m0 0l4 4m-4-4h12" />
            </svg>
            <h1 className="text-xl font-bold text-white tracking-wider">Synthax Suite</h1>
          </div>
          <p className="hidden md:block text-sm text-gray-400">Premium AI Tools, Unbeatable Price</p>
        </div>
      </div>
    </header>
  );
};

export default Header;