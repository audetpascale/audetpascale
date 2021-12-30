/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, jsx } from "theme-ui";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "@reach/router";

const GenericLayout = ({
  children,
  defaultSiteMetadata,
  menuItems,
  headerImage,
  footerImage,
  title,
  description,
  image,
  ogType,
  year,
}) => {
  const seo = {
    title:
      (title == null ? "" : `${title} | `) +
      defaultSiteMetadata.site.siteMetadata.title,
    description:
      description || defaultSiteMetadata.site.siteMetadata.description,
    image: `${defaultSiteMetadata.site.siteMetadata.siteUrl}${
      image || defaultSiteMetadata.site.siteMetadata.image
    }`,
    url: `${defaultSiteMetadata.site.siteMetadata.siteUrl}${
      useLocation().pathname
    }`,
  };

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Helmet title={seo.title}>
        <html lang="fr-ca" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content={ogType || "website"} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={
            defaultSiteMetadata.site.siteMetadata.description.twitterUsername
          }
        />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link
          href="https://fonts.googleapis.com/css?family=Architects+Daughter|Montserrat:400,700|Poppins:400,700,900|Roboto:400,600"
          rel="stylesheet"
        />
      </Helmet>
      <Header items={menuItems} homeImage={headerImage} />
      <main
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {children}
      </main>
      <Footer
        author={defaultSiteMetadata.site.siteMetadata.author}
        image={footerImage}
        title={defaultSiteMetadata.site.siteMetadata.title}
        year={year}
      />
    </div>
  );
};

export default GenericLayout;

GenericLayout.propTypes = {
  defaultSiteMetadata: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  footerImage: PropTypes.element.isRequired,
  headerImage: PropTypes.element.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogType: PropTypes.string,
  year: PropTypes.number.isRequired,
};
