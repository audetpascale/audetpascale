/** @jsx jsx */
// noinspection ES6UnusedImports
import { jsx, Text } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";

const Footer = ({ author, image, title, year }) => {
  return (
    <footer
      sx={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        m: "auto",
        p: 2,
        variant: "styles.footer",
        width: [null, null, 768],
      }}
    >
      <Text>
        © {year} - {new Date().getFullYear()} {author}.
      </Text>
      <div sx={{ mx: "auto", minWidth: 16 }} />
      {image}
      <Text>
        {title} est propulsé par <a href="https://www.gatsbyjs.com/">Gatsby</a>{" "}
        et <a href="https://www.netlify.com/">Netlify</a>.
      </Text>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
