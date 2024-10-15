"use client";

import React from "react";
import useComplexFiltersStore from "../../model/complexFiltersStore";
import { Skeleton } from "@/shared/ui/skeleton";
import ComplexListItem from "./complexListItem";
import { useSearchComplexes } from "../../hooks";

export interface ComplexListProps {}

const ComplexList: React.FC<ComplexListProps> = ({}) => {
  const developersIds = useComplexFiltersStore((state) => state.developersIds);
  const districtsIds = useComplexFiltersStore((state) => state.districtsIds);
  const { data, isSuccess } = useSearchComplexes({
    developersIds,
    districtsIds,
  });

  if (!isSuccess) return <Skeleton className="w-full h-24 rounded" />;

  return (
    <div className="flex flex-col gap-5">
      {data.map((c) => (
        <ComplexListItem complex={c} key={c.id} />
      ))}
    </div>
  );
};

export default React.memo(ComplexList);
