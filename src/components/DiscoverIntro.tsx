// src/components/DiscoverIntro.tsx
import React from "react";

const DiscoverIntro: React.FC = () => (
  <div className="max-w-6xl mx-auto text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200/50 mb-6">🔍 Find Your Lawyer</div>
    <h2 className="text-4xl lg:text-5xl font-black mb-6">
      <span className="bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">Connect with verified</span><br />
      <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">legal professionals.</span>
    </h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Browse vetted lawyers by specialty and location. Sign in to view full profiles, read reviews, and book consultations.</p>
  </div>
);

export default DiscoverIntro;
