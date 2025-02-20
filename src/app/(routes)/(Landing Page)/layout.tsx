"use client";
import React from "react";
import Header from "./_local-components/Header";
import Footer from "./_local-components/Footer";
import ComingSection from "./_local-components/ComingSection";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import { useEffect,useState } from "react";
type Props = {
  children: React.ReactNode;
};
function LandingPagelayout({ children }: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      }
    },[]);

  const backgroundImageUrl = attachCloudinaryPrefix(
    "v1739959653/shutterstock_1969544767_on7k1r.webp"
  );
  return (
    <div className="absolute  bg-mobileBackground md:bg-destopBbackground overflow-x-hidden w-full max-w-screen min-h-screen p-0">
      <Header />

      {children}
      <div
        className="bg-right-bottom bg-contain bg-no-repeat"
        style={{
          backgroundImage: isMobile ? `url(${backgroundImageUrl})` :  "none",
        }}
      >
        <ComingSection />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPagelayout;
