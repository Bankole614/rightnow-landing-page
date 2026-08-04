import { ShieldCheck } from "lucide-react";
import { colors } from "../theme";

export default function About() {
  return (
    <section id="about" style={{ background: colors.white }}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="lf-mono text-[11px] mb-3" style={{ color: colors.blue }}>
            ABOUT
          </p>
          <h2 className="lf-serif text-3xl md:text-4xl mb-5" style={{ color: colors.ink }}>
            Built for the people actually working the case.
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: colors.grayMuted }}>
            LexFlow started as a way to stop losing hearing dates in group chats and losing
            documents in email threads. It's grown into a full record; for solo practitioners
            juggling a dozen cases, small firms coordinating across roles, and clients who just
            want a straight answer about where their case stands.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.grayMuted }}>
            Every note, hearing, and filing carries a permission; owner, elevated, read-only,
            external, so the right people see exactly what they should, and nothing more.
          </p>
          <div className="mt-7 flex items-center gap-2">
            <ShieldCheck size={16} color={colors.blue} />
            <span className="text-xs font-medium" style={{ color: colors.ink }}>
              Role-based access on every case, by default
            </span>
          </div>
        </div>

        <div className="relative h-72 md:h-80">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-2xl border"
              style={{
                borderColor: colors.line,
                background: i === 2 ? colors.blueSoft : colors.paper,
                transform: `rotate(${(i - 1) * 4}deg) translateY(${i * 6}px)`,
                zIndex: 3 - i,
              }}
            />
          ))}
          <div
            className="absolute inset-0 rounded-2xl border flex flex-col justify-between p-6"
            style={{ borderColor: colors.line, background: colors.white, zIndex: 4 }}
          >
            <div className="flex justify-between items-start">
              <span className="lf-mono text-[10px]" style={{ color: colors.grayMuted }}>
                NO. LF-2026-0184
              </span>
              <span className="lf-mono text-[10px]" style={{ color: colors.grayMuted }}>
                PG. 1 OF 12
              </span>
            </div>
            <div>
              <div className="h-2 rounded-full w-3/4 mb-2" style={{ background: colors.line }} />
              <div className="h-2 rounded-full w-1/2 mb-2" style={{ background: colors.line }} />
              <div className="h-2 rounded-full w-2/3" style={{ background: colors.line }} />
            </div>
            <span
              className="lf-mono text-[10px] self-start px-2 py-1 rounded"
              style={{ background: colors.goldSoft, color: colors.gold }}
            >
              PRIVATE NOTE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
