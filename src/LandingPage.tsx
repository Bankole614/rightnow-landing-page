// src/components/RightNowLanding.tsx
import React, { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesIntro from "./components/FeaturesIntro";
import FeatureCard from "./components/FeatureCard";
import AISection from "./components/AISection";
import DiscoverIntro from "./components/DiscoverIntro";
import LawyerCard from "./components/LawyerCard";
import SignInPrompt from "./components/SignInPrompt";
import PricingIntro from "./components/PricingIntro";
import PricingCard from "./components/PricingCard";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import LawyerModal from "./components/LawyerModal";
import { lawyers, features, pricing } from "./data";
import { type Lawyer } from "./types";
// import { useAuth } from "../hooks/useAuth"; // example
import { type ActiveCase } from "./types";

// const { user, token } = useAuth();
// const isAuthenticated = Boolean(user);
const demoCase: ActiveCase = {
  title: "Demo: John v. Nigeria Govt.",
  nextHearing: "Nov 20, 2025",
  progressPercent: 65,
  tasksSummary: "3/8",
  docsCount: 12,
  messagesCount: 24,
  demo: true
};


const RightNowLanding: React.FC = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50 text-slate-900 antialiased overflow-x-hidden">
      {/* <AnimatedBackground /> */}
      <Header />

      <main className="relative mx-auto ">
        <Hero  activeCase={ demoCase } />

        <section id="features" className="py-16  container">
          <FeaturesIntro />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </section>

        <AISection />

        <section id="discover" className="py-16 container">
          <DiscoverIntro />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {lawyers.map((lawyer, i) => (
              <LawyerCard key={i} lawyer={lawyer} onClick={() => setSelectedLawyer(lawyer)} />
            ))}
          </div>
          <SignInPrompt />
        </section>

        <section id="pricing" className="py-20 bg-blue-100">
          <PricingIntro />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((p, i) => <PricingCard key={i} {...p} />)}
          </div>
        </section>

        <CTASection />
        <Footer />
      </main>

      {selectedLawyer && <LawyerModal lawyer={selectedLawyer} onClose={() => setSelectedLawyer(null)} />}
    </div>
  );
};

export default RightNowLanding;
