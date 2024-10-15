export type ComplexDeveloper = {
  developerId: number;
};

export type District = {
  id: number;
  name: string;
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type Complex = {
  id: number;
  name: string;
  nameRu: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  area?: number;
  completionDate?: Date;
  district: District;
  developers: ComplexDeveloper[];
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type ComplexFiltersParams = {
  developersIds?: number[];
  districtsIds?: number[];
  search?: string;
};
