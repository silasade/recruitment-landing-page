"use client";

import React, { useState } from "react";
import HeroSection from "./_local-components/HeroSection";
import NewEraSection from "./_local-components/NewEraSection";
import TradeDividendSection from "./_local-components/TradeDividendSection";
import LimitedAvailabSectionindex from "./_local-components/LimitedAvailabSection";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import { useEffect } from "react";
function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth >= 800) {
      setIsMobile(true);
    }
  },[]);
  const backgroundImageUrl = attachCloudinaryPrefix(
    "v1739962072/Vector_1_gewx6w.webp"
  );
  return (
    <div className="overflow-x-hidden w-full min-h-screen p-0">
      <HeroSection />
      <NewEraSection />
      <div className="relative z-10">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-right-bottom bg-contain -z-10 opacity-25"
          style={{
            backgroundImage: isMobile ? `url(${backgroundImageUrl})` : "unset",
          }}
        ></div>

        {/* Content Sections */}
        <TradeDividendSection />
        <LimitedAvailabSectionindex />
      </div>
    </div>
  );
}

export default Home;
