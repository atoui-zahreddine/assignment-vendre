import useFetchEmployeesWithPagination from "./hooks/useFetchEmployeesWithPagination";
import { Employees, Pagination } from "./components";

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
    loading,
  } = useFetchEmployeesWithPagination();

  return (
    <div className="p-4">
      <Employees loading={loading} employees={employees} />

      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        hasPrev={hasPrev}
        currentPage={currentPage}
        pages={pages}
        hasNext={hasNext}
        goToPage={goToPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;
