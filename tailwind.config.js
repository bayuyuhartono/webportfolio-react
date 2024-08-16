/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "uiblack": "#303841",
        "uigrey": "#3A4750",
        "uiyellow": "#F6C90E",
        "uismoke": "#EEEEEE",
      }
    },
  },
  plugins: [],
}