'use client';
import { useState } from "react";
import FAQComponent from "./components/faqs/FAQs";
import { FeatureSection } from "./components/feature/FeatureSection";
import Footer from "./components/footer/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { LaunchingSoon } from "./components/launching/LaunchingSoon";
import { Navbar } from "./components/navbar/Navbar";
import AccessPopup from "./components/AccessPopup/AccessPopup";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  return (
    <>
              <Navbar handleModalOpen={handleModalOpen} />

      <div className="overflow-x-hidden">
        {
          isModalOpen && <AccessPopup handleModalClose={handleModalClose} />
        }
        <main className="w-full max-w-[1920px] mx-auto">
          <HeroSection handleModalOpen={handleModalOpen}/>
          <FeatureSection  />
          <LaunchingSoon />
          <FAQComponent />
          <Footer />
        </main>

      </div>
      
    </>
  );
}
