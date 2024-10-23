"use client";

import React from "react";
import useComplexBasketStore from "../../model/complexBasketStore";
import BasketItem from "./basketItem";
import { Separator } from "@/shared/ui/separator";

export interface BasketListProps {}

const BasketList: React.FC<BasketListProps> = ({}) => {
  const complexes = useComplexBasketStore((state) => state.complexes);

  return (
    <div className="flex flex-col gap-2">
      {complexes.length === 0 && (
        <p className="text-sm italic text-center text-foreground/50">
          Вы ещё не добавили ни один ЖК
        </p>
      )}
      {complexes
        .sort((a, b) => a.complex.id - b.complex.id)
        .map((c) => <BasketItem complexId={c.complex.id} key={c.complex.id} />)
        .reduce<React.JSX.Element[]>((res, elem, index, arr) => {
          res.push(elem);
          if (index < arr.length - 1) res.push(<Separator />);
          return res;
        }, [])}
    </div>
  );
};

export default React.memo(BasketList);
