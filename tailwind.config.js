/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#8a02d4",
        mainColor1: "#a500ff",

        darkPurple: "#000",
        darkPurple1: "#28063b",
        darkPurple2: "#380b52",

        porcelain: "#fcfafa",
        porcelain1: "#f1f0f2",
        porcelain2: "#c9c5c5",
      },
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
