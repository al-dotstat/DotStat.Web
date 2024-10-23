import React from "react";
import Image from "next/image";
import { Developer } from "@/shared/types/developer";
import Link from "next/link";

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
          src={"/placeholder.png"}
          width={50}
          height={50}
          className="max-w-48 aspect-square"
        />
      </div>
      <div className="space-y-2 p-2 text-center">
        <h2 className="text-md font-semibold">{developer.nameRu}</h2>
      </div>
    </Link>
  );
};

export default React.memo(DeveloperCard);
