/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, jsx, Link, Text } from "theme-ui";
import Annuals from "./Annuals";
import Perennials from "./Perennials";

const Plan = () => {
  return (
    <div>
      <Heading as="h2">Plan</Heading>
      <Text>
        Mes plans de jardin sont basés sur le livre{" "}
        <Link href="https://lejardiniermaraicher.com/publications/category-publications-le-jardinier-maraicher/">
          Le jardinier-maraîcher
        </Link>{" "}
        de Jean-Martin Fortier.
      </Text>
      <Annuals />
      <Perennials />
    </div>
  );
};

export default Plan;
