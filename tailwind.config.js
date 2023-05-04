const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("./plugin/openVariant" )],
};
