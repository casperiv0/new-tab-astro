/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // dark mode colors
        primary: "#000000",
        secondary: "#ffffff",
        hover: "#131313",
      },
    },
  },
  plugins: [],
};
