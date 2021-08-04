import { Box, Flex, Input, Label } from "theme-ui";
import { useDispatch } from "react-redux";
import React from "react";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "./convertSlice";

const Temperature = ({ convertState }) => {
  const dispatch = useDispatch();
  const changeCelsius = ({ target: { value } }) => {
    dispatch(convertFahrenheitToCelsius(value));
  };

  const changeFahrenheit = ({ target: { value } }) => {
    dispatch(convertCelsiusToFahrenheit(value));
  };

  return (
    <Flex>
      <Box p={2}>
        <Label htmlFor="celsius">Celsius</Label>
        <Input
          name="celsius"
          onChange={changeFahrenheit}
          value={convertState.celsius}
        />{" "}
      </Box>
      <Box p={2}>
        <Label htmlFor="fahrenheit">Fahrenheit</Label>
        <Input
          name="fahrenheit"
          onChange={changeCelsius}
          value={convertState.fahrenheit}
        />
      </Box>
    </Flex>
  );
};

export default Temperature;
