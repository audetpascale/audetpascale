const config = require("../common/gatsby-config.js");
const _ = require("lodash");

module.exports = _.merge(config, {
  siteMetadata: {
    title: "Utilitaire de Pascale",
    description: "Les utilitaires de Pascale",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-well-known",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
});
