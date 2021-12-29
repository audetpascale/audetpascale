import { configureStore } from "@reduxjs/toolkit";
import rotateReducer from "./components/rotate/rotateSlice";
import dataReducer from "./components/static-data/dataSlice";

export default configureStore({
  reducer: {
    rotate: rotateReducer,
    data: dataReducer,
  },
});
