/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, jsx, Text } from "theme-ui";
import { Link } from "gatsby";
import React from "react";

const NotFound = () => {
  return (
    <div
      sx={{
        backgroundImage: "url('/img/take-a-nap.jpg')",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Container variant="main">
        <Heading as="h1">404 Fichier introuvable</Heading>
        <Text sx={{ mt: "50vh" }}>
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
        <Text sx={{ float: "right" }}>
          <Link to="/" sx={{ color: "primary" }}>
            Accueil
          </Link>
        </Text>
      </Container>
    </div>
  );
};

export default NotFound;
