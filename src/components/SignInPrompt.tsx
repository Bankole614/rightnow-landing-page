// src/components/SignInPrompt.tsx
import React from "react";

const SignInPrompt: React.FC = () => (
  <div className="max-w-2xl mx-auto backdrop-blur-xl bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 border-2 border-indigo-200/50 text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Want to message lawyers directly?</h3>
    <p className="text-slate-600 mb-6">Sign in to send messages, book consultations, and access full lawyer profiles with reviews and case history.</p>
    <a href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">Sign In to Continue</a>
  </div>
);

export default SignInPrompt;
