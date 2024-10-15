export type ParkingDeclaration = {
  id: number;
  number: string;
  floor: string;
  area: number;
  entrance: string;
  unique: string;
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type ParkingParsingInfo = {
  id: number;
  parseId: number;
  number?: string;
  floor?: string;
  area?: number;
  building?: string;
  additionalJsonInfo?: string;
  price: number;
  date: Date;
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type Parking = {
  id: number;
  title: string;
  declaration?: ParkingDeclaration;
  buildingId: number;
  developerId: number;
  layout?: string;
  developerUnique?: string;
  additionalJsonInfo?: string;
  createdDateTime: Date;
  updatedDateTime: Date;
};
