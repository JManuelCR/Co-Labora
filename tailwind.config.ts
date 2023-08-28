import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#A54729",
      secondary: "#E19C5B",
      third: "#FACCAD",
      white: "#FFFFFF",
      blue_800: "#37474F",
      blue_700: "#455A64",
      blue_500: "#607D8B",
      blue_300: "#90A4AE",
      back: "FEFEFE"
    },
    fontSize:{
      titles: "40px",
      sections: "32px",
      suTitles: "24px",
      text: "18px",
      light: "18px",
      small: "14px",
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-Poppins)'],
        acme: ['var(--font-Acme)'],
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/temporal-images/temporal-image-consult.webp')"
      },
    },
  },
  plugins: [],
};
export default config;
