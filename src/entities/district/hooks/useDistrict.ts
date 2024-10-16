import districtsController from "@/shared/api/districtsController";
import { districtKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useDistrict = (id: number) => {
  return useQuery({
    queryKey: districtKeys.detail(id),
    queryFn: () => districtsController.getDistrict(id),
  });
};

export default useDistrict;
