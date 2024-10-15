import usersController from "@/shared/api/usersController";
import { userKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useUser = (id: number) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => usersController.getUser(id),
  });
};

export default useUser;
