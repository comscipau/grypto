/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8247E5",
        secondary: "#651FDA",
        myToggle: "#4ED938",
      },
      fontFamily: {
        causten: ["Causten", "sans-serif"],
        zeroestwo: ["ZeroesTwo"],
        spacegrotesk: ["SpaceGrotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        footer: "url('/src/assets/footer-bg.png')",
        footerMobile: "url('/src/assets/footer-mobile-bg.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
