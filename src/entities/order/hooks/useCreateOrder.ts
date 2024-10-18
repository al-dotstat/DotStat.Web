import ordersController from "@/shared/api/ordersController";
import { orderKeys } from "@/shared/lib/queryKeyFactory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateOrder = (
  onSuccess?: (
    data: Awaited<ReturnType<typeof ordersController.createOrder>>
  ) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ordersController.createOrder,
    onSuccess: (data) => {
      queryClient.setQueryData(orderKeys.detail(data.id), data);
      queryClient.invalidateQueries({
        queryKey: orderKeys.history(),
      });
      if (onSuccess) onSuccess(data);
    },
  });
};

export default useCreateOrder;
