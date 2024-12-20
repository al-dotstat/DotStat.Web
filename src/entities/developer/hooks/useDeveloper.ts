import developersController from "@/shared/api/developersController";
import { developerKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useDeveloper = (id: number) => {
  return useQuery({
    queryKey: developerKeys.detail(id),
    queryFn: () => developersController.getDeveloper(id),
  });
};

export default useDeveloper;
