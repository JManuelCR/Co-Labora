import type { Config } from "tailwindcss";

export default {
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
      back: "#FEFEFE",
      gray: "#b5b5b5",
      black: "#0a0a0a",
      gray_ligth: "#eeeeee",
    },
    fontSize: {
      titles: "40px",
      titleMobil:"36px",
      sections: "32px",
      suTitles: "24px",
      text: "18px",
      light: "18px",
      small: "14px",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        acme: ["var(--font-acme)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xsm': '375px',
      'sm': '414px',
      'spc600': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config;
