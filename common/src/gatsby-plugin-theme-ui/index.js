import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  images: {
    ...roboto.images,
    heading: {
      objectFit: "cover",
      width: "100%",
      objectPosition: "center",
      maxHeight: "25vh",
      m: "auto",
    },
  },
  layout: {
    ...roboto.layout,
    container: {
      p: 3,
    },
    main: {
      minHeight: "calc(100vh - 112px)",
      p: 3,
    },
  },
  lineHeights: {
    ...roboto.lineHeights,
    heading: 2,
  },
  sizes: {
    ...roboto.sizes,
    container: 1024,
  },
};

export default theme;
