import { ArrowRight } from "lucide-react";
import { colors } from "../theme";
import CaseMockup from "./CaseMockup";

export default function Hero() {
  return (
    <section id="product" className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1
        className="lf-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl mx-auto"
        style={{ color: colors.ink }}
      >
        Build every case
        <br />
        like it's{" "}
        <span className="italic lf-underline-word" style={{ color: colors.blue }}>
          Exhibit A
        </span>
        .
      </h1>

      <p className="mt-6 text-base md:text-lg max-w-xl mx-auto" style={{ color: colors.grayMuted }}>
        Hearings, notes, documents, and messages. One file per case, permissioned by role, and
        readable by an AI that actually cites its sources.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="#demo"
          className="lf-focus w-full sm:w-auto text-sm font-semibold px-6 py-3 rounded-full text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{ background: colors.blue }}
        >
          Request a demo
        </a>
        <a
          href="#features"
          className="lf-focus w-full sm:w-auto text-sm font-semibold px-6 py-3 rounded-full border flex items-center justify-center gap-2 hover:bg-white transition-colors"
          style={{ borderColor: colors.ink, color: colors.ink }}
        >
          See how it works <ArrowRight size={15} />
        </a>
      </div>

      <CaseMockup />
    </section>
  );
}
