/** @jsx jsx */
// noinspection ES6UnusedImports
import { Box, jsx } from "theme-ui";
import PropTypes from "prop-types";

const Bed = ({ bed, length }) => {
  const height = `${bed.quantity * 2}em`;
  return (
    <Box sx={{ height: height, lineHeight: height }}>
      {bed.plantQuantity && bed.plantQuantity.quantity} {bed.name} :{" "}
      {bed.plantQuantity && bed.plantQuantity.cols} (
      {bed.plantQuantity && bed.plantQuantity.colsInCm.toFixed(1)}cm) x{" "}
      {bed.plantQuantity && bed.plantQuantity.rows.toFixed(1)} (
      {bed.plantQuantity && bed.plantQuantity.rowsInCm.toFixed(1)}cm)
    </Box>
  );
};

export default Bed;

Bed.propTypes = {
  bed: PropTypes.object,
};
