/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#F6F7F8",
        secondary: "#1F4690",
        tertiary: "#DAE0E6",
      },
      fontFamily: {
        body: ["Montserrat"],
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        sm: ".875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "3rem",
        xxxl: "6rem",
      },

      animation: {
        "vanish-slow": "animate-[transition duration-0.05 opacity-0]",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar ": {
          display: "none;",
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
