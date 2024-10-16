export type ComplexDeveloper = {
  developerId: number;
};

export type Complex = {
  id: number;
  name: string;
  nameRu: string;
  description?: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  area?: number;
  completionDate?: Date;
  districtId: number;
  developers: ComplexDeveloper[];
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type ComplexFiltersParams = {
  developersIds?: number[];
  districtsIds?: number[];
  search?: string;
};
