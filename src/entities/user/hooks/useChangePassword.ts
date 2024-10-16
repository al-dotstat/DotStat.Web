import usersController from "@/shared/api/usersController";
import { useMutation } from "@tanstack/react-query";

const useChangePassword = () => {
  return useMutation({
    mutationFn: usersController.changePassword,
  });
};

export default useChangePassword;
