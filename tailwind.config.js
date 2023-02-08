/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      fredoka: ["Fredoka One", "cursive"],
      mulish: ["Mulish", "sans-serif"],
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
