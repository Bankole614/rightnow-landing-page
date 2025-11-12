// src/components/AnimatedBackground.tsx
import React from "react";

const AnimatedBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
  </div>
);

export default AnimatedBackground;
