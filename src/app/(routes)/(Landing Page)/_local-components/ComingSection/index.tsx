"use client";

import React from "react";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import { useMediaQuery } from "react-responsive";

function ComingSection() {
  const isMobile = useMediaQuery({ query: "(min-width: 1024px)" });

  const list: string[] = [
    "Full fund details and officer announcements",
    "TradeDividends program specifics",
    "Institutional partnership roadmap",
    "Regulatory framework overview",
  ];
  const backgroundImageUrl = attachCloudinaryPrefix(
    "v1739967519/Vector_2_xw5zgp.webp"
  );
  return (
    <div className="relative z-10 bg-gradient-to-br from-[#1870F6] to-[#32FEFE] p-[20px] md:p-[60px] mg:pl-20 ">
      {/* Background Image Layer */}
      <div
        className="absolute inset-x-0 -top-10 -bottom-10 w-full bg-no-repeat bg-center bg-contain -z-10 opacity-25"
        style={{
          backgroundImage: isMobile ? `url(${backgroundImageUrl})` : "",
        }}
      ></div>

      <div className="flex flex-col gap-[15px] rounded-lg">
        <h5 className="text-[36px] md:text-[71px] leading-[54px] font-[400] leading-[108px] text-[#FFFFFF]">
          Coming Q1 2025
        </h5>

        <ul>
          {list.map((items, index) => (
            <li
              key={index}
              className="text-[#E3E8F3] text-[16px] font-[400] leading-[21px] list-disc ml-4"
            >
              {items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ComingSection;
