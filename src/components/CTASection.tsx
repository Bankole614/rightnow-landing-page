// src/components/CTASection.tsx
import React from "react";

const CTASection: React.FC = () => (
  <section className="py-20">
    <div className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
      <div className="relative text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to transform your legal practice?</h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">Join hundreds of legal professionals who've streamlined their workflow with RightNow.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all">Start Free Trial</a>
          <a href="#" className="inline-flex items-center gap-2 px-10 py-4 backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all">Schedule Demo</a>
        </div>

        <p className="mt-8 text-sm text-indigo-300">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </div>
  </section>
);

export default CTASection;
