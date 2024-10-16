import { CollectionResponse } from "../types/common";
import { Complex } from "../types/complex";
import { Developer } from "../types/developer";
import { apiClient } from "./axios";

const getDeveloper = async (id: number) => {
  const response = await apiClient.get<Developer>(`/developers/${id}`);
  return response.data;
};

const getAllDevelopers = async () => {
  const response = await apiClient.get<CollectionResponse<Developer>>(
    "/developers"
  );
  return response.data.Items;
};

const getDeveloperComplexes = async (id: number) => {
  const response = await apiClient.get<CollectionResponse<Complex>>(
    `/developers/${id}/complexes`
  );
  return response.data.Items;
};

const developersController = {
  getAllDevelopers,
  getDeveloper,
  getDeveloperComplexes,
};

export default developersController;
