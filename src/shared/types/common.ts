export type Status = "Available" | "Booked" | "Sold" | "NoInfo";

export type CollectionResponse<T> = {
  Items: T[];
};

export type PaginationResponse<T> = {
  TotalCount: number;
  PerPageCount: number;
  Items: T[];
};
