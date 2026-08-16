import { colors, fontDisplay, fontBody, fontMono } from "../theme";

export default function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      .lf-root {
        font-family: ${fontBody};
        color: ${colors.gray};
        background-color: ${colors.paper};
        background-image: radial-gradient(circle at top, rgba(29, 92, 150, 0.06), transparent 38%);
      }
      .lf-serif { font-family: ${fontDisplay}; }
      .lf-mono { font-family: ${fontMono}; letter-spacing: 0.04em; }

      .lf-folder-tab {
        position: relative;
        clip-path: polygon(0% 100%, 0% 12%, 6% 0%, 22% 0%, 27% 12%, 100% 12%, 100% 100%);
      }
      .lf-stamp {
        transform: rotate(-9deg);
        border: 2px solid ${colors.gold};
        color: ${colors.gold};
      }
      .lf-underline-word {
        text-decoration-line: underline;
        text-decoration-color: ${colors.gold};
        text-decoration-thickness: 3px;
        text-underline-offset: 6px;
      }
      .lf-card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .lf-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -20px rgba(11,42,74,0.25); }
      .lf-accordion-content { transition: grid-template-rows 0.25s ease; display: grid; }
      @media (prefers-reduced-motion: reduce) {
        .lf-card-hover, .lf-accordion-content { transition: none; }
      }
      .lf-focus:focus-visible {
        outline: 2px solid ${colors.blue};
        outline-offset: 3px;
      }
    `}</style>
  );
}
