import buildingsController from "@/shared/api/buildingsController";
import { buildingKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useBuilding = (id: number) => {
  return useQuery({
    queryKey: buildingKeys.detail(id),
    queryFn: () => buildingsController.getBuilding(id),
  });
};

export default useBuilding;
