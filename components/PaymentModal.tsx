import React, { useState, useEffect } from 'react';
import { Plan, PAYMENT_ICONS } from '../constants';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

type PaymentMethod = 'credit-card' | 'binance' | 'easypaisa';
type PaymentStatus = 'idle' | 'success' | 'submitted';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, plan }) => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>('credit-card');
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [userEmail, setUserEmail] = useState('');
  const [transactionId, setTransactionId] = useState('');

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow for closing animation
      const timer = setTimeout(() => {
        setActiveTab('credit-card');
        setPaymentStatus('idle');
        setUserEmail('');
        setTransactionId('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const handleManualSubmit = () => {
    const subject = `New Subscription Payment for ${plan.title}`;
    const body = `Hello Synthax Suite Support,

A new payment has been submitted for verification.

Details:
--------------------
Plan: ${plan.title}
Price: ${plan.price}${plan.period}
Payment Method: ${activeTab === 'binance' ? 'Binance Pay' : 'Easypaisa'}
User Email: ${userEmail}
Transaction ID: ${transactionId}
--------------------

Please verify this transaction and activate the subscription.

Thank you.
    `;
    
    const mailtoLink = `mailto:synthaxsuitesupport@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    setPaymentStatus('submitted');
    setTimeout(() => {
      onClose();
    }, 4000); // Give user time to see the message
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'credit-card') {
      setPaymentStatus('success');
      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      handleManualSubmit();
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy to clipboard.');
    }
  };
  
  const paymentMethods: { id: PaymentMethod; name: string; icon: React.ReactNode }[] = [
    { id: 'credit-card', name: 'Credit Card', icon: PAYMENT_ICONS.CreditCardIcon },
    { id: 'binance', name: 'Binance Pay', icon: PAYMENT_ICONS.BinanceIcon },
    { id: 'easypaisa', name: 'Easypaisa', icon: PAYMENT_ICONS.WalletIcon },
  ];

  const SuccessView = () => (
    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="100" height="100">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" />
            <path className="checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <h3 className="text-2xl font-bold text-white mt-6">Payment Successful!</h3>
        <p className="text-gray-400 mt-2">
            Your <span className="font-semibold text-cyan-400">{plan.title}</span> subscription is now active.
        </p>
    </div>
  );

  const SubmittedView = () => (
    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
      <svg className="w-24 h-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <h3 className="text-2xl font-bold text-white mt-6">Submission Received!</h3>
      <p className="text-gray-400 mt-2 max-w-sm">
          Your payment for the <span className="font-semibold text-cyan-400">{plan.title}</span> plan is being verified. You will receive an email once it's active.
      </p>
    </div>
  );

  const renderContent = () => {
    if (paymentStatus === 'success') return <SuccessView />;
    if (paymentStatus === 'submitted') return <SubmittedView />;
    
    return (
        <>
            <div className="p-6">
            <div className="flex justify-between items-start">
                <div>
                <h2 id="modal-title" className="text-2xl font-bold text-white">Complete Your Purchase</h2>
                <p className="text-cyan-400 mt-1">You've selected: <span className="font-semibold">{plan.title}</span></p>
                </div>
                <button 
                    onClick={onClose} 
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="Close payment modal"
                >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            </div>

            <div className="px-6 border-y border-gray-800">
                <div className="flex -mb-px">
                    {paymentMethods.map(method => (
                        <button
                            key={method.id}
                            onClick={() => setActiveTab(method.id)}
                            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === method.id
                                ? 'border-cyan-400 text-cyan-400'
                                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                            }`}
                            role="tab"
                            aria-selected={activeTab === method.id}
                        >
                            {method.icon}
                            {method.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-6">
            <form onSubmit={handleSubmit}>
                {activeTab === 'credit-card' && (
                <div className="space-y-4" role="tabpanel">
                    <input type="text" placeholder="Card Number" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                    <div className="flex gap-4">
                    <input type="text" placeholder="MM / YY" className="w-1/2 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                    <input type="text" placeholder="CVC" className="w-1/2 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                    </div>
                    <input type="text" placeholder="Name on Card" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                </div>
                )}
                {activeTab === 'binance' && (
                <div className="space-y-4" role="tabpanel">
                    <p className="text-sm text-gray-400">1. Send payment to the Binance ID below.</p>
                    <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-md px-3 py-2">
                        <span className="text-white font-mono tracking-wider">00000</span>
                        <button type="button" onClick={() => copyToClipboard('00000')} className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold">COPY</button>
                    </div>
                    <p className="text-sm text-gray-400">2. Enter your email and transaction ID, then submit for verification.</p>
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Your Email Address" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                    <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} placeholder="Transaction ID (TrxID)" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                </div>
                )}
                {activeTab === 'easypaisa' && (
                <div className="space-y-4" role="tabpanel">
                    <p className="text-sm text-gray-400">1. Send payment to the Easypaisa account below.</p>
                    <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-md px-3 py-2">
                        <span className="text-white font-mono tracking-wider">3333333333333</span>
                        <button type="button" onClick={() => copyToClipboard('3333333333333')} className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold">COPY</button>
                    </div>
                    <p className="text-sm text-gray-400">2. Enter your email and transaction ID, then submit for verification.</p>
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Your Email Address" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                    <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} placeholder="Transaction ID (TrxID)" className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500" required />
                </div>
                )}
                
                <button
                    type="submit"
                    className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    {activeTab === 'credit-card' ? `Pay ${plan.price}${plan.period === "/year" ? " / year" : ""}` : 'Submit for Verification'}
                </button>
            </form>
            </div>
        </>
    );
  };

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 w-full max-w-md m-4 transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default PaymentModal;