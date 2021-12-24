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
      m: "auto",
    },
  },
};

export default theme;
