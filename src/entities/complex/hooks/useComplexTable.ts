import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useComplexTable = (id: number) => {
  return useQuery({
    queryKey: complexKeys.table(id),
    queryFn: () => complexesController.getComplexTable(id),
  });
};

export default useComplexTable;
