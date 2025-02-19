import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import React from "react";
import Image from "next/image";
function Footer() {
  
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 gap-10 md:gap-20">
      <div className="relative w-[200px] h-[28px] ">
        <Image
          src={attachCloudinaryPrefix("v1739954901/logo_1_tbkfiq.webp")}
          alt="logo"
          fill
          className="object-cover"
        />
      </div>
      <div>Copyright © 2024 Eagle AI</div>
      <div className="relative w-[138px] h-[29px]">
        <Image
          src={attachCloudinaryPrefix(
            "v1739954898/Screenshot_2024-05-02_at_14.28_1_1_xvgm5y.webp"
          )}
          alt="social links"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Footer;
