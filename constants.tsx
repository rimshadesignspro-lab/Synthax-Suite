import React from 'react';

const ICON_SIZE = "w-8 h-8";

// Tool Icons
const ChatGptIcon = <svg className={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor"><path d="M21.5,8.55a1,1,0,0,0-1,1V15.1a2.4,2.4,0,0,1-2.4,2.4H5.9a2.4,2.4,0,0,1-2.4-2.4V9.55a1,1,0,0,0-2,0V15.1a4.4,4.4,0,0,0,4.4,4.4H18.1a4.4,4.4,0,0,0,4.4-4.4V9.55A1,1,0,0,0,21.5,8.55Z" /><path d="M12,14.36a3.74,3.74,0,0,0,3.74-3.74V5.12a3.74,3.74,0,0,0-7.48,0v5.5A3.74,3.74,0,0,0,12,14.36Zm1.74-9.24a1.74,1.74,0,1,1-3.48,0Z" /></svg>;
const CanvaIcon = <svg className={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm4 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-2 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"/></svg>;
const FlowAiIcon = <svg className={ICON_SIZE} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a2 2 0 011.45 1.45V18a2 2 0 01-2 2h-2M9 4l-4.55 4.55a2 2 0 00-1.45 1.45V18a2 2 0 002 2h2M15 10V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6M9 4h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0" /></svg>;
const GeminiIcon = <svg className={ICON_SIZE} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
const AdobeStockIcon = <svg className={ICON_SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M14.5,3H22v7.5h-7.5V3 M9.5,3H13v3.5H9.5V3 M9.5,8H13v3.5H9.5V8 M2,3h6v18H2V3z"/></svg>;


// Feature Icons
const DollarIcon = <svg className={ICON_SIZE} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a2 2 0 000-4H8a2 2 0 000 4h4v1M12 18V7m-4 4h8" /></svg>;
const LockIcon = <svg className={ICON_SIZE} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const BundleIcon = <svg className={ICON_SIZE} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;

// Payment Method Icons
const CreditCardIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>;
const BinanceIcon = <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.62 12L12 7.38 7.38 12 12 16.62 16.62 12zM12 2L2 12l10 10 10-10L12 2zm0 17.17L4.83 12 12 4.83 19.17 12 12 19.17z"></path><path d="M7.38 12l2.31-2.31L12 12l-2.31 2.31L7.38 12zm4.62 0l2.31 2.31L16.62 12l-2.31-2.31L12 12zm0 4.62l-2.31-2.31L12 12l2.31 2.31L12 16.62zM12 7.38l2.31 2.31L12 12 9.69 9.69 12 7.38z"></path></svg>;
const WalletIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a2 2 0 002 2h14a2 2 0 002-2l-3-9m0 0l-3-1m-6 0l6 0"></path></svg>;
export const PAYMENT_ICONS = { CreditCardIcon, BinanceIcon, WalletIcon };

export interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

export const AI_TOOLS: Tool[] = [
  { icon: ChatGptIcon, title: "ChatGPT", description: "Access the powerful language model for content creation, brainstorming, and complex problem-solving.", price: "$6/mo" },
  { icon: CanvaIcon, title: "Canva Pro", description: "Unlock premium templates, tools, and content to create stunning designs for any project.", price: "$3/mo" },
  { icon: FlowAiIcon, title: "Flow AI", description: "Automate workflows and build intelligent systems with an intuitive, powerful AI platform.", price: "$5/mo" },
  { icon: GeminiIcon, title: "Gemini Advanced", description: "Leverage Google's most capable AI model for cutting-edge performance and multimodal reasoning.", price: "$3/mo" },
  { icon: AdobeStockIcon, title: "Adobe Stock", description: "Access millions of high-quality, royalty-free stock photos, videos, and templates for your creative projects.", price: "$5/mo" },
];

export interface Plan {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  cta: string;
}

export const PRICING_PLANS: Plan[] = [
  {
    title: "All-in-One Suite",
    price: "$80",
    period: "/year",
    description: "Get unlimited access to all our premium AI tools with one simple, affordable plan.",
    features: ["Includes All Tools", "Priority Support", "Billed Annually", "Cancel Anytime"],
    isFeatured: true,
    cta: "Subscribe Now"
  },
  {
    title: "Individual Tools",
    price: "$3-$6",
    period: "/month per tool",
    description: "Pick and choose the tools you need. Perfect for focused projects and specific needs.",
    features: ["Cancel anytime", "Access to a single tool", "Billed monthly"],
    isFeatured: false,
    cta: "View Tools"
  }
];

export const FEATURES = [
    { icon: DollarIcon, title: "Unbeatable Price", description: "Access top-tier AI tools for a fraction of the standard cost. We make premium AI accessible to everyone." },
    { icon: BundleIcon, title: "All-in-One Convenience", description: "Manage all your AI subscriptions in one place. One account, one bill, endless possibilities." },
    { icon: LockIcon, title: "Secure & Reliable", description: "Your data is safe with us. We provide a secure and stable platform for all your creative and professional work." },
];