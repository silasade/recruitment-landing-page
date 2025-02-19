"use client";
import React from "react";
import Header from "./_local-components/Header";
import Footer from "./_local-components/Footer";
import ComingSection from "./_local-components/ComingSection";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import { useMediaQuery } from "react-responsive";
type Props = {
  children: React.ReactNode;
};
function LandingPagelayout({ children }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const backgroundImageUrl = attachCloudinaryPrefix(
    "v1739959653/shutterstock_1969544767_on7k1r.webp"
  );
  return (
    <div className="bg-mobileBackground md:bg-destopBbackground overflow-hidden">
      <Header />
      {children}
      <div
      className="bg-right-bottom bg-contain bg-no-repeat"
        style={{
          backgroundImage: isMobile ? `url(${backgroundImageUrl})` : "",
        }}
      >
        <ComingSection />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPagelayout;
