import React, { useState } from "react";
import Brand from "./Brand";
import BackendNoticeModal from "./BackendNoticeModal";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#ai", label: "AI Assistant" },
    { href: "#discover", label: "Find Lawyers" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Dark Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between backdrop-blur-sm bg-white/60 rounded-2xl px-6 py-4 shadow-md ring-1 ring-slate-200/50">
          <div className="flex items-center gap-3">
            <Brand />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1D8ADF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* <a
              className="px-5 py-2.5 text-sm font-medium rounded-xl border-2 border-primary hover:bg-primary text-primary hover:text-white transition-all"
              href="#"
            >
              Sign in
            </a> */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transition-all"
            >
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-slate-600 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-sm bg-white/60 rounded-2xl p-4 shadow-md ring-1 ring-slate-200/50 animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#1D8ADF] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-200/50">
              {/* <a
                className="px-5 py-2.5 text-sm font-medium rounded-xl border-2 border-primary hover:bg-primary text-primary hover:text-white transition-all text-center"
                href="#"
              >
                Sign in
              </a> */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-all"
              >
                Download App
              </button>
            </div>
          </div>
        )}
        <BackendNoticeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </header>
  );
};

export default Header;