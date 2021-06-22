import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    celsius: 0,
    fahrenheit: 32,
    feet: 0,
    meter: 0,
  },
  reducers: {
    convertCelsiusToFahrenheit: (state, { payload }) => {
      state.celsius = payload;
      if (isNaN(state.celsius)) {
        state.fahrenheit = "Non Numérique";
      } else {
        state.fahrenheit = (Number(state.celsius) * 9) / 5 + 32;
      }
    },
    convertFahrenheitToCelsius: (state, { payload }) => {
      state.fahrenheit = payload;
      if (isNaN(state.fahrenheit)) {
        state.celsius = "Non Numérique";
      } else {
        state.celsius = ((Number(state.fahrenheit) - 32) * 5) / 9;
      }
    },
    convertFeetToMeter: (state, { payload }) => {
      state.feet = payload;
      if (isNaN(state.feet)) {
        state.meter = "Non Numérique";
      } else {
        state.meter = Number(state.feet) / 3.281;
      }
    },
    convertMeterToFeet: (state, { payload }) => {
      state.meter = payload;
      if (isNaN(state.meter)) {
        state.feet = "Non Numérique";
      } else {
        state.feet = Number(state.meter) * 3.281;
      }
    },
  },
});

export const {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
  convertFeetToMeter,
  convertMeterToFeet,
} = convertSlice.actions;

export default convertSlice.reducer;
