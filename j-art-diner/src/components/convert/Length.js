import { Box, Flex, Input, Label } from "theme-ui";
import { useDispatch } from "react-redux";
import React from "react";
import { convertFeetToMeter, convertMeterToFeet } from "./convertSlice";

const Temperature = ({ convertState }) => {
  const dispatch = useDispatch();
  const changeMeter = ({ target: { value } }) => {
    dispatch(convertFeetToMeter(value));
  };

  const changeFeet = ({ target: { value } }) => {
    dispatch(convertMeterToFeet(value));
  };

  return (
    <Flex>
      <Box p={2}>
        <Label htmlFor="meter">Mètre</Label>
        <Input
          name="meter"
          onChange={changeFeet}
          value={convertState.meter}
        />{" "}
      </Box>
      <Box p={2}>
        <Label htmlFor="feet">Pied</Label>
        <Input name="feet" onChange={changeMeter} value={convertState.feet} />
      </Box>
    </Flex>
  );
};

export default Temperature;
