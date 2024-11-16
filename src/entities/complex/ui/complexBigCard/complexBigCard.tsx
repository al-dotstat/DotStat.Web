"use client";

import { Complex } from "@/shared/types/complex";
import React from "react";
import { useComplexDevelopers } from "../../hooks";
import Image from "next/image";
import ComplexBigCardSkeleton from "./complexBigCardSkeleton";
import { complexParams } from "../../utils/complexParams";
import Block from "@/shared/ui/block";
import { apiClient } from "@/shared/api/axios";
import { DeveloperCard } from "@/entities/developer";

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
    <div className="flex max-md:flex-col gap-5">
      <Block className="space-y-2">
        <Image
          src={
            complex.imageFilePath
              ? apiClient.getStaticFileUrl(complex.imageFilePath)
              : "/placeholder.png"
          }
          alt={complex.nameRu}
          width={400}
          height={400}
          className="md:max-w-64 md:aspect-square object-cover max-md:w-full max-md:max-h-64 rounded"
        />
        <div className="flex gap-2 flex-wrap items-center justify-center">
          {actions}
        </div>
        <div className="flex gap-2 flex-wrap items-start">
          {developers.map((developer) => (
            <DeveloperCard developer={developer} key={developer.id} />
          ))}
        </div>
      </Block>
      <div className="space-y-5 mt-5">
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
