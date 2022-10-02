import useFetchEmployeesWithPagination from "./hooks/useFetchEmployeesWithPagination";
import Pagination from "./components/Pagination";
import Employees from "./components/Employees";

function App() {
  const {
    employees,
    pages,
    nextPage,
    prevPage,
    page: currentPage,
    goToPage,
    hasPrev,
    hasNext,
    totalCount,
    pageSize,
  } = useFetchEmployeesWithPagination();

  return (
    <div className="p-4">
      <Employees employees={employees} />

      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        hasPrev={hasPrev}
        currentPage={currentPage}
        goToPage={goToPage}
        prevPage={prevPage}
        pages={pages}
        hasNext={hasNext}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;
