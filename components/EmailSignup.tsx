import React from 'react';

const EmailSignup: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    if(emailInput && emailInput.value) {
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="bg-gray-900/50 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Stay Updated</h3>
        <p className="mt-2 text-md text-gray-400 max-w-xl mx-auto">
          Join our newsletter to get the latest news, updates, and special offers delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <label htmlFor="email-signup" className="sr-only">Email address</label>
          <input
            id="email-signup"
            type="email"
            name="email"
            required
            className="flex-grow w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-md transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSignup;