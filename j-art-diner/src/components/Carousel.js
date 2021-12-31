/** @jsx jsx */
// noinspection ES6UnusedImports
import { Button, jsx } from "theme-ui";
import { usePagination, useTable } from "react-table";
import Plot from "./rotate/Plot";

const Carousel = ({ columns, data }) => {
  const {
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    state,
  } = useTable({ columns, data, initialState: { pageSize: 1 } }, usePagination);

  return (
    <div>
      {page.map((row) => {
        return <Plot key={row.index} plot={row.original} />;
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
      <span>
        Page{" "}
        <strong>
          {state.pageIndex + 1} de {pageOptions.length}
        </strong>{" "}
      </span>
    </div>
  );
};

export default Carousel;
