// src/components/Brand.tsx
import React from "react";
import Logo from "../assets/gavel.png";

const Brand: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12">
      <img src={Logo} alt="" />
    </div>
    <div>
      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">RightNow</h1>
      <p className="text-xs text-slate-500">Legal clarity, powered by AI</p>
    </div>
  </div>
);

export default Brand;
