import { useState } from "react";
import FontLoader from "./components/FontLoader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CapabilityStrip from "./components/CapabilityStrip";
import Features from "./components/Features";
import About from "./components/About";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import RequestDemoModal from "./components/RequestDemoModal";
import AppComingSoonModal from "./components/AppComingSoonModal";

export default function LegitrailLanding() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const openAppModal = () => setIsAppModalOpen(true);
  const closeAppModal = () => setIsAppModalOpen(false);

  return (
    <div className="lf-root min-h-screen">
      <FontLoader />
      <Nav
        onRequestDemo={openDemoModal}
        onDownloadApp={openAppModal}
      />
      <Hero onRequestDemo={openDemoModal} />
      <CapabilityStrip />
      <Features />
      <About />
      {/* <Pricing onRequestDemo={openDemoModal} />
      <Testimonials /> */}
      <FAQ />
      <CTA onRequestDemo={openDemoModal} />
      <Footer />

      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
      />

      <AppComingSoonModal
        isOpen={isAppModalOpen}
        onClose={closeAppModal}
      />
    </div>
  );
}