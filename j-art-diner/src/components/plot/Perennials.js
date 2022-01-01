/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, jsx, Text } from "theme-ui";
import { useSelector } from "react-redux";
import Carousel from "../Carousel";
import React from "react";

const Perennials = () => {
  const plotState = useSelector((state) => state.plot);

  return (
    <div>
      <Heading as="h3">Vivace</Heading>
      <Text>...</Text>
      <Carousel
        columns={React.useMemo(
          () => [
            {
              accessor: "name",
            },
            {
              accessor: "length",
            },
            {
              accessor: "width",
            },
            {
              accessor: "beds",
            },
            {
              id: "cropName",
              accessor: (row) => row.beds.map(({ name }) => name).flat(),
            },
          ],
          []
        )}
        data={React.useMemo(() => plotState.perennials, [plotState])}
      />
    </div>
  );
};

export default Perennials;
