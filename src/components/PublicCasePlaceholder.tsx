// src/components/PublicCasePlaceholder.tsx
import React from "react";
// import { Link } from "react-router-dom"; // optional: or <a href="/signin">

const PublicCasePlaceholder: React.FC = () => {
  return (
    <div className="rounded-3xl p-8 bg-white/70 shadow-lg ring-1 ring-slate-200/50 text-center">
      <div className="text-sm text-indigo-700 font-semibold mb-2">See your active cases</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">Sign in to view case details</h3>
      <p className="text-sm text-slate-600 mb-6">This sample landing area previews what you'll see in your dashboard — sign in to access your secure case workspace.</p>

      <div className="flex gap-3 justify-center">
        <a href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all">Get Started</a>

        <a href="/signin" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-xl text-slate-700 hover:border-indigo-300 transition-all">Sign in</a>
      </div>

      <div className="mt-4 text-xs text-slate-500 italic">No real user data is shown on the public site.</div>
    </div>
  );
};

export default PublicCasePlaceholder;
