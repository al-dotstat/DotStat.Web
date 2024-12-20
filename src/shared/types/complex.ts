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
  imageFilePath?: string;
  completionDate?: string;
  districtId: number;
  developers: ComplexDeveloper[];
  createdDateTime: string;
  updatedDateTime: string;
};

export type ComplexFiltersParams = {
  developersIds?: number[];
  districtsIds?: number[];
  search?: string;
};

export type ComplexParseParams = {
  includeFlats: boolean;
  includeParkings: boolean;
  includeStorages: boolean;
  includeCommercials: boolean;
};

export type ComplexTable = {
  flats?: string[][];
  parkings?: string[][];
  storages?: string[][];
  commercials?: string[][];
};
