/** @jsx jsx */
// noinspection ES6UnusedImports
import {Heading, jsx, Text} from "theme-ui";
import Plot from "./Plot";
import {useSelector} from "react-redux";

const CropRotation = () => {
  const rotateState = useSelector((state) => state.rotate);

  return (
    <span>
      <Heading as="h2">Plan des jardins</Heading>
      <Text>bleble</Text>
      {rotateState.plots.map((plot, index) => (
        <Plot key={index} plot={plot} />
      ))}
    </span>
  );
};

export default CropRotation;
