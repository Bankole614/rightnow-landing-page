import { ArrowRight } from "lucide-react";
import { colors } from "../theme";

export default function CTA() {
  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
      <div
        className="rounded-3xl px-8 py-14 md:py-16 text-center"
        style={{ background: colors.ink }}
      >
        <h2 className="lf-serif text-3xl md:text-4xl text-white mb-4">
          Ready to file with confidence?
        </h2>
        <p className="text-sm md:text-base max-w-md mx-auto mb-8" style={{ color: "#B9C6D4" }}>
          See LexFlow on your own cases — no commitment, just a walkthrough.
        </p>
        <a
          href="#"
          className="lf-focus inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          style={{ background: colors.white, color: colors.ink }}
        >
          Request a demo <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
