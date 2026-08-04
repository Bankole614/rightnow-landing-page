import { colors } from "../theme";
import { FEATURES } from "../constants/landingData";

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-lg mb-14">
        <p className="lf-mono text-[11px] mb-3" style={{ color: colors.blue }}>
          FEATURES
        </p>
        <h2 className="lf-serif text-3xl md:text-4xl" style={{ color: colors.ink }}>
          Everything a case needs, nothing it doesn't.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="lf-card-hover p-6 rounded-2xl border"
            style={{ borderColor: colors.line, background: colors.white }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
              style={{ background: colors.blueSoft }}
            >
              <Icon size={18} color={colors.blue} />
            </div>
            <h3 className="text-base font-semibold mb-2" style={{ color: colors.ink }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.grayMuted }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
