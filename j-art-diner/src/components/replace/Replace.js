import { useSelector } from "react-redux";
import React from "react";
import RegEx from "./RegEx";

const Convert = () => {
  const replaceState = useSelector((state) => state.replace);

  return (
    <div>
      <h2>Remplacer</h2>
      <h3>Expression régulière</h3>
      <RegEx replaceState={replaceState} />
    </div>
  );
};

export default Convert;
