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
  createdDateTime: Date;
  updatedDateTime: Date;
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
  date: Date;
  status: Status;
  createdDateTime: Date;
  updatedDateTime: Date;
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
  createdDateTime: Date;
  updatedDateTime: Date;
};
