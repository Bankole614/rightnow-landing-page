// src/components/SignInPrompt.tsx
import React from "react";
import { Lock } from "lucide-react";

const SignInPrompt: React.FC = () => (
  <div className="max-w-2xl mx-auto backdrop-blur-xl bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 border-2 border-indigo-200/50 text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br from-[#1D8ADF] to-[#283593] flex items-center justify-center">
      <Lock className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Want to message lawyers directly?</h3>
    <p className="text-slate-600 mb-6">Sign in to send messages, book consultations, and access full lawyer profiles with reviews and case history.</p>
    <button className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r to-[#1D8ADF] from-[#283593] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">Sign In to Continue</button>
  </div>
);

export default SignInPrompt;
