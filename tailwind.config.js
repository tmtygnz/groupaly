const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
        "normal-normal": "#0075FF",
				"normal-hover": "#0259BF",
				"normal-select": "#00489C",
				"red-normal": "#D64F31",
				"red-hover": "#BE5841",
				"red-select": "#AE5A47"
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      outline: ["active"],
    },
  },
  plugins: [],
};
