export type Parse = {
  id: number;
  date: string;
  complexId: number;
  areFlatsParsed: boolean;
  areParkingsParsed: boolean;
  areStoragesParsed: boolean;
  areCommercialsParsed: boolean;
  createdDateTime: string;
  updatedDateTime: string;
};

export type QueueComplex = {
  queueItemId: number;
  complexId: number;
  createdDateTime: string;
};
