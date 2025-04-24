/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // <-- This line is important!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
