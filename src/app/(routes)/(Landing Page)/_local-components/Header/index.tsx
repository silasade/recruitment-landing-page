"use client";
import { attachCloudinaryPrefix } from "@/app/hooks/attachCloudinaryPrefix";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import Menu from "@/app/_global components/icons/Menu";

type LinkType = {
  name: string;
  href: string;
};

const links: LinkType[] = [
  { name: "Products", href: "#" },
  { name: "Partnerships", href: "#" },
  { name: "Sponsorships", href: "#" },
  { name: "Education", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Team", href: "#" },
  { name: "Trade dividend", href: "#" },
];

function Header() {
  const pathName = usePathname().toLowerCase();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);

  // Toggle the menu when clicking on the hamburger
  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  // Run the GSAP animation when the menu opens or closes
  useEffect(() => {
    if (isMobile && wrapperRef.current && linksRef.current) {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.5 },
      });

      if (menuOpen) {
        tl.to(wrapperRef.current, {
          height: "100vh",
          backgroundColor: "#131B2F",
        }).to(linksRef.current, { opacity: 1 });
      } else {
        tl.to(linksRef.current, { opacity: 0 }).to(wrapperRef.current, {
          height: "fit-content",
          backgroundColor: "transparent",
        });
      }
    }
  }, [isMobile, menuOpen]);

  return (
    <div
      ref={wrapperRef}
      className="z-10000 gap-[24px] gap-[0px] flex-col lg:flex-row p-[20px] lg:p-0 bg-transparent absolute top-0 lg:bg-[#131B2F] w-full h-[97px] flex items-center gap-4 justify-start lg:justify-center"
    >
      {/* Logo */}
      <div className="relative w-[35px] lg:w-[247px] h-[35px] self-start lg:self-center">
        <Image
          src={attachCloudinaryPrefix("v1739954901/logo_1_tbkfiq.webp")}
          alt="logo"
          fill
          className="object-cover hidden lg:inline-flex"
        />
        <Image
          src={attachCloudinaryPrefix("v1739954895/Frame_139_raau1q.webp")}
          alt="logo text"
          fill
          className="object-cover inline-flex lg:hidden"
        />
      </div>

      {/* Links */}
      <div
        ref={linksRef}
        className={`gap-4 flex-col self-start lg:self-center justify-self-start opacity-0 lg:opacity-100 lg:flex lg:flex-row transition-all ${
          menuOpen && isMobile && "flex opacity-100"
        }`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`text-[16px] leading-[24px] font-[500] ${
              pathName.includes(link.name.toLowerCase())
                ? "text-[#E3E8F3]"
                : "text-[#E3E8F380]"
            } hover:text-[#E3E8F3]`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Launch App Button */}
      <button className="hidden lg:block rounded-full text-[16px] font-[400] leading-[21px] text-white w-[149px] h-[45px] bg-gradient-to-br from-[#1870F6] to-[#32FEFE]">
        Launch App
      </button>

      {/* Mobile Menu Icon */}
      <div
        className="absolute top-[20px] right-[10px] block lg:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <Menu />
      </div>
    </div>
  );
}

export default Header;
