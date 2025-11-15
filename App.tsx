import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import FeatureCard from './components/FeatureCard';
import Pricing from './components/NextSteps';
import EmailSignup from './components/EmailSignup';
import PaymentModal from './components/PaymentModal';
import DetailsModal from './components/DetailsModal';
import ShareModal from './components/ShareModal';
import { AI_TOOLS, PRICING_PLANS, FEATURES, Plan, Tool } from './constants';

const App: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSubscribeClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };
  
  const handleIndividualToolSubscribe = (tool: Tool) => {
    const planFromTool: Plan = {
        title: tool.title,
        price: tool.price.replace('/mo', ''),
        period: '/month',
        description: `Get access to ${tool.title}.`,
        features: ['Cancel anytime', 'Access to a single tool', 'Billed monthly'],
        isFeatured: false,
        cta: 'Subscribe'
    };
    setSelectedPlan(planFromTool);
    setIsPaymentModalOpen(true);
  };

  const handleDetailsClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsDetailsModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedPlan(null);
  };
  
  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleOpenShareModal = () => setIsShareModalOpen(true);
  const handleCloseShareModal = () => setIsShareModalOpen(false);


  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans antialiased">
      <Header onShareClick={handleOpenShareModal} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Hero />

        <Section id="tool-suite" title="Our AI Tool Suite" subtitle="Individually powerful. Better together.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_TOOLS.map((tool) => (
              <FeatureCard 
                key={tool.title} 
                icon={tool.icon} 
                title={tool.title} 
                description={tool.description} 
                price={tool.price} 
                onSubscribe={() => handleIndividualToolSubscribe(tool)}
              />
            ))}
          </div>
        </Section>
        
        <Section title="Simple, Transparent Pricing" subtitle="Choose the plan that's right for you.">
           <Pricing 
              plans={PRICING_PLANS} 
              onSubscribe={handleSubscribeClick} 
              onShowDetails={handleDetailsClick}
            />
        </Section>

        <Section title="Why Choose Synthax Suite?" subtitle="The ultimate toolkit for creators, developers, and professionals.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
           </div>
        </Section>
      </main>
       <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-800">
        <p>Synthax Suite - Premium AI Tools</p>
        <p>&copy; 2024. All Rights Reserved.</p>
      </footer>
      <EmailSignup />
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        plan={selectedPlan}
      />
      <DetailsModal 
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        plan={selectedPlan}
      />
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
      />
    </div>
  );
};

export default App;