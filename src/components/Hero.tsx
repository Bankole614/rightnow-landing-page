// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 ring-1 ring-indigo-200/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Trusted by 500+ legal professionals
      </div>

      <h2 className="text-5xl lg:text-6xl font-black leading-tight">
        <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">Legal clarity,</span><br />
        <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">delivered instantly.</span>
      </h2>

      <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
        Transform how you manage cases with AI-powered document analysis, secure client collaboration, and intelligent task tracking—all in one beautiful platform.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-base font-semibold rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:scale-105 transition-all">Start Free Trial</a>
        <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 backdrop-blur-sm bg-white/60 border-2 border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-white hover:border-indigo-300 transition-all">Watch Demo</a>
      </div>

      <div className="flex items-center gap-6 pt-4">
        <div className="flex -space-x-3">
          {['bg-gradient-to-br from-indigo-500 to-purple-500', 'bg-gradient-to-br from-cyan-500 to-blue-500', 'bg-gradient-to-br from-pink-500 to-rose-500'].map((color, i) => (
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
      <div className="relative rounded-3xl backdrop-blur-xl bg-white/80 p-8 shadow-2xl ring-1 ring-slate-200/50 transform hover:scale-105 transition-transform duration-500">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Case</div>
            <div className="text-2xl font-bold mt-1 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Smith v. Acme Ltd.</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-500">Next Hearing</div>
            <div className="text-base font-bold mt-1">Nov 20, 2025</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-600 font-medium">Case Progress</span>
              <span className="text-indigo-600 font-bold">65%</span>
            </div>
            <div className="h-3 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full overflow-hidden shadow-inner">
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full w-2/3 shadow-lg animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            {[{ label: 'Tasks', value: '3/8', icon: '✓' }, { label: 'Docs', value: '12', icon: '📄' }, { label: 'Messages', value: '24', icon: '💬' }].map((item, i) => (
              <div key={i} className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-white p-3 rounded-xl border border-slate-100">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-slate-500">{item.label}</div>
                <div className="text-lg font-bold text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">Open Case</button>
            <button className="px-4 py-3 backdrop-blur-sm bg-white/60 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-white hover:border-indigo-300 transition-all">View Timeline</button>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 backdrop-blur-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl ring-4 ring-white">✨ AI-Powered</div>
      </div>

      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl opacity-20 blur-2xl animate-pulse" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-2xl animate-pulse delay-700" />
    </div>
  </section>
);

export default Hero;
