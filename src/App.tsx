import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { TrustSection } from './sections/TrustSection';
import { ServicesSection } from './sections/ServicesSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { BeforeAfterSection } from './sections/BeforeAfterSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';
import { InstagramSection } from './sections/InstagramSection';
import { LocationSection } from './sections/LocationSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#C9A86A]/30 selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — TRUST / POSITIONING */}
        <TrustSection />

        {/* SECTION 03 — SERVICES */}
        <ServicesSection />

        {/* SECTION 04 — PORTFOLIO */}
        <PortfolioSection />

        {/* SECTION 05 — BEFORE / AFTER */}
        <BeforeAfterSection />

        {/* SECTION 06 — WHY CHOOSE US */}
        <WhyChooseUsSection />

        {/* SECTION 07 — INSTAGRAM */}
        <InstagramSection />

        {/* SECTION 08 — LOCATION */}
        <LocationSection />

        {/* SECTION 09 — FINAL CTA */}
        <FinalCtaSection />
      </main>

      {/* SECTION 10 — FOOTER */}
      <Footer />

      {/* GLOBAL WHATSAPP CONVERSION SYSTEM */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
