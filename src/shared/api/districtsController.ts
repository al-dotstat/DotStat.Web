import { CollectionResponse } from "../types/common";
import { Complex } from "../types/complex";
import { District } from "../types/district";
import { apiClient } from "./axios";

const getDistrict = async (id: number) => {
  const response = await apiClient.get<District>(`/districts/${id}`);
  return response.data;
};

const getAllDistricts = async () => {
  const response = await apiClient.get<CollectionResponse<District>>(
    "/districts"
  );
  return response.data.Items;
};

const getDistrictComplexes = async (id: number) => {
  const response = await apiClient.get<CollectionResponse<Complex>>(
    `/districts/${id}/complexes`
  );
  return response.data.Items;
};

const districtsController = {
  getDistrict,
  getAllDistricts,
  getDistrictComplexes,
};

export default districtsController;
