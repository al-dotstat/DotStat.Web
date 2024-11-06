import { CollectionResponse } from "../types/common";
import { Complex } from "../types/complex";
import { QueueComplex } from "../types/parse";
import { apiClient } from "./axios";

const getParseQueue = async () => {
  const response = await apiClient.get<CollectionResponse<QueueComplex>>(
    `/parse/queue`
  );
  return response.data.items;
};

const addToQueue = async (id: Complex["id"]) => {
  const response = await apiClient.post<QueueComplex>(`/parse/queue`, {
    complexId: id,
  });
  return response.data;
};

const deleteFromQueue = async (id: Complex["id"]) => {
  const response = await apiClient.delete<QueueComplex>(`/parse/queue`, {
    data: {
      complexId: id,
    },
  });
  return response.data;
};

const parseController = {
  getParseQueue,
  addToQueue,
  deleteFromQueue,
};

export default parseController;
