import { colors, fontDisplay, fontBody, fontMono } from "../theme";

export default function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      .lf-root {
        font-family: ${fontBody};
        color: ${colors.gray};
        background-color: ${colors.paper};
      }
      .lf-grid-bg {
        position: relative;
        z-index: 0;
      }
      .lf-grid-bg::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background-image: 
          linear-gradient(to right, ${colors.line} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.line} 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(circle at 50% 50%, black 15%, transparent 75%);
        -webkit-mask-image: radial-gradient(circle at 50% 50%, black 15%, transparent 75%);
        opacity: 0.85;
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
