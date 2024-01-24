const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { parseColor } = require("tailwindcss/lib/util/color");

/** Converts HEX color to RGB */
const toRGB = (value: any) => {
  return parseColor(value).color.join(" ");
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs2: "100px",
      xs: "320px",
      sm2: "400px",
      sm: "450px",
      md: "768px",
      lg: "992px",
      container: "1200px",
    },
    extend: {
      linearGradientColors: {
        "border-gradient": ["#E70FAA", "#00C0FD"],
        "text-gradient": ["#13B0F5", "#E70FAA"],
      },
      colors: {
        white: "#FFFFFF",
        gray: "#666666",
        blue: "#42446E",
        black: "#000000",
        pink: "#E70FAA",
        aqua: "#00C0FD",
        "gray-100": "#D9D9D9",
        "gray-200": "#A7A7A7",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        darkmode: {
          500: "rgb(var(--color-darkmode-500) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-gradients"),
    plugin(function ({ addBase, matchUtilities }: any) {
      addBase({
        // Default colors
        ":root": {
          "--color-primary": toRGB("#FFFFFF"),
        },
        // Default dark-mode colors
        ".dark": {
          "--color-primary": "25, 25, 25",
          "--color-darkmode-500": "54, 54, 54",
        },
      });
      // Animation delay utilities
      matchUtilities(
        {
          "animate-delay": (value: any) => ({
            "animation-delay": value,
          }),
        },
        {
          values: (() => {
            const values = {};
            for (let i = 1; i <= 50; i++) {
              // @ts-ignore
              values[i * 10] = `${i * 0.1}s`;
            }
            return values;
          })(),
        },
      );

      // Animation fill mode utilities
      matchUtilities(
        {
          "animate-fill-mode": (value: any) => ({
            "animation-fill-mode": value,
          }),
        },
        {
          values: {
            none: "none",
            forwards: "forwards",
            backwards: "backwards",
            both: "both",
          },
        },
      );
    }),
  ],
};
