const { default: plugin } = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    //we're "extending" the things TailwindCSS has with a custom animation
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },

        //The above is "an extension" that we customised for the bars to move
        //up and down at different speeds. So at 0% it will start the animation
        //at 0.5 of their original height, and at 50% they'll do 3x their height
        //to go back over to the 0.5.
      },
    },
    animation: {
      wavey: "wavey 1000ms linear infinite",
      // we take the "wavey" keyframe, and make it infinite in an animation
      //it'll implement a class called animate-wavey
    },
  },

  //
  plugins: [
    require("./plugin/openVariant"),
    require("./plugin/animationDelay"),
    require("./plugin/tableCaption"),
  ],
};
