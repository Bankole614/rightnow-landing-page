// src/components/Hero.tsx
import React from "react";
import ActiveCaseCard from "./ActiveCaseCard";
// interface Props {
//   isAuthenticated: boolean;
//   activeCase?: ActiveCase | null;
// }

const Hero: React.FC = ({ activeCase }) => (
  <section className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 pt-32">
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-cyan-50 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 ring-1 ring-indigo-200/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Trusted by 500+ legal professionals
      </div>

      <h2 className="text-5xl lg:text-6xl font-black leading-tight">
        <span className="bg-linear-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">Legal clarity,</span><br />
        <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">delivered instantly.</span>
      </h2>

      <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
        Transform how you manage cases with AI-powered document analysis, secure client collaboration, and intelligent task tracking—all in one beautiful platform.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-indigo-500 text-white text-base font-semibold rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:scale-105 transition-all">Start Free Trial</a>
        <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 backdrop-blur-sm bg-white/60 border-2 border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-white hover:border-indigo-300 transition-all">Watch Demo</a>
      </div>

      <div className="flex items-center gap-6 pt-4">
        <div className="flex -space-x-3">
          {['bg-linear-to-br from-indigo-500 to-purple-500', 'bg-linear-to-br from-cyan-500 to-blue-500', 'bg-linear-to-br from-pink-500 to-rose-500'].map((color, i) => (
            <div key={i} className={`w-10 h-10 rounded-full ${color} ring-4 ring-white flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div className="text-sm">
          <div className="font-semibold text-slate-900">Join 500+ professionals</div>
          <div className="text-slate-500">Rated 4.9/5 by users</div>
        </div>
      </div>
    </div>

    <div className="relative">
      <ActiveCaseCard activeCase={activeCase} />

      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-indigo-400 to-purple-400 rounded-3xl opacity-20 blur-2xl animate-pulse" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-2xl animate-pulse delay-700" />
    </div>
  </section>
);

export default Hero;
