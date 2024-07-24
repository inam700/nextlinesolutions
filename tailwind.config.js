/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: "#433751",
        logoColorPrimary: "#F27380",
        logoColorSecondary: "#F0E3E3",
      },
    },
  },
  plugins: [],
};
