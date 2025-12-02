import React from "react";
import Brand from "./Brand";

const Header: React.FC = () => (
  <header className="fixed inset-x-0 top-0 z-50">
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between backdrop-blur-sm bg-white/60 rounded-2xl px-6 py-4 shadow-md ring-1 ring-slate-200/50">
        <div className="flex items-center gap-3"><Brand /></div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#ai" className="hover:text-indigo-600 transition-colors">AI Assistant</a>
          <a href="#discover" className="hover:text-indigo-600 transition-colors">Find Lawyers</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden md:inline-block px-5 py-2.5 text-sm font-medium rounded-xl border-2 border-primary hover:bg-primary text-primary hover:text-white transition-all" href="#">Sign in</a>
          <a className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transition-all" href="#">
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;