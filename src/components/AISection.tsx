// src/components/AISection.tsx
import React from "react";

const AISection: React.FC = () => {
  const items = [
    "Instant document summaries in plain language",
    "Extract key dates, parties, and obligations",
    "Natural language Q&A about your documents",
    "Risk assessment and next-step suggestions"
  ];

  return (
    <section id="ai" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">✨ AI-Powered Intelligence</div>
              <h2 className="text-4xl font-black mb-6">Your AI legal assistant, always ready.</h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">Upload contracts, filings, or any legal document and get instant plain-language summaries, key date extraction, and intelligent Q&A—all with your explicit consent.</p>

              <div className="space-y-4 mb-8">
                {items.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Try AI Demo</a>
            </div>

            <div className="backdrop-blur-xl bg-white/95 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900">AI Assistant</div>
                  <div className="text-xs text-slate-500">Live Demo</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-semibold text-sm">U</div>
                  <div className="flex-1 bg-slate-50 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-slate-900">What are the main payment terms and deadlines in this contract?</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-white to-indigo-50 border-2 border-indigo-200 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-slate-900 mb-3">Based on the contract, here are the key payment terms:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-indigo-600">•</span><span><strong>Initial payment:</strong> $50,000 due within 30 days of signing</span></li>
                      <li className="flex items-start gap-2"><span className="text-indigo-600">•</span><span><strong>Milestone payments:</strong> 3 installments of $25,000 each</span></li>
                      <li className="flex items-start gap-2"><span className="text-indigo-600">•</span><span><strong>Final delivery:</strong> January 15, 2026</span></li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-slate-200"><p className="text-xs text-slate-500 italic">⚠️ This is AI-generated analysis, not legal advice</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default AISection;
