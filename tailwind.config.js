const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: "class",
  plugins: [],
  theme: {
    fontFamily: {
      sans: "Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    },
    extend: {
      colors: {
        reepolee: {
          500: "#b40000",
          600: "#9c0000",
          700: "#750000",
        },
      },
    },
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};
