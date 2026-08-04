import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { colors } from "../theme";
import { FAQS } from "../constants/landingData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-lg mb-12">
        <p className="lf-mono text-[11px] mb-3" style={{ color: colors.blue }}>
          FAQ
        </p>
        <h2 className="lf-serif text-3xl md:text-4xl" style={{ color: colors.ink }}>
          Frequently filed questions.
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.q}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: colors.line, background: colors.white }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="lf-focus w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold" style={{ color: colors.ink }}>
                  {item.q}
                </span>
                <ChevronDown
                  size={17}
                  color={colors.grayMuted}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              <div
                className="lf-accordion-content"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: colors.grayMuted }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
