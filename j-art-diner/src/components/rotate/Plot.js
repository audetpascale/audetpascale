/** @jsx jsx */
// noinspection ES6UnusedImports
import {Box, Card, Grid, Heading, jsx} from "theme-ui";
import PropTypes from "prop-types";
import Bed from "./Bed";

const Plot = ({ plot }) => {
  return [
    <Heading as="h3" key={`${plot.name}.H`}>
      {plot.name} : {plot.length}
    </Heading>,
    <Grid
      columns={2}
      sx={{
        fontWeight: "bold",
        textAlign: "center",
      }}
      key={`${plot.name}.G`}
    >
      <Card>
        {plot.beds.first.map((bed, index) => (
          <Bed key={index} bed={bed} length={plot.length / 16} />
        ))}
      </Card>
      <Card bg="grey">
        {plot.beds.last.map((bed, index) => (
          <Bed key={index} bed={bed} length={plot.length / 16} />
        ))}
      </Card>
      <Box>
        Total:{" "}
        {plot.beds.first.reduce(
          (total, bed) => (bed.length * plot.length) / 16 + total,
          0
        )}
      </Box>
      <Box>
        Total:{" "}
        {plot.beds.last.reduce(
          (total, bed) => (bed.length * plot.length) / 16 + total,
          0
        )}
      </Box>
    </Grid>,
  ];
};

export default Plot;

Plot.propTypes = {
  plot: PropTypes.object,
};
