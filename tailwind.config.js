/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "100%",
          sm: "95%",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px"
        },
      },
      colors: {
        first: "#d32a27",
        second: "#333",
        third: "#ffb713"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"]
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
