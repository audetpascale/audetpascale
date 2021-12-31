/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, jsx, Link, Text } from "theme-ui";
import { useSelector } from "react-redux";
import React from "react";
import CropRotation from "./CropRotation";
import Perennial from "./Perennial";

const Plan = () => {
  const rotateState = useSelector((state) => state.rotate);

  return (
    <span>
      <Heading as="h2">Plan du jardin</Heading>
      <Text>
        Mes plans de jardin sont basés sur le livre{" "}
        <Link href="https://lejardiniermaraicher.com/publications/category-publications-le-jardinier-maraicher/">
          Le jardinier-maraîcher
        </Link>{" "}
        de Jean-Martin Fortier. Bien que j'établisse une douzaine de parcelles,
        il vous faut un nombre de parcelles qui se divise par quatre. La
        rotation se fera en fonction de ces parcelles afin de permettre un repos
        de la terre et de se débarrasser des maladies qu'il y aurait eu pendant
        l'année pour une famille de plantes.
      </Text>
      <CropRotation />
      <Perennial />
    </span>
  );
};

export default Plan;
