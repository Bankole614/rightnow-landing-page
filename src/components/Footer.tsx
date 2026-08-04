import { colors } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: colors.ink }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="lf-serif italic text-white text-lg">L</span>
          <span className="lf-serif text-white text-lg">LexFlow</span>
        </div>
        <p className="lf-mono text-[11px]" style={{ color: "#7E93A8" }}>
          © 2026 LEXFLOW · CASE MANAGEMENT, FILED RIGHT
        </p>
      </div>
    </footer>
  );
}
