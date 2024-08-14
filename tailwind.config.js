/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "uiblack": "#343434",
        "uibrown": "#8E8B82",
        "uicream": "#E9DCBE",
        "uismoke": "#F3F3F3",
      }
    },
  },
  plugins: [],
}