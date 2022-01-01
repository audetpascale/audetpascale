/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, jsx, Text } from "theme-ui";
import { useSelector } from "react-redux";
import Carousel from "../Carousel";
import React from "react";

const Annuals = () => {
  const plotState = useSelector((state) => state.plot);

  return (
    <div>
      <Heading as="h3">Rotation</Heading>
      <Text>
        Bien que j'établisse une douzaine de parcelles, il vous faut un nombre
        de parcelles qui se divise par quatre. La rotation se fera en fonction
        de ces parcelles afin de permettre un repos de la terre et de se
        débarrasser des maladies qu'il y aurait eu pendant l'année pour une
        famille de plantes.
      </Text>
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
              id: "firstCropName",
              accessor: (row) => row.beds.first.map(({ name }) => name).flat(),
            },
            {
              id: "lastCropName",
              accessor: (row) => row.beds.last.map(({ name }) => name).flat(),
            },
          ],
          []
        )}
        data={React.useMemo(() => plotState.annuals, [plotState])}
      />
    </div>
  );
};

export default Annuals;
