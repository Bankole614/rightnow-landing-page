// src/components/PricingIntro.tsx
import React from "react";

const PricingIntro: React.FC = () => (
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-black mb-6">
      <span className="bg-linear-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">Plans that scale</span><br />
      <span className="bg-linear-to-r from-[#283593] to-[#1D8ADF]  bg-clip-text text-transparent">with your practice.</span>
    </h2>
    <p className="text-lg text-slate-700 max-w-2xl mx-auto">Start free and upgrade as you grow. No hidden fees, cancel anytime.</p>
  </div>
);

export default PricingIntro;
