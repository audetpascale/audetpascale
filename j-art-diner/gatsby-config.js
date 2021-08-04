const config = require("../common/gatsby-config.js");
const _ = require("lodash");

module.exports = _.merge(config, {
  siteMetadata: {
    title: "Utilitaire de Pascale",
    description: "Les utilitaires de Pascale",
  },
  plugins: ["gatsby-plugin-well-known"],
});
