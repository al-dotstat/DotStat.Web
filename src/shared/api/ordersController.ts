import { CollectionResponse } from "../types/common";
import { Order, OrderRequest } from "../types/order";
import { apiClient } from "./axios";

const getOrder = async (id: number) => {
  const response = await apiClient.get<Order>(`/orders/${id}`);
  return response.data;
};

const getOrderHistory = async () => {
  const response = await apiClient.get<CollectionResponse<Order>>(
    "/orders/history"
  );
  return response.data.items;
};

const createOrder = async (data: OrderRequest) => {
  const response = await apiClient.post<Order>("/orders", data);
  return response.data;
};

const ordersController = {
  getOrder,
  getOrderHistory,
  createOrder,
};

export default ordersController;
