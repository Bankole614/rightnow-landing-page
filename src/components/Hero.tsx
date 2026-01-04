// src/components/Hero.tsx
import React, { useState } from "react";
import ActiveCaseCard from "./ActiveCaseCard";
import BackendNoticeModal from "./BackendNoticeModal";

interface Props {
  activeCase?: any;
}

const Hero: React.FC<Props> = ({ activeCase }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 pt-44">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#EDF0FF] px-4 py-2 rounded-full text-sm font-medium text-primary ring-1 ring-indigo-200/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Trusted by 500+ legal professionals
        </div>

        <h2 className="text-5xl lg:text-6xl font-black leading-tight">
          <span className="bg-linear-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">Legal clarity,<br />
          delivered instantly.</span>
        </h2>

        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Transform how you manage cases with AI-powered document analysis, secure client collaboration, and intelligent task tracking. All in one beautiful platform.
        </p>

        <div className="max-w-sm">
          <button onClick={() => setIsModalOpen(true)} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-br from-[#1D8ADF] to-[#283593] text-white text-base font-semibold rounded-xl hover:scale-105 transition-all">Start Free Trial</button>
        </div>
      </div>

      <div className="relative">
        <ActiveCaseCard activeCase={activeCase} />
      </div>
      <BackendNoticeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
