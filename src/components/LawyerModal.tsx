// src/components/LawyerModal.tsx
import React, { useEffect } from "react";
import { type Lawyer } from "../types";

interface Props {
  lawyer: Lawyer;
  onClose: () => void;
}

const LawyerModal: React.FC<Props> = ({ lawyer, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!lawyer) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white rounded-xl max-h-[80vh] lg:p-8 p-4 max-w-2xl w-full shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${lawyer.name} profile`}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${lawyer.color} text-white flex items-center justify-center font-bold text-3xl shadow-lg`}>{lawyer.avatar}</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{lawyer.name}</h3>
              <p className="text-slate-600">{lawyer.specialty}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="font-bold">{lawyer.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{lawyer.cases} cases completed</span>
              </div>
            </div>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-slate-600" aria-label="Close dialog">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">About</h4>
            <p className="text-slate-600">{lawyer.experience} of experience in {lawyer.specialty.toLowerCase()}. Specialized in providing comprehensive legal support with a focus on client communication and successful case resolution.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Contract Review', 'Dispute Resolution', 'Legal Consultation', 'Court Representation'].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-50 text-primary rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="backdrop-blur-sm bg-indigo-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span className="font-semibold">Sign in required</span>
              </div>
              <p className="text-sm text-slate-600">To send messages and book consultations, please sign in or create an account.</p>
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r to-[#1D8ADF] from-[#283593] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">Download the App</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerModal;
