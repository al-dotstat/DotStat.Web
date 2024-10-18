"use client";

import React from "react";
import { useComplexBasketStore } from "../..";
import { Complex } from "@/shared/types/complex";
import { Toggle } from "@/shared/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import {
  IconArchive,
  IconBuildingStore,
  IconDoor,
  IconParking,
  IconSquareX,
} from "@tabler/icons-react";
import { Button } from "@/shared/ui/button";
import { BasketComplex } from "../../model/complexBasketStore";
import toast from "react-hot-toast";

export interface BasketItemProps {
  complexId: Complex["id"];
}

const BasketItem: React.FC<BasketItemProps> = ({ complexId }) => {
  const basketComplex = useComplexBasketStore((state) =>
    state.complexes.find((c) => c.complex.id === complexId)
  );
  if (!basketComplex)
    throw new Error(`This complex is not in the basket (${complexId})`);
  const updateInBasket = useComplexBasketStore((state) => state.updateComplex);
  const removeFromBasket = useComplexBasketStore(
    (state) => state.removeFromBasket
  );

  const handleInclude = (
    field:
      | "includeFlats"
      | "includeStorages"
      | "includeParkings"
      | "includeCommercials",
    checked: boolean
  ) => {
    const basketVariables = Object.keys(basketComplex).filter(
      (x) => x !== field && x.startsWith("include")
    );
    if (
      !checked &&
      basketVariables.every((x) => !basketComplex[x as keyof BasketComplex])
    ) {
      toast.error("Необходимо выбрать хотя бы один из полей");
    } else {
      updateInBasket({
        ...basketComplex,
        [field]: checked,
      });
    }
  };

  return (
    <div className="flex gap-2 items-center w-full justify-between">
      <span className="truncate">{basketComplex.complex.nameRu}</span>
      <div className="flex items-center gap-[2px]">
        <Tooltip>
          <TooltipTrigger>
            <Toggle
              pressed={basketComplex.includeFlats}
              onPressedChange={(checked) =>
                handleInclude("includeFlats", !!checked)
              }
              size="sm"
              className="data-[state=on]:bg-green-400/25"
            >
              <IconDoor />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Квартиры</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Toggle
              pressed={basketComplex.includeParkings}
              onPressedChange={(checked) =>
                handleInclude("includeParkings", !!checked)
              }
              size="sm"
              className="data-[state=on]:bg-green-400/25"
            >
              <IconParking />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Паркинг</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Toggle
              pressed={basketComplex.includeStorages}
              onPressedChange={(checked) =>
                handleInclude("includeStorages", !!checked)
              }
              size="sm"
              className="data-[state=on]:bg-green-400/25"
            >
              <IconArchive />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Кладовые</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Toggle
              pressed={basketComplex.includeCommercials}
              onPressedChange={(checked) =>
                handleInclude("includeCommercials", !!checked)
              }
              size="sm"
              className="data-[state=on]:bg-green-400/25"
            >
              <IconBuildingStore />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Коммерция</p>
          </TooltipContent>
        </Tooltip>
        <Button
          size="icon"
          variant="ghost"
          className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
          onClick={() => removeFromBasket(basketComplex.complex.id)}
        >
          <IconSquareX />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BasketItem);
