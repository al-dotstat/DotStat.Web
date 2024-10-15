import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useComplex = (id: number) => {
  return useQuery({
    queryKey: complexKeys.detail(id),
    queryFn: () => complexesController.getComplex(id),
  });
};

export default useComplex;
