/** @jsx jsx */
// noinspection ES6UnusedImports
import { Heading, Input, jsx, Label, Link, Text } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Table from "../Table";
import { calculateExpectedQuantity, convertAutonomy } from "./cropSlice";
import { calculateCropQuantityPerBed } from "../plot/plotSlice";

const Crops = () => {
  const cropState = useSelector((state) => state.crop);
  const plotState = useSelector((state) => state.plot);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCropQuantityPerBed(cropState));
  }, [dispatch, cropState]);

  dispatch(calculateExpectedQuantity(plotState));

  const changeAutonomy = ({ target: { value } }) => {
    dispatch(convertAutonomy(value));
  };

  return (
    <div>
      <Heading as="h2">Culture</Heading>
      <Text>
        Ces données sont principalement basés sur le site des{" "}
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
              Header: "Nom",
              accessor: "name",
              Cell: ({ row: { original } }) => (
                <Link href={original.link}>{original.name}</Link>
              ),
            },
            {
              Header: "Longueur",
              accessor: "length",
            },
            {
              Header: "Largeur",
              accessor: "width",
            },
            {
              Header: "si quinconce",
              accessor: "staggeredWidth",
            },
            {
              Header: "Profondeur",
              accessor: "depth",
            },
            {
              Header: () => (
                <Label>
                  Autonomie pour{" "}
                  <Input
                    defaultValue={10}
                    min={1}
                    onChange={changeAutonomy}
                    placeholder="personnes"
                    sx={{ lineHeight: 1, height: 24, width: 48 }}
                    type="number"
                  />
                </Label>
              ),
              accessor: "autonomy",
              disableSortBy: true,
            },
            {
              Header: "Planifiées",
              accessor: "expectedQuantity",
            },
          ],
          []
        )}
        data={React.useMemo(() => cropState.crops, [cropState])}
      />
    </div>
  );
};

export default Crops;
