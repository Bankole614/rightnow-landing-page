import { useState } from "react";
import { Menu, X, Gavel } from "lucide-react";
import { colors } from "../theme";
import { NAV_LINKS } from "../constants/landingData";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 w-full border-b relative"
      style={{ background: "rgba(250,248,243,0.9)", backdropFilter: "blur(8px)", borderColor: colors.line }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ background: colors.ink }}
          >
            <Gavel size={16} color={colors.white} />
          </div>
          <span className="lf-serif text-xl font-medium" style={{ color: colors.ink }}>
            Legitrail
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
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

        <div className="hidden md:flex items-center gap-4">
          <a href="#signin" className="lf-focus text-sm font-medium rounded" style={{ color: colors.gray }}>
            Sign in
          </a>
          <a
            href="#demo"
            className="lf-focus text-sm font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ background: colors.blue }}
          >
            Request a demo
          </a>
        </div>

        <button
          className="md:hidden lf-focus rounded p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} color={colors.ink} /> : <Menu size={22} color={colors.ink} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 px-6 pb-6 flex flex-col gap-4 border-t"
          style={{
            background: "rgba(250,248,243,0.96)",
            backdropFilter: "blur(8px)",
            borderColor: colors.line,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium pt-4" style={{ color: colors.gray }}>
              {link.label}
            </a>
          ))}
          <a href="#signin" className="text-sm font-medium" style={{ color: colors.gray }}>
            Sign in
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold px-4 py-2.5 rounded-full text-white text-center"
            style={{ background: colors.blue }}
          >
            Request a demo
          </a>
        </div>
      )}
    </header>
  );
}
