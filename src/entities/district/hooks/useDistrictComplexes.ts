import districtsController from "@/shared/api/districtsController";
import { districtKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useDistrictComplexes = (id: number) => {
  return useQuery({
    queryKey: districtKeys.complexes(id),
    queryFn: () => districtsController.getDistrictComplexes(id),
  });
};

export default useDistrictComplexes;
