/** @jsx jsx */
// noinspection ES6UnusedImports
import { Flex, Heading, jsx, Link, Text } from "theme-ui";
import React from "react";

const image = require("../images/take-a-nap.jpg");

const GenericNotFound = () => {
  return (
    <Flex
      sx={{
        backgroundImage: `url(${image.default})`,
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
        <Link href="/" sx={{ color: "primary", pt: "50vh" }}>
          Accueil
        </Link>
      </Flex>
    </Flex>
  );
};

export default GenericNotFound;
