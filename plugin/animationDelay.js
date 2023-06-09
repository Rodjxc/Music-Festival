//We created the animationDelay for the animation of the X in the
//hamburger menu when clicking on it

const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      //the matchUtilities let's us create dynamic classes

      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
      },
    },
  }
);

module.exports = animationDelay;
