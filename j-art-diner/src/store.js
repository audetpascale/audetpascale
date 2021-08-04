import { configureStore } from "@reduxjs/toolkit";
import convertReducer from "./components/convert/convertSlice";
import replaceReducer from "./components/replace/replaceSlice";

export default configureStore({
  reducer: {
    convert: convertReducer,
    replace: replaceReducer,
  },
});
