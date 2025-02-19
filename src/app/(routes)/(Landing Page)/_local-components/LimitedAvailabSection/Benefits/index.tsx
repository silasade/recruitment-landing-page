import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import Image from "next/image";
import React from "react";

function Benefits() {
  const list: string[] = [
    "Priority access when the fund launches",
    "Early information about TradeDividends",
    "Exclusive insights from our institutional trading team",
    "Special allocation opportunities",
  ];
  return (
    <div className="p-[20px] flex-col items-center md:items-start md:flex-row flex-auto flex gap-8 bg-cardBg rounded-lg">
      <div className="max-w-[100px] max-h-[100px] min-w-[100px] h-[100px] w-[100px] min-h-[100px] p-[3px] rounded-[100%] bg-gradient-to-br from-heroTextGradientOne to-heroTextGradientTwo flex items-center justify-center">
        <div className="w-full h-full bg-[#364651] rounded-full flex items-center justify-center">
          <div className="relative w-[30px] h-[62px] ">
            <Image
              src={attachCloudinaryPrefix("v1739954896/Group_1_1_iouugr.webp")}
              alt="key"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] rounded-lg">
        <h5 className="text-[18px] font-[400] text-center md:text-start leading-[27px] text-[#FFFFFF]">
          Benefits of signing up early
        </h5>

        <ul >
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

export default Benefits;
