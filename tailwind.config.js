const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        baige: "#EEEBDD",
        baige_red: "#D8B6A4",
        red: "#630000",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringWidth: ["active", "hover"],
      outline: ["active"],
      scale: ["hover"],
    },
  },
  plugins: [],
};
