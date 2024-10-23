"use client";

import React from "react";
import { ComplexListSkeleton, useSearchComplexes } from "@/entities/complex";
import { useComplexFiltersStore } from "@/features/filters";
import { ComplexActionCard } from "@/features/order";

export interface FilteredComplexListProps {}

const FilteredComplexList: React.FC<FilteredComplexListProps> = ({}) => {
  const developersIds = useComplexFiltersStore((state) => state.developersIds);
  const districtsIds = useComplexFiltersStore((state) => state.districtsIds);
  const { data, isSuccess } = useSearchComplexes({
    developersIds,
    districtsIds,
  });

  if (!isSuccess) return <ComplexListSkeleton />;

  return (
    <div className="flex flex-col gap-5">
      {data.map((c) => (
        <ComplexActionCard complex={c} key={c.id} />
      ))}
      {data.length === 0 && (
        <span className="text-foreground/75 italic text-center mt-5">
          Кажется, ничего не нашлось :(
        </span>
      )}
    </div>
  );
};

export default React.memo(FilteredComplexList);
