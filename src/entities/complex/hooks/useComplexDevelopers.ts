import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useComplexDevelopers = (id: number) => {
  return useQuery({
    queryKey: complexKeys.developers(id),
    queryFn: () => complexesController.getComplexDevelopers(id),
  });
};

export default useComplexDevelopers;
