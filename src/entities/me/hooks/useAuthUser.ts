import usersController from "@/shared/api/usersController";
import { meKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useAuthUser = () => {
  return useQuery({
    queryFn: usersController.getAuthUser,
    queryKey: meKeys.me,
    retryDelay: 500,
    retry: (count, err) => {
      return count < 2;
    },
  });
};

export default useAuthUser;
