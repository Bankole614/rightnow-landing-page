// src/components/FeaturesIntro.tsx
import React from "react";

const FeaturesIntro: React.FC = () => (
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl lg:text-5xl font-black mb-6">
      <span className="bg-linear-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">Everything you need,</span><br />
      <span className="bg-linear-to-r from-[#283593] to-[#1D8ADF]  bg-clip-text text-transparent">beautifully simple.</span>
    </h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built for modern legal practices. Manage cases, collaborate securely, and let AI handle the heavy lifting.</p>
  </div>
);

export default FeaturesIntro;
