const config = require("@audetpascale/common/gatsby-config.js");
const _ = require("lodash");

let mergedImport = _.mergeWith(config, {
  siteMetadata: {
    title: "Utilitaire de Pascale",
    description: "Les utilitaires de Pascale",
  },
});

mergedImport.plugins.push("gatsby-plugin-well-known");

module.exports = mergedImport;
