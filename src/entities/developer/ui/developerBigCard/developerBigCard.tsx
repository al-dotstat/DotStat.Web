"use client";

import { Developer } from "@/shared/types/developer";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDeveloper } from "../../hooks";
import DeveloperBigCardSkeleton from "./developerBigCardSkeleton";
import { notFound } from "next/navigation";

export interface DeveloperBigCardProps {
  id: Developer["id"];
}

const DeveloperBigCard: React.FC<DeveloperBigCardProps> = ({ id }) => {
  const { data: developer, isSuccess, error } = useDeveloper(id);

  useEffect(() => {
    if (error) notFound();
  }, [error]);

  if (!isSuccess) return <DeveloperBigCardSkeleton />;

  return (
    <div className="flex gap-5">
      <Image
        src="/placeholder.png"
        alt={developer.nameRu}
        width={200}
        height={200}
      />
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{developer.nameRu}</h1>
      </div>
    </div>
  );
};

export default React.memo(DeveloperBigCard);
