"use client";

import React from "react";
import useComplexFiltersStore from "../../model/complexFiltersStore";
import { Skeleton } from "@/shared/ui/skeleton";
import ComplexListItem from "./complexListItem";
import { useSearchComplexes } from "../../hooks";
import { useAllDistricts } from "@/entities/district";
import { useAllDevelopers } from "@/entities/developer";

export interface ComplexListProps {}

const ComplexList: React.FC<ComplexListProps> = ({}) => {
  const developersIds = useComplexFiltersStore((state) => state.developersIds);
  const districtsIds = useComplexFiltersStore((state) => state.districtsIds);
  const { data: districts, isSuccess: areDistrictsSucceed } = useAllDistricts();
  const { data: developers, isSuccess: areDevelopersSucceed } =
    useAllDevelopers();
  const { data, isSuccess } = useSearchComplexes({
    developersIds,
    districtsIds,
  });

  if (!isSuccess || !areDistrictsSucceed || !areDevelopersSucceed)
    return <Skeleton className="w-full h-24 rounded" />;

  return (
    <div className="flex flex-col gap-5">
      {data.map((c) => (
        <ComplexListItem
          complex={c}
          district={districts.find((d) => d.id == c.districtId)!}
          developers={developers.filter((d) =>
            c.developers.some((cd) => cd.developerId === d.id)
          )}
          key={c.id}
        />
      ))}
      {data.length === 0 && (
        <span className="text-foreground/75 italic text-center mt-5">
          Кажется, ничего не нашлось :(
        </span>
      )}
    </div>
  );
};

export default React.memo(ComplexList);
