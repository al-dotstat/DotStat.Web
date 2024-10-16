export type OrderItem = {
  complexId: number;
  includeFlats: boolean;
  includeParkings: boolean;
  includeStorages: boolean;
  includeCommercials: boolean;
};

export type Order = {
  id: number;
  userId: number;
  items: OrderItem[];
  fileName: string;
  fileExpiredDateTime: Date;
  createdDateTime: Date;
  updatedDateTime: Date;
};

export type OrderRequest = {
  orderItems: OrderItem[];
};
