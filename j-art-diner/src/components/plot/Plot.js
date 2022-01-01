/** @jsx jsx */
// noinspection ES6UnusedImports
import { Card, Grid, Heading, jsx } from "theme-ui";
import PropTypes from "prop-types";
import Bed from "./Bed";

const Plot = ({ plot, ...rest }) => {
  let grid;
  if (Array.isArray(plot.beds)) {
    grid = (
      <Grid
        {...rest}
        columns={1}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "system-ui",
        }}
      >
        <Card>
          {plot.beds.map((bed, index) => (
            <Bed key={index} bed={bed} length={plot.length / 16} />
          ))}
        </Card>
      </Grid>
    );
  } else {
    grid = (
      <Grid
        {...rest}
        columns={2}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "system-ui",
        }}
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
      </Grid>
    );
  }
  return (
    <div>
      <Heading as="h3" key={`${plot.name}.H`}>
        {plot.name} : L {plot.length}cm x l {plot.width}cm
      </Heading>
      {grid}
    </div>
  );
};

export default Plot;

Plot.propTypes = {
  plot: PropTypes.object,
};
