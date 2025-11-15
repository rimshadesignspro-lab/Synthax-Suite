
import React from 'react';

interface HeaderProps {
  onShareClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShareClick }) => {
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
          <div className="flex items-center gap-4">
            <p className="hidden md:block text-sm text-gray-400">Premium AI Tools, Unbeatable Price</p>
            <button 
              onClick={onShareClick}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              aria-label="Share website link"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;