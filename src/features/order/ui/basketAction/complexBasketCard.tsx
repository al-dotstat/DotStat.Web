"use client";

import React, { useState } from "react";
import { useComplexBasketStore } from "../..";
import { Complex } from "@/shared/types/complex";
import { BasketComplex } from "../../model/complexBasketStore";
import { Switch } from "@/shared/ui/switch";
import { Label } from "@/shared/ui/label";

export interface ComplexBasketCardProps {
  complex: Complex;
}

const ComplexBasketCard: React.FC<ComplexBasketCardProps> = ({ complex }) => {
  const basketComplex = useComplexBasketStore((state) =>
    state.complexes.find((c) => c.complex.id === complex.id)
  );
  if (!basketComplex)
    throw new Error(`This complex is not in the basket (${complex.id})`);
  const updateInBasket = useComplexBasketStore((state) => state.updateComplex);
  const [error, setError] = useState("");

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
      setError("Необходимо выбрать хотя бы один из полей");
    } else {
      setError("");
      updateInBasket({
        ...basketComplex,
        [field]: checked,
      });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Switch
          id={`${complex.id}_parse_includeFlats`}
          checked={basketComplex.includeFlats}
          onCheckedChange={(checked) =>
            handleInclude("includeFlats", !!checked)
          }
        />
        <Label htmlFor={`${complex.id}_parse_includeFlats`}>Квартиры</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id={`${complex.id}_parse_includeParkings`}
          checked={basketComplex.includeParkings}
          onCheckedChange={(checked) =>
            handleInclude("includeParkings", !!checked)
          }
        />
        <Label htmlFor={`${complex.id}_parse_includeParkings`}>Паркинг</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id={`${complex.id}_parse_includeStorages`}
          checked={basketComplex.includeStorages}
          onCheckedChange={(checked) =>
            handleInclude("includeStorages", !!checked)
          }
        />
        <Label htmlFor={`${complex.id}_parse_includeStorages`}>Кладовые</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id={`${complex.id}_parse_includeCommercials`}
          checked={basketComplex.includeCommercials}
          onCheckedChange={(checked) =>
            handleInclude("includeCommercials", !!checked)
          }
        />
        <Label htmlFor={`${complex.id}_parse_includeCommercials`}>
          Коммерция
        </Label>
      </div>
      {error && <p className="text-destructive">{error}</p>}
    </div>
  );
};

export default React.memo(ComplexBasketCard);
