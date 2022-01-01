/** @jsx jsx */
// noinspection ES6UnusedImports
import { Button, Input, jsx } from "theme-ui";
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useTable,
} from "react-table";
import Plot from "./plot/Plot";
import React from "react";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Input
      value={value?.toString() ?? ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Rechercher dans ${count} enregistrements…`}
    />
  );
}

const Carousel = ({ columns, data }) => {
  const {
    getTableProps,
    prepareRow,
    page,

    preGlobalFilteredRows,
    setGlobalFilter,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    state,
  } = useTable(
    { columns, data, initialState: { pageSize: 1 } },
    useGlobalFilter,
    usePagination
  );

  return (
    <div {...getTableProps()}>
      <GlobalFilter
        globalFilter={state.globalFilter}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
      />
      {page.map((row) => {
        prepareRow(row);
        return (
          <Plot key={row.index} plot={row.original} {...row.getRowProps()} />
        );
      })}
      <Button
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        sx={{ borderRadius: "sketchy0" }}
      >
        {"⫷"}
      </Button>{" "}
      <Button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        sx={{ borderRadius: "sketchy1" }}
      >
        {"<"}
      </Button>{" "}
      <Button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        sx={{ borderRadius: "sketchy3" }}
      >
        {">"}
      </Button>{" "}
      <Button
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        sx={{ borderRadius: "sketchy2" }}
      >
        {"⫸"}
      </Button>{" "}
      Page{" "}
      <strong>
        {state.pageIndex + 1} de {pageOptions.length}
      </strong>{" "}
    </div>
  );
};

export default Carousel;
