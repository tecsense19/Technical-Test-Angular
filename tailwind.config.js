/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "primary": "#17AF26",
      "secondary": "#05422C",
      "red-primary": "#EB2606"
    }
  },
  plugins: [],
}

