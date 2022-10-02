import { useState } from "react";
import useSafeUseEffect from "./useSafeUseEffect";
import { Employee } from "../common/types/Employee";

interface ApiResponse {
  data: Employee[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

const useFetchEmployeesWithPagination = () => {
  const [data, setData] = useState<ApiResponse>();
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const hasNext = pages > 1 && page <= pages - 1;
  const hasPrev = pages > 1 && page > 1;

  const nextPage = () => {
    setPage(page + 1 <= pages ? page + 1 : page);
  };

  const prevPage = () => {
    setPage(page - 1 > 0 ? page - 1 : page);
  };

  const goToPage = (newPage: number) => {
    if (newPage <= pages && newPage >= 1) setPage(newPage);
  };

  useSafeUseEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setData(data);
        setPages(data.total_pages);
      });
  }, [page]);

  return {
    employees: data?.data || [],
    totalCount: data?.total || 0,
    pageSize: data?.per_page || 0,
    pages,
    hasNext,
    hasPrev,
    page,
    goToPage,
    nextPage,
    prevPage,
  };
};

export default useFetchEmployeesWithPagination;
