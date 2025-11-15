import React, { useState } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Link');
  const websiteUrl = window.location.href;

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(websiteUrl);
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy Link'), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
      alert('Failed to copy link.');
    }
  };

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        aria-labelledby="share-modal-title"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 w-full max-w-lg m-4 p-6 transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
            <h2 id="share-modal-title" className="text-2xl font-bold text-white">Share Your Website</h2>
            <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Close share modal"
            >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">Your Local Website Link</h3>
                <p>
                    This website is currently running in a local development environment. The link below will only work on your computer.
                </p>
                <div className="mt-4 flex gap-2">
                    <input 
                        type="text"
                        value={websiteUrl}
                        readOnly
                        className="flex-grow w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
                        aria-label="Local website link"
                    />
                    <button
                        onClick={handleCopyLink}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition-colors w-28"
                    >
                        {copyButtonText}
                    </button>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">How to Share with Others?</h3>
                <p>
                    To get a public link that you can share with anyone, you need to deploy your website to a hosting service. Popular services for this include Vercel, Netlify, or GitHub Pages. Once deployed, you will receive a public URL.
                </p>
            </div>
        </div>

        <button
            onClick={onClose}
            className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg transition-colors"
        >
            Got It
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
