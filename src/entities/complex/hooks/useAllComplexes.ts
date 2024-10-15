import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useAllComplexes = () => {
  return useQuery({
    queryKey: complexKeys.all,
    queryFn: complexesController.getAllComplexes,
  });
};

export default useAllComplexes;
