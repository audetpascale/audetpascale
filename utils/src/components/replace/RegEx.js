import { Box, Flex, Input, Label } from "theme-ui";
import { useDispatch } from "react-redux";
import React from "react";
import { replaceFromRegEx } from "./replaceSlice";

const RegEx = ({ replaceState }) => {
  const dispatch = useDispatch();

  const replaceFrom = ({ target: { value } }) => {
    dispatch(replaceFromRegEx({ fromValue: value }));
  };

  const replaceRegEx = ({ target: { value } }) => {
    dispatch(replaceFromRegEx({ regEx: value }));
  };

  const replaceBy = ({ target: { value } }) => {
    dispatch(replaceFromRegEx({ replaceValue: value }));
  };

  return (
    <Flex>
      <Box p={2}>
        <Label htmlFor="from">Texte à remplacer</Label>
        <Input
          name="from"
          onChange={replaceFrom}
          value={replaceState.fromValue}
        />{" "}
      </Box>
      <Box p={2}>
        <Label htmlFor="regEx">Expression régulière</Label>
        <Input
          name="regEx"
          value={replaceState.regEx}
          onChange={replaceRegEx}
        />
      </Box>
      <Box p={2}>
        <Label htmlFor="by">Remplacé par</Label>
        <Input name="by" value={replaceState.byValue} onChange={replaceBy} />
      </Box>
      <Box p={2}>
        <Label htmlFor="replaced">Résultat</Label>
        <Input
          name="replaced"
          value={replaceState.replacedRegEx}
          readOnly={true}
        />
      </Box>
    </Flex>
  );
};

export default RegEx;
