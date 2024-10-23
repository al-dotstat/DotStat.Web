"use client";

import { ComplexCard, ComplexCardSkeleton } from "@/entities/complex";
import { Complex } from "@/shared/types/complex";
import React from "react";
import BasketAction from "./basketAction";
import { useComplexBasketStore } from "../..";
import { useDistrict } from "@/entities/district";
import { useAllDevelopers } from "@/entities/developer";

export interface ComplexActionCardProps {
  complex: Complex;
}

const ComplexActionCard: React.FC<ComplexActionCardProps> = ({ complex }) => {
  const basketComplex = useComplexBasketStore((state) =>
    state.complexes.find((c) => c.complex.id === complex.id)
  );
  const { data: district, isSuccess: isDistrictSucceed } = useDistrict(
    complex.districtId
  );
  const { data: developers, isSuccess: areDevelopersSucceed } =
    useAllDevelopers();

  if (!isDistrictSucceed || !areDevelopersSucceed)
    return <ComplexCardSkeleton />;

  return (
    <ComplexCard
      complex={complex}
      district={district}
      developers={developers.filter((d) =>
        complex.developers.some((cd) => cd.developerId === d.id)
      )}
      action={<BasketAction complex={complex} />}
      active={basketComplex !== undefined}
    />
  );
};

export default React.memo(ComplexActionCard);
