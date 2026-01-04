// src/components/AISection.tsx
import { Lightbulb, Sparkles,TriangleAlert } from "lucide-react";
import React, { useState } from "react";
import BackendNoticeModal from "./BackendNoticeModal";

const AISection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = [
    "Instant document summaries in plain language",
    "Extract key dates, parties, and obligations",
    "Natural language Q&A about your documents",
    "Risk assessment and next-step suggestions"
  ];

  return (
    <section id="ai" className="py-20 mx-4 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-linear-to-br from-[#1D8ADF] to-[#283593] rounded-3xl p-4 lg:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 3px)',
                backgroundSize: '28px 28px'
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="size-4" />
                <span>AI-Powered Intelligence</span>
              </div>
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

              <button onClick={() => setIsModalOpen(true)} className="w-full items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Try AI Demo</button>
            </div>

            <div className="backdrop-blur-xl bg-white/95 lg:p-8 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1D8ADF] to-[#283593] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <div className="font-bold text-slate-900">AI Assistant</div>
                  <div className="text-xs text-slate-500">Live Demo</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex lg:gap-3 gap-1.5">
                  <div className="flex-1 bg-slate-200 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-slate-900">What are the main payment terms and deadlines in this contract?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center shrink-0 font-semibold text-sm">U</div>
                </div>

                <div className="flex lg:gap-3 gap-1.5">
                  <div className="lg:w-8 lg:h-8 w-6 h-6 rounded-full bg-linear-to-br from-[#1D8ADF] to-[#283593] flex items-center justify-center shrink-0">
                    <Lightbulb className="lg:w-5 lg:h-5 w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-linear-to-br from-white to-indigo-50 border-2 border-indigo-200 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-slate-900 mb-3">Based on the contract, here are the key payment terms:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span><strong>Initial payment:</strong> $50,000 due within 30 days of signing</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span><strong>Milestone payments:</strong> 3 installments of $25,000 each</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span><strong>Final delivery:</strong> January 15, 2026</span></li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-500 italic flex items-center gap-2">
                        <TriangleAlert className="w-3 h-3 text-slate-500" />
                        <span>This is AI-generated analysis, not legal advice</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackendNoticeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div> 
    </section>
  );
};

export default AISection;
