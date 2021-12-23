import { configureStore } from "@reduxjs/toolkit";
import rotateReducer from "./components/rotate/rotateSlice";

export default configureStore({
  reducer: {
    rotate: rotateReducer,
  },
});
