/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React components
    "./public/index.html"         // also scan index.html
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue-600
        secondary: "#1f2937", // gray-800
        accent: "#10b981",    // emerald-500
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // clean modern font
      },
    },
  },
  plugins: [],
};
