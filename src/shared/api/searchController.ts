import { SearchResponse } from "../types/search";
import { apiClient } from "./axios";

const searchComplexesAndDevelopers = async (search: string) => {
  const response = await apiClient.get<SearchResponse>("/search", {
    params: { search: search },
  });
  return response.data;
};

const searchController = {
  searchComplexesAndDevelopers,
};

export default searchController;
