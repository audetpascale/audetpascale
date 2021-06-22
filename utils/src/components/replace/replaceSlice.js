import { createSlice } from "@reduxjs/toolkit";

export const replaceSlice = createSlice({
  name: "replace",
  initialState: {
    fromValue: "",
    regEx: "",
    replaceValue: "",
    replacedRegEx: "",
  },
  reducers: {
    replaceFromRegEx: (state, { payload }) => {
      state.fromValue = payload.fromValue ?? state.fromValue;
      state.regEx = payload.regEx ?? state.regEx;
      state.replaceValue = payload.replaceValue ?? state.replaceValue;

      state.replacedRegEx = state.fromValue.replace(
        RegExp(state.regEx, "g"),
        state.replaceValue
      );
    },
  },
});

export const { replaceFromRegEx } = replaceSlice.actions;

export default replaceSlice.reducer;
