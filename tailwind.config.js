/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CCC",
        secondary: "#333",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"]
      },
    },
  },
  plugins: [],
}
