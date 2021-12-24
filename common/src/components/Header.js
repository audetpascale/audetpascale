/** @jsx jsx */
// noinspection ES6UnusedImports
import { Flex, jsx, NavLink } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ homeImage, items }) => {
  return (
    <header
      sx={{
        alignItems: "center",
        backgroundColor: "muted",
        display: "flex",
        flexWrap: "wrap",
        m: "auto",
        variant: "styles.header",
        width: "100%",
      }}
    >
      <Flex
        as="nav"
        sx={{
          height: 56,
          lineHeight: 3,
          m: "auto",
          width: 1024,
        }}
      >
        <NavLink href="/" px={2}>
          {homeImage} Accueil
        </NavLink>
        <div sx={{ mx: "auto" }} />
        {items.map(({ title, link }, index) => (
          <NavLink key={index} href={link} px={2}>
            {title}
          </NavLink>
        ))}
      </Flex>
    </header>
  );
};

export default Header;

Header.propTypes = {
  homeImage: PropTypes.element.isRequired,
  items: PropTypes.array.isRequired,
};
