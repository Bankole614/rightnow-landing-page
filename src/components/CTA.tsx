import { ArrowRight } from "lucide-react";
import { colors } from "../theme";

interface CTAProps {
  onRequestDemo?: () => void;
}

export default function CTA({ onRequestDemo }: CTAProps) {
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
          See Legitrail on your own cases — no commitment, just a walkthrough.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://legitrail-app.bankole.xyz/"
            className="lf-focus w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            style={{ background: colors.white, color: colors.ink }}
          >
            Open Web App <ArrowRight size={15} />
          </a>
          <button
            type="button"
            onClick={onRequestDemo}
            className="lf-focus w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border hover:bg-white/10 transition-colors cursor-pointer text-white"
            style={{ borderColor: "rgba(255,255,255,0.28)" }}
          >
            Request a demo
          </button>
        </div>
      </div>
    </section>
  );
}
