/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, Heading, jsx, Text } from "theme-ui";
import { Link } from "gatsby";
import React from "react";

const GenericNotFound = () => {
  return (
    <Flex
      sx={{
        backgroundImage: "url('/img/take-a-nap.jpg')",
        backgroundPosition: "center",
        flex: 1,
      }}
    >
      <Flex
        sx={{
          m: "auto",
          width: 1024,
        }}
      >
        <Heading as="h1">404 Fichier introuvable</Heading>
        <Text sx={{ color: "#fff", pt: "50vh" }}>
          Je suis désolée,{" "}
          <span role="img" aria-label="sleeping emoji">
            😔💤
          </span>{" "}
          je{" "}
          <big>
            <i>take a nap</i>
          </big>
          .
        </Text>
        <span sx={{ mx: "auto" }} />
        <Link to="/" sx={{ color: "primary", pt: "50vh" }}>
          Accueil
        </Link>
      </Flex>
    </Flex>
  );
};

export default GenericNotFound;
