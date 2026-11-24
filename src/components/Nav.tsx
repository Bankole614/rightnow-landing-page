import { useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Gavel, ArrowRight } from "lucide-react";
import { colors } from "../theme";
import { NAV_LINKS } from "../constants/landingData";

const WEB_APP_URL = "https://legitrail-app.bankole.xyz/";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 w-full border-b relative"
      style={{ background: "rgba(250,248,243,0.9)", backdropFilter: "blur(8px)", borderColor: colors.line }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 relative flex items-center justify-between">
        <a href="#product" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ background: colors.ink }}
          >
            <Gavel size={16} color={colors.white} />
          </div>
          <span className="lf-serif text-xl font-medium" style={{ color: colors.ink }}>
            Legitrail
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="lf-focus text-sm font-medium hover:opacity-70 transition-opacity rounded"
              style={{ color: colors.gray }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={WEB_APP_URL}
            className="lf-focus inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-full text-white hover:opacity-90 transition-opacity cursor-pointer"
            style={{ background: colors.blue }}
          >
            Open Web App
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden lf-focus rounded p-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} color={colors.ink} /> : <Menu size={22} color={colors.ink} />}
        </button>
      </div>

      {open && typeof document !== "undefined" && createPortal(
        <div className="md:hidden">
          {/* Full Screen Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 w-full h-full z-40 transition-opacity duration-200"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed top-16 left-0 right-0 z-50 px-6 pb-6 pt-3 flex flex-col gap-4 border-b shadow-2xl animate-in slide-in-from-top-2 duration-200"
            style={{
              background: "rgba(250,248,243,0.98)",
              backdropFilter: "blur(12px)",
              borderColor: colors.line,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-1.5 hover:opacity-70 transition-opacity"
                style={{ color: colors.gray }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={WEB_APP_URL}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full text-white text-center cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
                style={{ background: colors.blue }}
              >
                Open Web App
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
