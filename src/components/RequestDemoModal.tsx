import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { colors } from "../theme";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestDemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm_or_role: "",
    phone_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (submitted) {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        firm_or_role: "",
        phone_number: "",
        message: "",
      });
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const API_BASE =
      (import.meta.env.VITE_API_URL as string | undefined) ||
      "https://lexflow-api.bankole.xyz";

    try {
      const res = await fetch(`${API_BASE}/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          firm_or_role: formData.firm_or_role.trim(),
          phone_number: formData.phone_number.trim() || undefined,
          message: formData.message.trim() || undefined,
        }),
      });

      if (!res.ok) {
        let errorMsg = "Failed to submit demo request";
        try {
          const errData = await res.json();
          if (errData?.detail) {
            errorMsg = typeof errData.detail === "string" 
              ? errData.detail 
              : JSON.stringify(errData.detail);
          }
        } catch {
          // ignore json parse error
        }
        throw new Error(errorMsg);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: "rgba(11, 42, 74, 0.55)",
        backdropFilter: "blur(6px)",
      }}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border transition-all transform animate-in fade-in zoom-in-95 duration-200"
        style={{
          background: colors.white,
          borderColor: colors.line,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${colors.ink} 0%, ${colors.blue} 50%, ${colors.gold} 100%)`,
          }}
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors lf-focus"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: colors.blueSoft }}
              >
                <CheckCircle2 size={32} color={colors.blue} />
              </div>
              <h3
                className="lf-serif text-2xl font-semibold mb-2"
                style={{ color: colors.ink }}
              >
                Demo Request Received
              </h3>
              <p
                className="text-sm leading-relaxed mb-6 max-w-md mx-auto"
                style={{ color: colors.grayMuted }}
              >
                Thank you for your interest in Legitrail. We’ve sent a confirmation
                email to <strong className="font-semibold text-slate-800">{formData.email}</strong> and
                our team will reach out shortly to schedule your personalized walkthrough.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="lf-focus px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{ background: colors.blue }}
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold lf-mono uppercase px-2 py-0.5 rounded"
                  style={{ background: colors.blueSoft, color: colors.blue }}
                >
                  <Sparkles size={11} /> 1-on-1 Walkthrough
                </span>
              </div>
              <h3
                className="lf-serif text-2xl font-semibold mb-1"
                style={{ color: colors.ink }}
              >
                Request a Personalized Demo
              </h3>
              <p className="text-xs sm:text-sm mb-6" style={{ color: colors.grayMuted }}>
                See how Legitrail streamlines case organization and cites court-ready evidence.
              </p>

              {error && (
                <div className="text-xs sm:text-sm p-3 rounded-lg mb-5 bg-red-50 border border-red-200 text-red-700 flex items-start gap-2">
                  <span className="font-semibold">Error:</span> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="demo-name"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: colors.gray }}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none transition-colors"
                    style={{
                      borderColor: colors.line,
                      color: colors.ink,
                      backgroundColor: "#FDFDFD",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-email"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: colors.gray }}
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    placeholder="jane@lawfirm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none transition-colors"
                    style={{
                      borderColor: colors.line,
                      color: colors.ink,
                      backgroundColor: "#FDFDFD",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-firm"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: colors.gray }}
                  >
                    Firm Name or Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="demo-firm"
                    type="text"
                    required
                    placeholder="e.g. Managing Partner, Doe & Co."
                    value={formData.firm_or_role}
                    onChange={(e) =>
                      setFormData({ ...formData, firm_or_role: e.target.value })
                    }
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none transition-colors"
                    style={{
                      borderColor: colors.line,
                      color: colors.ink,
                      backgroundColor: "#FDFDFD",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-phone"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: colors.gray }}
                  >
                    Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData({ ...formData, phone_number: e.target.value })
                    }
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none transition-colors"
                    style={{
                      borderColor: colors.line,
                      color: colors.ink,
                      backgroundColor: "#FDFDFD",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-message"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: colors.gray }}
                  >
                    Notes / Specific Interests <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="demo-message"
                    rows={3}
                    placeholder="Tell us what workflows or features you are most interested in exploring..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none transition-colors resize-y"
                    style={{
                      borderColor: colors.line,
                      color: colors.ink,
                      backgroundColor: "#FDFDFD",
                    }}
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="lf-focus px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="lf-focus inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 shadow-sm"
                    style={{ background: colors.blue }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
