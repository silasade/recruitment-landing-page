"use client";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function TradeDividendSection() {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const list: string[] = [
    "Exclusive USDC rewards for $EAI stakers",
    "Direct benefit from institutional trading success",
    "Sustainable yield generation backed by hedge fund performance",
  ];
  useEffect(() => {
    if (!wrapper.current || !content.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 65%",
        scrub: 0.5,
      },
    });

    tl.fromTo(
      content.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={wrapper}
      className="flex flex-col-reverse md:flex-row p-[20px] md:p-[60px] gap-[16px]] md:gap-[32px] w-full  justify-center items-center"
    >
      <div ref={content} className="flex flex-col gap-6">
        <h2 className="text-[36px] md:text-[48px] font-[400] leading-[52px] md:leading-[72px] text-white">
          Trade Dividends Rewarding our comunity{" "}
        </h2>
        <h5 className="text-[18px] font-[400] leading-[27px] text-white">
          This institutional partnership enables the launch of our innovative
          TradeDividends program:
        </h5>
        <ul>
          {list.map((items, index) => (
            <li
              key={index}
              className="text-textPrimary text-[16px] font-[400] leading-[21px] list-disc ml-4"
            >
              {items}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full w-full md:max-w-1/2 flex-auto h-[279px] md:h-[510px]">
        <Image
          src={attachCloudinaryPrefix("v1739954901/Trade3_1_1_1_axlboi.webp")}
          alt="era image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default TradeDividendSection;
