"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { IconRefresh } from "@tabler/icons-react";
import React from "react";
import { useComplexBasketStore } from "../..";
import { useCreateOrder } from "@/entities/order";
import { apiClient } from "@/shared/api/axios";
import toast from "react-hot-toast";
import { Order } from "@/shared/types/order";

export interface ReorderProps {
  order: Order;
}

const Reorder: React.FC<ReorderProps> = ({ order }) => {
  const setPending = useComplexBasketStore((state) => state.setPending);
  const clearBasket = useComplexBasketStore((state) => state.clearBasket);
  const { mutate, isPending } = useCreateOrder((data) => {
    clearBasket();
    setPending(false);
    apiClient.downloadStaticFile(data.fileName);
    toast.success("Файл сформирован и скачивается");
  });

  const onClick = () => {
    console.log(order);
    mutate({
      orderItems: order.items,
    });
    setPending(true);
  };

  return (
    <Button
      onClick={onClick}
      disabled={isPending}
      size="icon"
      variant="outline"
    >
      <IconRefresh className={cn({ "animate-spin": isPending })} />
    </Button>
  );
};

export default React.memo(Reorder);
