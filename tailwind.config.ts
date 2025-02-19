import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        destopBbackground: "#000614",
        mobileBackground: "#000000",
        heroTextGradientOne: "#0207F7",
        heroTextGradientTwo: "#14FFFF",

        linearGradientOne: "#1870F6",
        linearGradientTwo: "#32FEFE",
        cardBg: "#FFFFFF33",
        bannerBg: "#00F6FFDE",
        bannerText: "#24304B",
        textPrimary: "#8CA0B3",
        textSecondary: "#6B7280",
      },
    },
  },
  plugins: [],
} satisfies Config;
