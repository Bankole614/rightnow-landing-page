// src/components/ActiveCaseCard.tsx
import React from "react";
import { type ActiveCase } from "../types";
import { ListTodo, Files, MessageCircleMore, Sparkles } from "lucide-react";

interface Props {
  activeCase: ActiveCase;
}

const ActiveCaseCard: React.FC<Props> = ({ activeCase }) => {
  const { title, nextHearing, progressPercent = 0, tasksSummary = "-", docsCount = 0, messagesCount = 0, demo } = activeCase;

  return (
    <div className="relative rounded-3xl backdrop-blur-xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-200/50 transform hover:scale-105 transition-transform duration-500">
      {demo && (
        <div className="absolute -top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Demo data</div>
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Case</div>
          <div className="text-2xl font-bold mt-1 bg-primary bg-clip-text text-transparent">{title}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500">Next Hearing</div>
          <div className="text-base font-bold mt-1">{nextHearing ?? "TBD"}</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600 font-medium">Case Progress</span>
            <span className="text-primary font-bold">{progressPercent}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <div className="h-3 bg-primary rounded-full" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="backdrop-blur-sm bg-blue-50 p-3 rounded-xl border border-slate-100 text-center">
            <div className="flex flex-col items-center gap-0">
              <ListTodo className="size-8 text-slate-700 leading-none" />
              <div className="text-sm text-slate-500">Tasks</div>
            </div>
            <div className="text-lg font-bold text-slate-700">{tasksSummary}</div>
          </div>
          <div className="backdrop-blur-sm bg-blue-50  p-3 rounded-xl border border-slate-100 text-center">
            <div className="flex flex-col items-center gap-0">
              <Files className="size-8 text-slate-700 leading-none" />
              <div className="text-sm text-slate-500">Docs</div>
            </div>
            <div className="text-lg font-bold text-slate-700">{docsCount}</div>
          </div>
          <div className="backdrop-blur-sm bg-blue-50 p-3 rounded-xl border border-slate-100 text-center">
            <div className="flex flex-col items-center gap-0">
              <MessageCircleMore className="size-8 text-slate-700 leading-none" />
              <div className="text-sm text-slate-500">Messages</div>
            </div>
            <div className="text-lg font-bold text-slate-700">{messagesCount}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="px-4 py-3 bg-linear-to-br from-[#1D8ADF] to-[#283593] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
            Open Case
          </button>
          <button className="px-4 py-3 backdrop-blur-sm bg-white/60 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-white transition-all">
            View Timeline
          </button>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 backdrop-blur-xl bg-[#1D8ADF] text-white px-4 py-2 rounded-full text-xs  shadow-xl ring-4 ring-white flex items-center gap-2">
        <Sparkles className="size-4" />
        <span>AI-Powered</span>
      </div>
    </div>
  );
};

export default ActiveCaseCard;
