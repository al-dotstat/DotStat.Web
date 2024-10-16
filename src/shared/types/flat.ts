import { Status } from "./common";

export type FlatDeclaration = {
  id: number;
  number: string;
  roominess: string;
  floor: string;
  area: number;
  livingArea: number;
  ceilingHeight: number;
  entrance: string;
  unique: string;
  createdDateTime: string;
  updatedDateTime: string;
};

export type FlatParsingInfo = {
  id: number;
  parseId: number;
  number?: string;
  roominess?: string;
  floor?: string;
  area?: number;
  livingArea?: number;
  building?: string;
  additionalJsonInfo?: string;
  price: number;
  date: string;
  status: Status;
  createdDateTime: string;
  updatedDateTime: string;
};

export type Flat = {
  id: number;
  title: string;
  buildingId: number;
  developerId: number;
  layout?: string;
  isEuro?: boolean;
  developerUnique?: string;
  additionalJsonInfo?: string;
  declaration?: FlatDeclaration;
  createdDateTime: string;
  updatedDateTime: string;
};
