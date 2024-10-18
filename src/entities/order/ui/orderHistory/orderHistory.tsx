"use client";

import React from "react";
import { useOrderHistory } from "../../hooks";
import { Skeleton } from "@/shared/ui/skeleton";
import OrderHistoryItem from "./orderHistoryItem";

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
          <OrderHistoryItem order={o} key={o.id} />
        ))}
    </div>
  );
};

export default React.memo(OrderHistory);
