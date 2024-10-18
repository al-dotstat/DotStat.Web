"use client";

import { useCreateOrder } from "@/entities/order";
import { Button } from "@/shared/ui/button";
import React from "react";
import useComplexBasketStore from "../../model/complexBasketStore";
import { OrderItem } from "@/shared/types/order";
import { IconLoader } from "@tabler/icons-react";
import { apiClient } from "@/shared/api/axios";
import toast from "react-hot-toast";

export interface CreateOrderProps {}

const CreateOrder: React.FC<CreateOrderProps> = ({}) => {
  const complexes = useComplexBasketStore((state) => state.complexes);
  const setPending = useComplexBasketStore((state) => state.setPending);
  const clearBasket = useComplexBasketStore((state) => state.clearBasket);
  const { mutate, isPending } = useCreateOrder((data) => {
    clearBasket();
    setPending(false);
    apiClient.downloadStaticFile(data.fileName);
    toast.success("Файл сформирован и скачивается");
  });

  const orderItems: OrderItem[] = complexes.map((c) => ({
    complexId: c.complex.id,
    includeCommercials: c.includeCommercials,
    includeFlats: c.includeFlats,
    includeParkings: c.includeParkings,
    includeStorages: c.includeStorages,
  }));

  const onClick = () => {
    mutate({
      orderItems: orderItems,
    });
    setPending(true);
  };

  return (
    <Button
      onClick={onClick}
      disabled={isPending || complexes.length === 0}
      className="w-full"
    >
      {isPending && <IconLoader className="animate-spin" />}
      Сформировать
    </Button>
  );
};

export default React.memo(CreateOrder);
