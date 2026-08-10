import { Check } from "lucide-react";
import { colors } from "../theme";
import { TIERS } from "../constants/landingData";

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-lg mb-14">
        <p className="lf-mono text-[11px] mb-3" style={{ color: colors.blue }}>
          PRICING
        </p>
        <h2 className="lf-serif text-3xl md:text-4xl" style={{ color: colors.ink }}>
          Straightforward pricing, per firm.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="relative p-7 rounded-2xl border flex flex-col"
            style={{
              borderColor: tier.highlighted ? colors.blue : colors.line,
              background: colors.white,
              borderWidth: tier.highlighted ? "2px" : "1px",
            }}
          >
            {tier.highlighted && (
              <span
                className="lf-mono absolute -top-3 left-7 text-[10px] px-2.5 py-1 rounded-full lf-stamp"
                style={{ background: colors.white }}
              >
                MOST FILED
              </span>
            )}
            <h3 className="lf-serif text-xl mb-1" style={{ color: colors.ink }}>
              {tier.name}
            </h3>
            <p className="text-xs mb-5" style={{ color: colors.grayMuted }}>
              {tier.desc}
            </p>
            <div className="mb-6">
              <span className="text-3xl font-semibold" style={{ color: colors.ink }}>
                {tier.price}
              </span>
              <span className="text-sm" style={{ color: colors.grayMuted }}>
                {tier.period}
              </span>
            </div>
            <ul className="space-y-3 mb-7 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: colors.gray }}>
                  <Check size={15} color={colors.blue} className="mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className="lf-focus text-center text-sm font-semibold py-2.5 rounded-full transition-opacity hover:opacity-90"
              style={{
                background: tier.highlighted ? colors.blue : colors.paper,
                color: tier.highlighted ? colors.white : colors.ink,
                border: tier.highlighted ? "none" : `1px solid ${colors.line}`,
              }}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
