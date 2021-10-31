const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg": "#201C1D",
        "brn-100": "#564E4E",
				"brn-200": "#4B4444",
				"brn-300": "#403A3A",
				"brn-400": "#363030",
				"brn-500": "#2A2626",
				"brn-600": "#201D1D",
				"brn-700": "#151313",
				"brn-800": "#151313"
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
