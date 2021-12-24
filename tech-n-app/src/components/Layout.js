import { GenericLayout } from "@audetpascale/common";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children, ...rest }) => {
  const defaultSiteMetadata = useStaticQuery(graphql`
    query defaultSiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          image
          language
          siteUrl
          twitterUsername
        }
      }
    }
  `);

  const menuItems = [
    { link: "/tags", title: "Étiquette" },
    { link: "/about", title: "À propos" },
  ];

  return (
    <GenericLayout
      defaultSiteMetadata={defaultSiteMetadata}
      menuItems={menuItems}
      headerImage={
        <StaticImage
          alt="logo"
          src="../images/icon.png"
          width={48}
          height={48}
        />
      }
      footerImage={
        <StaticImage
          alt="logo"
          src="../images/icon.png"
          width={20}
          height={20}
        />
      }
      {...rest}
      year={2013}
    >
      {children}
    </GenericLayout>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogType: PropTypes.string,
};
