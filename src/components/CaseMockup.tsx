import { Sparkles } from "lucide-react";
import { colors } from "../theme";

export default function CaseMockup() {
  return (
    <div className="relative max-w-3xl mx-auto mt-4">
      <div
        className="lf-folder-tab w-40 h-8 md:w-48 md:h-9 flex items-end pl-4 pb-1"
        style={{ background: colors.ink }}
      >
        <span className="lf-mono text-white text-[10px] md:text-xs">CASE FILE</span>
      </div>

      <div
        className="rounded-b-2xl rounded-tr-2xl overflow-hidden border shadow-lg"
        style={{ borderColor: colors.line, background: colors.white }}
      >
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ borderColor: colors.line, background: colors.blueSoft }}
        >
          <div>
            <p className="lf-mono text-[10px]" style={{ color: colors.blue }}>
              NO. LF-2026-0184
            </p>
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              Adeyemi v. Briarcliff Holdings
            </p>
          </div>
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: colors.ink, color: colors.white }}
          >
            Open
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: colors.line }}>
          <div className="p-5" style={{ background: colors.white }}>
            <p className="lf-mono text-[10px] mb-2" style={{ color: colors.grayMuted }}>
              NEXT HEARING
            </p>
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              Sep 14 · 9:00 AM
            </p>
            <p className="text-xs mt-0.5" style={{ color: colors.grayMuted }}>
              High Court, Ikeja
            </p>
          </div>
          <div className="p-5" style={{ background: colors.white }}>
            <p className="lf-mono text-[10px] mb-2" style={{ color: colors.grayMuted }}>
              DOCUMENTS
            </p>
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              12 filed
            </p>
            <p className="text-xs mt-0.5" style={{ color: colors.grayMuted }}>
              All summarized
            </p>
          </div>
          <div className="p-5" style={{ background: colors.white }}>
            <p className="lf-mono text-[10px] mb-2" style={{ color: colors.grayMuted }}>
              PARTICIPANTS
            </p>
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              4 active
            </p>
            <p className="text-xs mt-0.5" style={{ color: colors.grayMuted }}>
              2 counsel · 1 client · 1 expert
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: colors.goldSoft }}>
            <Sparkles size={16} color={colors.gold} className="mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold" style={{ color: colors.ink }}>
                Ask this case
              </p>
              <p className="text-xs mt-1" style={{ color: colors.gray }}>
                "What was the outcome of the last hearing?" — answered from the filed record, with
                sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
