import { colors } from "../theme";

export default function CapabilityStrip() {
  const items = [
    "AI CASE SUMMARIES",
    "SECURE MESSAGING",
    "MARKETPLACE MATCHING",
    "STRIPE & PAYSTACK PAYMENTS",
    "ROLE-BASED PERMISSIONS",
  ];
  return (
    <div className="border-y" style={{ borderColor: colors.line, background: colors.white }}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item) => (
          <span key={item} className="lf-mono text-[11px]" style={{ color: colors.grayMuted }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
