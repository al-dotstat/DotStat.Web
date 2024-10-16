import { Building } from "../types/building";
import { apiClient } from "./axios";

const getBuilding = async (id: number) => {
  const response = await apiClient.get<Building>(`/buildings/${id}`);
  return response.data;
};

const buildingsController = {
  getBuilding,
};

export default buildingsController;
