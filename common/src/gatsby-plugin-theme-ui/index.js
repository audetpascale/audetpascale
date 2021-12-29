import { sketchy } from "@theme-ui/presets";

const theme = {
  ...sketchy,
  images: {
    ...sketchy.images,
    heading: {
      objectFit: "cover",
      width: "100%",
      objectPosition: "center",
      maxHeight: "25vh",
    },
  },
  layout: {
    ...sketchy.layout,
    container: {
      p: 3,
    },
  },
  lineHeights: {
    ...sketchy.lineHeights,
    heading: 2,
  },
  sizes: {
    ...sketchy.sizes,
    container: 1024,
  },
};

export default theme;
