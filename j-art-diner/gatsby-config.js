const config = require("../common/gatsby-config.js");
const _ = require("lodash");

module.exports = _.merge(config, {
  siteMetadata: {
    title: "J'art diner",
    description:
      "Mon art de jardiner pour le dîner. Apprenez et profitez de mes apprentissages et de mes erreurs - progressez avec moi !",
  },
});
