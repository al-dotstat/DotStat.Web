import ordersController from "@/shared/api/ordersController";
import { orderKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useOrder = (id: number) => {
  return useQuery({
    queryKey: orderKeys.detail(id),
    queryFn: () => ordersController.getOrder(id),
  });
};

export default useOrder;
