import { configureStore } from "@reduxjs/toolkit";
import convertReducer from "./components/convert/convertSlice";

export default configureStore({
  reducer: {
    convert: convertReducer,
  },
});
