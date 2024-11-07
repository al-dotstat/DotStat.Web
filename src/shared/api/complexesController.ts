import { Building } from "../types/building";
import { CollectionResponse } from "../types/common";
import { Complex, ComplexFiltersParams, ComplexTable } from "../types/complex";
import { Developer } from "../types/developer";
import { apiClient } from "./axios";

const getComplex = async (id: number) => {
  const response = await apiClient.get<Complex>(`/complexes/${id}`);
  return response.data;
};

const getAllComplexes = async () => {
  const response = await apiClient.get<CollectionResponse<Complex>>(
    "/complexes"
  );
  return response.data.items;
};

const searchComplexes = async (params: ComplexFiltersParams) => {
  const response = await apiClient.get<CollectionResponse<Complex>>(
    "/complexes/search",
    {
      params: params,
    }
  );

  return response.data.items;
};

const getComplexBuildings = async (id: number) => {
  const response = await apiClient.get<CollectionResponse<Building>>(
    `/complexes/${id}/buildings`
  );
  return response.data.items;
};

const getComplexDevelopers = async (id: number) => {
  const response = await apiClient.get<CollectionResponse<Developer>>(
    `/complexes/${id}/developers`
  );
  return response.data.items;
};

const getComplexTable = async (id: number) => {
  const response = await apiClient.get<ComplexTable>(
    `/complexes/${id}/parse/table`,
    {
      params: {
        includeFlats: true,
        includeParkings: true,
        includeStorages: true,
        includeCommercials: true,
      },
    }
  );
  return response.data;
};

const complexesController = {
  getComplex,
  getAllComplexes,
  searchComplexes,
  getComplexBuildings,
  getComplexDevelopers,
  getComplexTable,
};

export default complexesController;
