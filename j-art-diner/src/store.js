import { configureStore } from "@reduxjs/toolkit";
import plotReducer from "./components/plot/plotSlice";
import cropReducer from "./components/crop/cropSlice";

export default configureStore({
  reducer: {
    plot: plotReducer,
    crop: cropReducer,
  },
});
