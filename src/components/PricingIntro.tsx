// src/components/PricingIntro.tsx
import React from "react";

const PricingIntro: React.FC = () => (
  <div className="max-w-6xl mx-auto text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200/50 mb-6">💎 Simple Pricing</div>
    <h2 className="text-4xl lg:text-5xl font-black mb-6">
      <span className="bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">Plans that scale</span><br />
      <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">with your practice.</span>
    </h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Start free and upgrade as you grow. No hidden fees, cancel anytime.</p>
  </div>
);

export default PricingIntro;
