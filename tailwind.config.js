const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "web-orange": {
          50: "#fff4db",
          100: "#ffeabd",
          200: "#ffd57a",
          300: "#ffb005",
          350: "#f0a500",
          400: "#db9600",
          500: "#ad7600",
          600: "#855b00",
          700: "#6b4900",
          800: "#5c3f00",
          900: "#473100",
        },
        "electric-violet": {
          50: "#f5f1fe",
          100: "#efe7fd",
          200: "#e5d9fc",
          300: "#d1bdfa",
          400: "#ba9bf8",
          500: "#9d71f4",
          600: "#7f46f1",
          700: "#6320ee",
          800: "#5410da",
          900: "#450eb4",
        },
        "black-pearl": {
          50: "#edf6fc",
          100: "#e0effa",
          200: "#c6e1f6",
          300: "#9acaef",
          400: "#61ace5",
          500: "#288edc",
          600: "#1c6dab",
          700: "#155484",
          800: "#134972",
          900: "#0f3b5c",
          1100: "#082032",
        },
      },
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringWidth: ["active", "hover"],
    },
  },
  plugins: [],
};
