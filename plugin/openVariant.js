const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
  addVariant("peer-open", ":merge(.peer).open ~ & ");

  //We're creating a personalised class called group-open and peer-open witn a new .open class
  //for the peer we're using the sibling selector with the ~ since we're gonna use the sibling
  //element of the peer class

});

module.exports = openVariant;
