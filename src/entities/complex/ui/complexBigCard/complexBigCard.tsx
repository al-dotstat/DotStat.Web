"use client";

import { Complex } from "@/shared/types/complex";
import React from "react";
import { useComplexDevelopers } from "../../hooks";
import Image from "next/image";
import ComplexBigCardSkeleton from "./complexBigCardSkeleton";
import { complexParams } from "../../utils/complexParams";

export interface ComplexBigCardProps {
  complex: Complex;
  actions?: React.ReactNode;
}

const ComplexBigCard: React.FC<ComplexBigCardProps> = ({
  complex,
  actions,
}) => {
  const { data: developers, isSuccess: areDevelopersLoaded } =
    useComplexDevelopers(complex.id);

  if (!areDevelopersLoaded) return <ComplexBigCardSkeleton />;

  const params = complexParams(complex);

  return (
    <div className="flex gap-5">
      <div className="space-y-2">
        <Image
          src="/placeholder.png"
          alt={complex.nameRu}
          width={200}
          height={200}
        />
        <div className="flex gap-2 flex-wrap items-center justify-center">
          {actions}
        </div>
        <div className="flex gap-2 flex-wrap items-start">
          {developers.map((developer) => (
            <div className="flex flex-col items-center" key={developer.id}>
              <Image
                src="/placeholder.png"
                alt={developer.nameRu}
                width={50}
                height={50}
              />
              <span>{developer.nameRu}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{complex.nameRu}</h1>
        {Object.keys(params).map((k) => (
          <div className="" key={k}>
            <span className="font-semibold">{k}: </span>
            <span>{params[k]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ComplexBigCard);
