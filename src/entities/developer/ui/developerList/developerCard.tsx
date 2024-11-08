import React from "react";
import Image from "next/image";
import { Developer } from "@/shared/types/developer";
import Link from "next/link";
import { apiClient } from "@/shared/api/axios";

export interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <Link
      href={`/app/developer/${developer.id}`}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center w-full">
        <Image
          alt={developer.nameRu}
          src={
            developer.imageFilePath
              ? apiClient.getStaticFileUrl(developer.imageFilePath)
              : "/placeholder.png"
          }
          width={50}
          height={50}
          className="max-w-48 aspect-square object-contain"
        />
      </div>
    </Link>
  );
};

export default React.memo(DeveloperCard);
