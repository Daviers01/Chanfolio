/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Sono", "sans-serif"],
    },
    extend: {
      colors: {
        "chan-gray": "#1c2436",
        "chan-light": "#F2F7FC",
        "chan-primary": "#0d85df",
      },
      keyframes: {
        "side-bounce": {
          "0%, 100%": { left: "0" },
          "50%": { left: "-2px" },
        },
      },
    },
  },
  plugins: [],
};
