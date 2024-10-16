import districtsController from "@/shared/api/districtsController";
import { districtKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useAllDistricts = () => {
  return useQuery({
    queryKey: districtKeys.all,
    queryFn: districtsController.getAllDistricts,
  });
};

export default useAllDistricts;
