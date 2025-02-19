"use client";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function NewEraSection() {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const image = useRef<HTMLDivElement | null>(null);

  const list: string[] = [
    "Exclusive licensing of Eagle AI Labs' proprietary BTC price prediction algorithms",
    "Significant equity stake in a fully regulated U.S. hedge fund",
    "Management team with proven track record of managing billions in AUM",
    "Full compliance with U.S. regulatory requirements",
    "Strategic timing aligned with anticipated favourable U.S. regulatory environment",
  ];
  useEffect(() => {
    if (!wrapper.current || !content.current || !image.current) return;

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
    )
  }, []);

  return (
    <div
      ref={wrapper}
      className="flex flex-col md:flex-row p-[20px] md:p-[60px] gap-[16px] md:gap-[32px] w-full justify-center items-center"
    >
      <div
        ref={image}
        className="relative w-full md:max-w-[502px] h-[271px] md:h-[510px]"
      >
        <Image
          src={attachCloudinaryPrefix("v1739954904/Trade3_1_2_opm65m.webp")}
          alt="era image"
          fill
          className="object-cover"
        />
      </div>
      <div ref={content} className="flex flex-col gap-4 md:gap-6">
        <h2 className=" text-[36px] md:text-[48px] font-[400] leading-[54px] md:leading-[72px] text-white">
          A new era in crypto investment
        </h2>
        <h5 className="text-[18px] font-[400] leading-[27px] text-white">
          Our partnership represents a milestone in institutional crypto
          adoption, featuring:
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
    </div>
  );
}

export default NewEraSection;
