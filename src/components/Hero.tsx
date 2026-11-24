import { ArrowRight } from "lucide-react";
import { colors } from "../theme";
import CaseMockup from "./CaseMockup";

const WEB_APP_URL = "https://legitrail-app.bankole.xyz/";

interface HeroProps {
  onRequestDemo?: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
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
          href={WEB_APP_URL}
          className="lf-focus w-full sm:w-auto text-sm font-semibold px-6 py-3 rounded-full text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
          style={{ background: colors.blue }}
        >
          Open Web App
          <ArrowRight size={15} />
        </a>
        <button
          type="button"
          onClick={onRequestDemo}
          className="lf-focus w-full sm:w-auto text-sm font-semibold px-6 py-3 rounded-full border flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer"
          style={{ borderColor: colors.ink, color: colors.ink }}
        >
          Request a demo
        </button>
      </div>

      <p
        className="mt-4 text-xs sm:text-sm italic max-w-md mx-auto leading-relaxed"
        style={{ color: colors.grayMuted }}
      >
        Our native mobile app is almost ready — in the meantime, use the full web app and add it
        to your home screen for the native experience.
      </p>

      <div className="mt-3">
        <a
          href="#features"
          className="lf-focus text-xs sm:text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          style={{ color: colors.gray }}
        >
          See how it works
        </a>
      </div>

      <CaseMockup />
    </section>
  );
}
