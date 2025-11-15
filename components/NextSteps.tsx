import React from 'react';
import { Plan } from '../constants';

interface PricingProps {
  plans: Plan[];
  onSubscribe: (plan: Plan) => void;
  onShowDetails: (plan: Plan) => void;
}

const Pricing: React.FC<PricingProps> = ({ plans, onSubscribe, onShowDetails }) => {
  return (
    <div id="pricing" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.title}
          className={`relative border rounded-xl p-8 flex flex-col ${
            plan.isFeatured
              ? 'bg-gray-900 border-cyan-500 ring-2 ring-cyan-500/50'
              : 'bg-gray-900/50 border-gray-800'
          }`}
        >
          {plan.isFeatured && (
            <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                <span className="bg-cyan-500 text-black font-semibold px-4 py-1 rounded-full text-sm">
                    Best Value
                </span>
            </div>
          )}
          <h4 className="text-2xl font-bold text-white text-center">{plan.title}</h4>
           <div className="text-center mt-4">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
           </div>
          <p className="text-gray-400 text-center mt-4 h-16">{plan.description}</p>
          <ul className="space-y-3 mt-8 text-gray-300 flex-grow">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          {plan.cta === 'View Tools' ? (
             <a 
                href="#tool-suite"
                className={`text-center w-full mt-8 font-bold py-3 px-6 rounded-lg transition-colors ${
                  plan.isFeatured 
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-black' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                {plan.cta}
              </a>
          ) : (
             <button 
                onClick={() => onSubscribe(plan)}
                className={`w-full mt-8 font-bold py-3 px-6 rounded-lg transition-colors ${
                  plan.isFeatured 
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-black' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}>
                  {plan.cta}
              </button>
          )}
          <button 
            onClick={() => onShowDetails(plan)}
            className="mt-4 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            How does it work?
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;