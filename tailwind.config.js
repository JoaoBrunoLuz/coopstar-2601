/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066CC', // #06C
          darkBlue: '#20668B', // #20668b
          red: '#CC0000', // #C00
          darkRed: '#990000', // #900
          orange: '#FF6600', // #F60
        }
      }
    },
  },
  plugins: [],
}
