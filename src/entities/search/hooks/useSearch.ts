import searchController from "@/shared/api/searchController";
import { searchKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useSearch = (search: string) => {
  return useQuery({
    queryKey: searchKeys.search(search),
    gcTime: 5000,
    staleTime: 5000,
    queryFn: () => searchController.searchComplexesAndDevelopers(search),
  });
};

export default useSearch;
