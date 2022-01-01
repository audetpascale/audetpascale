/** @jsx jsx */
// noinspection ES6UnusedImports
import { Button, Input, jsx, Select } from "theme-ui";
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
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

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
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
    setPageSize,

    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <table {...getTableProps()} width="100%" sx={{ minWidth: 768 }}>
      <thead>
        <tr>
          <th colSpan={columns.length}>
            <GlobalFilter
              globalFilter={state.globalFilter}
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {column.isSorted && (column.isSortedDesc ? " 🔽" : " 🔼")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} sx={{ fontFamily: "system-ui" }}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={columns.length}>
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
            <div sx={{ display: "inline-block", width: 96 }}>
              <Select
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize} lignes
                  </option>
                ))}
              </Select>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
