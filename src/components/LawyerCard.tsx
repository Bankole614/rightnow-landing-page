// src/components/LawyerCard.tsx
import React from "react";
import { type Lawyer } from "../types";

interface Props {
  lawyer: Lawyer;
  onClick: () => void;
}

const LawyerCard: React.FC<Props> = ({ lawyer, onClick }) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="group backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg ring-1 ring-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${lawyer.color} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>{lawyer.avatar}</div>
          <div>
            <div className="font-bold text-lg text-slate-900">{lawyer.name}</div>
            <div className="text-sm text-slate-500">{lawyer.specialty}</div>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-amber-50 px-2 py-1 rounded-lg flex items-center gap-1">
          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <span className="text-sm font-bold text-amber-700">{lawyer.rating}</span>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4 line-clamp-2">Experienced in {lawyer.specialty.toLowerCase()} cases with a proven track record. Available for consultations and case representation.</p>

      <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span>{lawyer.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{lawyer.cases} cases</span>
        </div>
      </div>

      <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all">View Full Profile</button>
    </div>
  );
};

export default LawyerCard;
