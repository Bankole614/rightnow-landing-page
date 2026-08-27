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

export default function LexFlowLanding() {
  return (
    <div className="lf-root min-h-screen">
      <FontLoader />
      <Nav />
      <Hero />
      <CapabilityStrip />
      <Features />
      <About />
      {/* <Pricing />
      <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}