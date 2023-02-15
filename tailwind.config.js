/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#41c3e5",
        secondary: "#ff7e4c",
        heading: "#2a445f",
        text: "#4e4c55",
        blue: "#4e3bf0",
        purple: "#803bf0",
        yellow: "#fcc845",
        lightGrey: "#fafafa",
        lightBlue: "#eaf6f6",
        lightOrange: "#feead1",
      },
      fontFamily: {
        fredoka: ["Fredoka One", "cursive"],
        mulish: ["Mulish", "sans-serif"],
      },
      screens: {
        /* sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
        */

        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  daisyui: {
    themes: [
      {
        primaryTheme: {
          primary: "#41c3e5",
          secondary: "#ff7e4c",
          accent: "#43aee1",
          neutral: "#172b34",
          info: "#0dcaf0",
          success: "#198754",
          warning: "#ffc107",
          error: "#dc3545",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
