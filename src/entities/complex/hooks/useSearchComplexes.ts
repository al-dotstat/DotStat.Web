import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { ComplexFiltersParams } from "@/shared/types/complex";
import { useQuery } from "@tanstack/react-query";

const useSearchComplexes = (data: ComplexFiltersParams) => {
  return useQuery({
    queryKey: complexKeys.search(data),
    queryFn: () => complexesController.searchComplexes(data),
  });
};

export default useSearchComplexes;
