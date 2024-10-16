export type Status = "Available" | "Booked" | "Sold" | "NoInfo";

export type CollectionResponse<T> = {
  items: T[];
};

export type PaginationResponse<T> = {
  totalCount: number;
  perPageCount: number;
  items: T[];
};
