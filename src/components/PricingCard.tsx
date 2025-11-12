// src/components/PricingCard.tsx
import React from "react";
import { type Pricing } from "../types";

const PricingCard: React.FC<Pricing> = ({ tier, price, period, features, highlight }) => (
  <div className={`relative rounded-2xl p-8 transition-all duration-300 ${highlight ? 'bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-2xl shadow-indigo-500/50 scale-105 ring-4 ring-indigo-200' : 'backdrop-blur-xl bg-white/80 ring-1 ring-slate-200/50 hover:shadow-xl hover:scale-105'}`}>
    {highlight && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">Most Popular</div>}

    <div className={`text-sm font-bold uppercase tracking-wide mb-2 ${highlight ? 'text-indigo-100' : 'text-slate-500'}`}>{tier}</div>

    <div className="mb-6">
      <span className={`text-5xl font-black ${highlight ? 'text-white' : 'text-slate-900'}`}>{price}</span>
      <span className={`text-lg ${highlight ? 'text-indigo-100' : 'text-slate-500'}`}> {period}</span>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <svg className={`w-6 h-6 flex-shrink-0 ${highlight ? 'text-white' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span className={highlight ? 'text-white' : 'text-slate-600'}>{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full px-6 py-4 rounded-xl font-bold transition-all ${highlight ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl' : 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-lg hover:scale-105'}`}>
      {highlight ? 'Start Free Trial' : 'Get Started'}
    </button>
  </div>
);

export default PricingCard;
