"use client";

import React from "react";
import ComplexCard from "./complexCard";
import { useAllDistricts } from "@/entities/district";
import { useAllDevelopers } from "@/entities/developer";
import { Complex } from "@/shared/types/complex";
import ComplexListSkeleton from "./complexListSkeleton";
import { Separator } from "@/shared/ui/separator";

export interface ComplexListProps {
  complexes: Complex[];
}

const ComplexList: React.FC<ComplexListProps> = ({ complexes }) => {
  const { data: districts, isSuccess: areDistrictsSucceed } = useAllDistricts();
  const { data: developers, isSuccess: areDevelopersSucceed } =
    useAllDevelopers();

  if (!areDistrictsSucceed || !areDevelopersSucceed)
    return <ComplexListSkeleton />;

  return (
    <div className="flex flex-col gap-5">
      {complexes
        .flatMap((c) => [
          <Separator key={"separator" + c.id} />,
          <ComplexCard
            complex={c}
            district={districts.find((d) => d.id == c.districtId)!}
            developers={developers.filter((d) =>
              c.developers.some((cd) => cd.developerId === d.id)
            )}
            key={c.id}
          />,
        ])
        .slice(1)}
      {complexes.length === 0 && (
        <span className="text-foreground/75 italic text-center mt-5">
          Кажется, ничего не нашлось :(
        </span>
      )}
    </div>
  );
};

export default React.memo(ComplexList);
