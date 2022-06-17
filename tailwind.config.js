/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        primaryTheme: {
          primary: "#fc5b62",
          secondary: "#1d4684",
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
