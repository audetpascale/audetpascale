import { useSelector } from "react-redux";
import Longueur from "./Length";
import React from "react";
import Temperature from "./Temperature";

const Convert = () => {
  const convertState = useSelector((state) => state.convert);

  return (
    <div>
      <h2>Convertir</h2>
      <h3>Longueur</h3>
      <Longueur convertState={convertState} />
      <h3>Température</h3>
      <Temperature convertState={convertState} />
    </div>
  );
};

export default Convert;
