const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      "fhalf": "3.125rem",
    },
    extend: {
			colors: {
        "normal-normal": "#31D655",
				"normal-hover": "#46C261",
				"normal-select": "#50AA64"
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
