import { useEffect } from "react";
import { X, Smartphone } from "lucide-react";
import { colors } from "../theme";

interface AppComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppComingSoonModal({
  isOpen,
  onClose,
}: AppComingSoonModalProps) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(11, 42, 74, 0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl p-6 sm:p-7 text-center shadow-2xl border transition-all"
        style={{
          background: colors.white,
          borderColor: colors.line,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors lf-focus cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div
          className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ background: colors.blueSoft }}
        >
          <Smartphone size={22} color={colors.blue} />
        </div>

        {/* Title */}
        <h3
          className="lf-serif text-xl font-semibold mb-2"
          style={{ color: colors.ink }}
        >
          Mobile App Coming Soon
        </h3>

        {/* Short, elegant message */}
        <p
          className="text-xs sm:text-sm leading-relaxed mb-6"
          style={{ color: colors.grayMuted }}
        >
          We're putting the finishing touches on the Legitrail mobile app for iOS and Android. You'll soon be able to manage cases and review hearing notes on the go.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={onClose}
          className="lf-focus w-full py-2.5 rounded-full text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
          style={{ background: colors.blue }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
