/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, jsx } from "theme-ui";
import PropTypes from "prop-types";

const Bed = ({ bed, length }) => {
  const height = `${bed.quantity * 2}em`;
  return (
    <Box sx={{ height: height, lineHeight: height }}>
      {bed.crop && bed.crop.quantity} {bed.name} : {bed.crop && bed.crop.cols} x{" "}
      {bed.crop && bed.crop.rowsInCm.toFixed(1)}cm
    </Box>
  );
};

export default Bed;

Bed.propTypes = {
  bed: PropTypes.object,
};
