"use client";

import { ComplexListSkeleton, useSearchComplexes } from "@/entities/complex";
import { useComplexQueueFiltersStore } from "@/features/filters";
import { AdminComplexActionCard } from "@/features/parse";
import { Separator } from "@/shared/ui/separator";
import React from "react";

export interface AdminComplexListProps {}

const AdminComplexList: React.FC<AdminComplexListProps> = ({}) => {
  const developersIds = useComplexQueueFiltersStore(
    (state) => state.developersIds
  );
  const districtsIds = useComplexQueueFiltersStore(
    (state) => state.districtsIds
  );
  const { data, isSuccess } = useSearchComplexes({
    developersIds,
    districtsIds,
  });

  if (!isSuccess) return <ComplexListSkeleton />;

  return (
    <div className="flex flex-col gap-5">
      {data
        .flatMap((c) => [
          <Separator key={"separator" + c.id} />,
          <AdminComplexActionCard complex={c} key={c.id} />,
        ])
        .slice(1)}
      {data.length === 0 && (
        <span className="text-foreground/75 italic text-center mt-5">
          Кажется, ничего не нашлось :(
        </span>
      )}
    </div>
  );
};

export default React.memo(AdminComplexList);
