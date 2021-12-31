/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, Input, jsx, Label, Link, Text } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Table from "../Table";
import { calculateExpectedQuantity, convertPlantAutonomies } from "./dataSlice";
import { calculateBedAmount } from "../rotate/rotateSlice";

const StaticData = () => {
  const dataState = useSelector((state) => state.data);
  const rotateState = useSelector((state) => state.rotate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBedAmount(dataState));
  }, [dispatch, dataState]);

  dispatch(calculateExpectedQuantity(rotateState));

  const changeAutonomy = ({ target: { value } }) => {
    dispatch(convertPlantAutonomies(value));
  };

  return (
    <span>
      <Heading as="h2">Données des plantes</Heading>
      <Text>
        Mes données de jardin sont principalement basés sur le site des{" "}
        <Link href="https://www.ecoumene.com/">jardins de l'écoumene</Link> et
        du livre{" "}
        <Link href="https://lejardiniermaraicher.com/publications/category-publications-le-jardinier-maraicher/">
          Le jardinier-maraîcher
        </Link>{" "}
        de Jean-Martin Fortier.
      </Text>
      <Table
        columns={React.useMemo(
          () => [
            {
              header: "Nom",
              accessor: "name",
              Cell: ({ row: { original } }) => (
                <Link href={original.link}>{original.name}</Link>
              ),
            },
            {
              header: "Longueur",
              accessor: "length",
            },
            {
              header: "Largeur",
              accessor: "width",
            },
            {
              header: "si quinconce",
              accessor: "staggeredWidth",
            },
            {
              header: "Profondeur",
              accessor: "depth",
            },
            {
              header: () => (
                <Label>
                  Autonomie pour{" "}
                  <Input
                    defaultValue={10}
                    min={1}
                    onChange={changeAutonomy}
                    placeholder="personnes"
                    sx={{ lineHeight: 1, height: 24, width: 64 }}
                    type="number"
                  />
                </Label>
              ),
              accessor: "autonomy",
              disableSortBy: true,
            },
            {
              header: "Quantité prévue",
              accessor: "expectedQuantity",
            },
          ],
          []
        )}
        data={React.useMemo(() => dataState.plants, [dataState])}
      />
    </span>
  );
};

export default StaticData;
