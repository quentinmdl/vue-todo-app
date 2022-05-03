// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")()],
};
