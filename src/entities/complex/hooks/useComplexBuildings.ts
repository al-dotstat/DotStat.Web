import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useComplexBuildings = (id: number) => {
  return useQuery({
    queryKey: complexKeys.buildings(id),
    queryFn: () => complexesController.getComplexBuildings(id),
  });
};

export default useComplexBuildings;
