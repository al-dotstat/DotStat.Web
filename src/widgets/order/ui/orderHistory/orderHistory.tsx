"use client";

import React from "react";
import { Skeleton } from "@/shared/ui/skeleton";
import { OrderHistoryItem, useOrderHistory } from "@/entities/order";
import { Reorder } from "@/features/order";

export interface OrderHistoryProps {}

const OrderHistory: React.FC<OrderHistoryProps> = ({}) => {
  const { data: orders, isSuccess: areOrdersSucceed } = useOrderHistory();

  if (!areOrdersSucceed) {
    return (
      <div className="space-y-5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton className="h-9 w-full rounded" key={i} />
          ))}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {orders
        .sort(
          (a, b) =>
            new Date(b.createdDateTime).getTime() -
            new Date(a.createdDateTime).getTime()
        )
        .map((o) => (
          <OrderHistoryItem
            order={o}
            key={o.id}
            actions={<Reorder order={o} />}
          />
        ))}
    </div>
  );
};

export default React.memo(OrderHistory);
