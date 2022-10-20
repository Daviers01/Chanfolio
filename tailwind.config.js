/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'chan-dark': "#111215",
        'chan-light': "#F2F7FC"
      },
      keyframes: {
        'side-bounce': {
          '0%, 100%': { left: '0' },
          '50%': { left: '-2px' },
        }
      }
    }
  },
  plugins: [],
}