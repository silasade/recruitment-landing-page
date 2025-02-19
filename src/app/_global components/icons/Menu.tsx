import React, { SVGProps } from "react";

function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || "36"}
      height={props.height || "36"}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.3999 29.25L30.5999 29.25M30.5999 18.45H5.3999M30.5999 6.75L5.3999 6.75"
        stroke="url(#paint0_linear_1_336)"
        strokeWidth="4"
        strokeLinecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_336"
          x1="14.3999"
          y1="6.75"
          x2="34.939"
          y2="17.3129"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.535057" stopColor="#1870F6" />
          <stop offset="1" stopColor="#32FEFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Menu;
