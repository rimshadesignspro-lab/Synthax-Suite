import React from 'react';
import { Plan } from '../constants';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, plan }) => {
  if (!isOpen || !plan) return null;

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        aria-labelledby="details-modal-title"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 w-full max-w-lg m-4 transform transition-all duration-300 ease-out p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
            <h2 id="details-modal-title" className="text-2xl font-bold text-white">How It Works</h2>
            <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Close details modal"
            >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">Monthly Account Delivery</h3>
                <p>
                    After your purchase is confirmed, you will receive an email containing the account credentials for your selected AI tools within 24 hours. A new set of credentials will be delivered to your registered email at the beginning of each month to ensure continuous access.
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">Our Shared Account Model</h3>
                <p>
                    To offer these premium tools at such a competitive price, we utilize a shared account model. The credentials you receive are shared among a small group of Synthax Suite customers. This allows us to provide you with full access to premium features while keeping the service incredibly affordable.
                </p>
            </div>
            <p className="text-sm text-gray-500">
                This model is secure and reliable. Please do not change any account settings or passwords.
            </p>
        </div>

        <button
            onClick={onClose}
            className="w-full mt-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
            Got It
        </button>

      </div>
    </div>
  );
};

export default DetailsModal;