import developersController from "@/shared/api/developersController";
import { developerKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useAllDevelopers = () => {
  return useQuery({
    queryKey: developerKeys.all,
    queryFn: developersController.getAllDevelopers,
  });
};

export default useAllDevelopers;
