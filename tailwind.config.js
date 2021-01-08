const production = !process.env.ROLLUP_WATCH;
const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  plugins: [forms],
  theme: {
    fontFamily: {
      sans: "Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      reepolee: {
        500: "#b40000",
        600: "#9c0000",
        700: "#750000",
      },
      gray: colors.trueGray,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
    },
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};
