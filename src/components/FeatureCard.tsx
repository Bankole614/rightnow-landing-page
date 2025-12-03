// src/components/FeatureCard.tsx
import React from "react";
import { FileText, Brain, Lock, Search, Users, Smartphone } from "lucide-react";
import { type Feature } from "../types";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText />,
  Brain: <Brain />,
  Lock: <Lock />,
  Search: <Search />,
  Users: <Users />,
  Smartphone: <Smartphone />
};

const FeatureCard: React.FC<Feature> = ({ title, desc, icon }) => {
  const IconComponent = iconMap[icon] || <FileText />;
  
  return (
    <div className="group backdrop-blur-xl bg-blue-50 rounded-2xl p-6 transition-all duration-300">
      <div className="w-14 h-14 mb-2 flex items-center justify-center rounded-full bg-gradient-to-b from-blue-200 to-blue-50">
        <div className="text-blue-600 flex justify-center h-10 w-10 items-center rounded-full bg-gradient-to-b from-blue-300 to-blue-50">
          {IconComponent}
        </div>
      </div>
      <h4 className="font-bold text-xl text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;