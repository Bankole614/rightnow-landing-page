// src/components/FeatureCard.tsx
import React from "react";
import { type Feature } from "../types";

const FeatureCard: React.FC<Feature> = ({ title, desc, icon, gradient }) => (
  <div className="group backdrop-blur-xl bg-white/80 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h4 className="font-bold text-xl text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default FeatureCard;
