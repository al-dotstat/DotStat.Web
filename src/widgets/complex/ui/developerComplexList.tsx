"use client";

import { ComplexListSkeleton } from "@/entities/complex";
import { useDeveloperComplexes } from "@/entities/developer";
import { ComplexActionCard } from "@/features/order";
import { Developer } from "@/shared/types/developer";
import React from "react";

export interface DeveloperComplexListProps {
  id: Developer["id"];
}

const DeveloperComplexList: React.FC<DeveloperComplexListProps> = ({ id }) => {
  const { data: complexes, isSuccess } = useDeveloperComplexes(id);

  if (!isSuccess) return <ComplexListSkeleton />;

  return (
    <div className="flex flex-col gap-5">
      {complexes.map((c) => (
        <ComplexActionCard complex={c} key={c.id} />
      ))}
      {complexes.length === 0 && (
        <span className="text-foreground/75 italic text-center mt-5">
          Кажется, ничего не нашлось :(
        </span>
      )}
    </div>
  );
};

export default React.memo(DeveloperComplexList);
