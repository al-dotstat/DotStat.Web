import ordersController from "@/shared/api/ordersController";
import { orderKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useOrderHistory = () => {
  return useQuery({
    queryKey: orderKeys.history(),
    queryFn: ordersController.getOrderHistory,
  });
};

export default useOrderHistory;
