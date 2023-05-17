//We created a static class with addUtilities to be able to position
//the caption below the table

const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function ({ addUtilities }) {
  //the addUtilities let's us use static classes.
  addUtilities({
    ".caption-bottom": {
      ".caption-side": "bottom",
    },
    ".caption-top": {
      ".caption-side": "top",
    },
  });
});

module.exports = tableCaption;
