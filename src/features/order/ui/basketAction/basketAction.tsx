"use client";

import { Complex } from "@/shared/types/complex";
import React, { useCallback } from "react";
import { Button } from "@/shared/ui/button";
import { IconBasket, IconBasketOff } from "@tabler/icons-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shared/ui/hover-card";
import { useComplexBasketStore } from "../..";
import ComplexBasketCard from "./complexBasketCard";

export interface BasketActionProps {
  complex: Complex;
}

const BasketAction: React.FC<BasketActionProps> = ({ complex }) => {
  const storeComplex = useComplexBasketStore((state) =>
    state.complexes.find((c) => c.complex.id === complex.id)
  );
  const isPending = useComplexBasketStore((state) => state.isPending);
  const addToBasket = useComplexBasketStore((state) => state.addToBasket);
  const removeFromBasket = useComplexBasketStore(
    (state) => state.removeFromBasket
  );

  const addRemove = useCallback(() => {
    if (storeComplex === undefined) {
      addToBasket({
        complex: complex,
        includeCommercials: true,
        includeFlats: true,
        includeParkings: true,
        includeStorages: true,
      });
    } else {
      removeFromBasket(complex.id);
    }
  }, [complex, storeComplex, removeFromBasket, addToBasket]);

  if (storeComplex === undefined) {
    return (
      <Button
        size="icon"
        variant="ghost"
        onClick={addRemove}
        className="hover:text-green-400"
        disabled={isPending}
      >
        <IconBasket />
      </Button>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={addRemove}
          className="bg-green-400/20 hover:bg-destructive hover:text-destructive-foreground group"
          disabled={isPending}
        >
          <IconBasket className="group-hover:hidden" />
          <IconBasketOff className="hidden group-hover:block" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <ComplexBasketCard complex={complex} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default React.memo(BasketAction);
