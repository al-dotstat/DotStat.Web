import ordersController from "@/shared/api/ordersController";
import { orderKeys } from "@/shared/lib/queryKeyFactory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ordersController.createOrder,
    onSuccess: (data) => {
      queryClient.setQueryData(orderKeys.detail(data.id), data);
      queryClient.invalidateQueries({
        queryKey: orderKeys.history(),
      });
    },
  });
};

export default useCreateOrder;
