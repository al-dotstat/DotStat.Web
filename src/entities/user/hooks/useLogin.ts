import usersController from "@/shared/api/usersController";
import { meKeys, userKeys } from "@/shared/lib/queryKeyFactory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersController.loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(userKeys.detail(data.id), data);
      queryClient.setQueryData(meKeys.me, data);
    },
  });
};

export default useLogin;
