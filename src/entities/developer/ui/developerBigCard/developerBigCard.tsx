"use client";

import { Developer } from "@/shared/types/developer";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDeveloper } from "../../hooks";
import DeveloperBigCardSkeleton from "./developerBigCardSkeleton";
import { notFound } from "next/navigation";
import { apiClient } from "@/shared/api/axios";

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
    <div className="flex max-md:flex-col gap-5">
      <Image
        src={
          developer.imageFilePath
            ? apiClient.getStaticFileUrl(developer.imageFilePath)
            : "/placeholder.png"
        }
        alt={developer.nameRu}
        width={400}
        height={400}
        className="md:max-w-64 md:aspect-square object-contain max-md:w-full max-md:max-h-64 rounded"
      />
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{developer.nameRu}</h1>
      </div>
    </div>
  );
};

export default React.memo(DeveloperBigCard);
