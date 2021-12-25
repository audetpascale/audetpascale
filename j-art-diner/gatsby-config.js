const config = require("@audetpascale/common/gatsby-config.js");
const _ = require("lodash");

let mergedImport = _.mergeWith(config, {
  siteMetadata: {
    title: "J'art diner",
    author: "Pascale Audet",
    description:
      "Mon art de jardiner pour le dîner. Apprenez et profitez de mes apprentissages et de mes erreurs - progressez avec moi !",
    siteUrl: "https://j-art-diner.audetpascale.com",
  },
});

mergedImport.plugins.push(
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1024,
            wrapperStyle: (fluidResult) =>
              `flex:${Math.round(fluidResult.aspectRatio)};`,
          },
        },
      ],
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: "./src/pages/blog/",
    },
    __key: "markdown-pages",
  }
);

module.exports = mergedImport;
