import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BackendNoticeModal: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl max-w-lg w-full mx-4 p-6 shadow-lg ring-1 ring-slate-200/50"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          App preview — backend not ready
        </h2>

        <p className="text-sm text-slate-600 mb-4">
          RightNow is currently a UI-only preview. The backend and download
          features are not implemented yet, so the app is not functional.
          Feel free to explore the interface — downloads and live features
          will be enabled once the backend is ready.
        </p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:brightness-95 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackendNoticeModal;
