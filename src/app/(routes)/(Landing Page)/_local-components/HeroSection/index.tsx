"use client";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const heroImage = useRef<HTMLDivElement | null>(null);
  const backgroundImageUrl = attachCloudinaryPrefix(
    "v1739959653/shutterstock_1969544767_on7k1r.webp"
  );
  useEffect(() => {
    if (!wrapper.current || !heroImage.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 30%",
      },
    });

    tl.fromTo(
      heroImage.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "elastic.in", delay: 1 }
    );
  }, []);

  return (
    <div
      className={`min-h-[80vh]   pt-[80px] w-[100%] mx-auto grid gap-y-4 place-items-center px-6 bg-no-repeat md:px-12 bg-left-top bg-contain pl-10 pr-10`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ref={wrapper}
    >
      {/* Banner */}
      <div className="w-[100%] md:w-fit py-8 flex flex-col gap-6">
        <div className="bg-bannerBg max-w-[100%] w-[100%] md:w-fit px-4 md:px-6 h-[44px] mx-auto flex justify-center items-center rounded-xl">
          <p className="text-[17px] font-[400] leading-[24px] text-bannerText text-center line-clamp-1  text-clip overflow-hidden">
            <span className="font-semibold">Eagle AI Labs:</span> Partnership
            and Co-Ownership of a U.S. Regulated Crypto Hedgefund. This enables
            us to launch a new product, TradeDividends &nbsp;
            <span className="font-semibold underline">
              <Link href={"#"}>Learn More</Link>
            </span>
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center w-[100%] md:w-84 justify-between">
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-[100%] md:w-1/2">
            <h1 className="text-[48px] md:text-[60px] lg:text-[72px] font-[400] leading-[1.2] bg-gradient-to-b from-heroTextGradientOne to-heroTextGradientTwo bg-clip-text text-transparent">
              Pioneering the Future of Digital Asset Investment
            </h1>

            <p className="text-[18px] text-[#FFFFFF]">
              Eagle AI Labs is revolutionizing crypto asset management through
              our ground-breaking partnership with a U.S.-regulated crypto hedge
              fund. This exclusive collaboration combines our advanced
              AI-powered BTC prediction technology with institutional-grade
              investment expertise.
            </p>

            <button className="rounded-full text-[16px] font-[400] leading-[21px] text-white w-[257px] h-[45px] bg-gradient-to-br from-[#1870F6] to-[#32FEFE]">
              Register your interest now
            </button>
          </div>

          {/* Hero Image */}
          <div
            ref={heroImage}
            className="relative w-[100%] max-w-[100%] opacity-0 md:w-full md:max-w-[435px] h-[500px] md:h-[817px]"
          >
            <Image
              src={attachCloudinaryPrefix(
                isMobile
                  ? "v1739986409/right_ufspbp.webp"
                  : "v1739954897/EAIPhone_2_a71ate.webp"
              )}
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
