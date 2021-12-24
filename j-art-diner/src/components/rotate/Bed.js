/** @jsx jsx */
// noinspection ES6UnusedImports
import {Box, jsx} from "theme-ui";
import PropTypes from "prop-types";

const Bed = ({ bed, length }) => {
  const height = `${bed.length * 2}em`;
  return (
    <Box key={1} sx={{ height: height, lineHeight: height }}>
      {bed.name} : {Math.round(length * bed.length)}
    </Box>
  );
};

export default Bed;

Bed.propTypes = {
  bed: PropTypes.object,
};
