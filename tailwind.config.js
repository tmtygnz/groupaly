const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#201C1D",
        "maroonish-normal": "#2A2626",
        "maroonish-hover": "#2B2727",
        "maroonish-active": "#363030",
      },
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
