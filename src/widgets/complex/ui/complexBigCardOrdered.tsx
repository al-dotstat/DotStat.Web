"use client";

import {
  ComplexBigCard,
  ComplexBigCardSkeletons,
  useComplex,
} from "@/entities/complex";
import { BasketAction, ParseComplex } from "@/features/order";
import { Complex } from "@/shared/types/complex";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

export interface ComplexBigCardOrderedProps {
  id: Complex["id"];
}

const ComplexBigCardOrdered: React.FC<ComplexBigCardOrderedProps> = ({
  id,
}) => {
  const { data: complex, error, isSuccess: isComplexLoaded } = useComplex(id);

  useEffect(() => {
    if (error) notFound();
  }, [error]);

  if (!isComplexLoaded) return <ComplexBigCardSkeletons />;

  return (
    <ComplexBigCard
      complex={complex}
      actions={
        <>
          <BasketAction complex={complex} />
          <ParseComplex id={complex.id} />
        </>
      }
    />
  );
};

export default React.memo(ComplexBigCardOrdered);
