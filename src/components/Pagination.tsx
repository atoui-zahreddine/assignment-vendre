import { FunctionComponent } from "react";
import usePaginationRange from "../hooks/usePaginationRange";
import { DOTS } from "../utils/common";

interface Props {
  hasPrev: boolean;
  nextPage: () => void;
  prevPage: () => void;
  pages: number;
  currentPage: number;
  goToPage: (page: number) => void;
  hasNext: boolean;
  pageSize: number;
  totalCount: number;
}

const Pagination: FunctionComponent<Props> = ({
  hasPrev,
  nextPage,
  prevPage,
  pages,
  hasNext,
  goToPage,
  currentPage,
  pageSize,
  totalCount,
}) => {
  const paginationRange = usePaginationRange({
    pageSize,
    currentPage,
    totalCount,
  });

  if (pages === 0) return null;

  return (
    <div className="text-center">
      <nav>
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              type="button"
              disabled={!hasPrev}
              onClick={prevPage}
              className="disabled:opacity-50 disabled:cursor-not-allowed py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </button>
          </li>
          {paginationRange &&
            paginationRange.map((page, index) =>
              page === DOTS ? (
                <li
                  key={index}
                  className="text-gray-500 bg-white cursor-default py-2 px-3 leading-tight  border border-gray-300"
                >
                  {page}
                </li>
              ) : (
                <li key={index} onClick={() => goToPage(page as number)}>
                  <button
                    type="button"
                    className={`${
                      page === currentPage
                        ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        : "text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                    } cursor-pointer py-2 px-3 leading-tight  border border-gray-300  `}
                  >
                    {page}
                  </button>
                </li>
              )
            )}
          <li>
            <button
              type="button"
              disabled={!hasNext}
              onClick={nextPage}
              className="disabled:opacity-50 disabled:cursor-not-allowed py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
