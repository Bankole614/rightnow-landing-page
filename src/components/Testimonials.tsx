import { colors } from "../theme";
import { TESTIMONIALS } from "../constants/landingData";

export default function Testimonials() {
  return (
    <section style={{ background: colors.white }}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-lg mb-14">
          <p className="lf-mono text-[11px] mb-3" style={{ color: colors.blue }}>
            ON THE RECORD
          </p>
          <h2 className="lf-serif text-3xl md:text-4xl" style={{ color: colors.ink }}>
            What the docket says.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border flex flex-col justify-between"
              style={{ borderColor: colors.line, background: colors.paper }}
            >
              <p className="lf-serif italic text-base leading-relaxed mb-6" style={{ color: colors.ink }}>
                "{t.quote}"
              </p>
              <div className="pt-4 border-t" style={{ borderColor: colors.line }}>
                <p className="text-sm font-semibold" style={{ color: colors.ink }}>
                  {t.name}
                </p>
                <p className="lf-mono text-[10px] mt-0.5" style={{ color: colors.grayMuted }}>
                  {t.role.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
