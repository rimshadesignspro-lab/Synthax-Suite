import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
  onSubscribe?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, price, onSubscribe }) => {
  return (
    <div className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-cyan-400">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="mt-2 text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
      {price && (
        <div className="absolute top-4 right-4 bg-gray-800 text-cyan-400 font-bold py-1 px-3 rounded-full text-xs">
          {price}
        </div>
      )}
      {onSubscribe && (
        <div className="mt-auto pt-6">
          <button 
            onClick={onSubscribe}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;