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
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const employees = data?.data || [];
  const totalCount = data?.total || 0;
  const pageSize = data?.per_page || 0;
  const pages = data?.total_pages || 0;
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
  const getEmployees = async () => {
    try {
      setLoading(true);
      const fetchResult = await fetch(
        `https://reqres.in/api/users?page=${page}`
      );
      const data = await fetchResult.json();
      setData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useSafeUseEffect(() => {
    getEmployees()
  }, [page]);

  return {
    employees,
    totalCount,
    pageSize,
    pages,
    hasNext,
    hasPrev,
    page,
    goToPage,
    nextPage,
    prevPage,
    loading,
  };
};

export default useFetchEmployeesWithPagination;
