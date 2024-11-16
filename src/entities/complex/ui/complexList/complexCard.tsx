import { cn } from "@/shared/lib/utils";
import { Complex } from "@/shared/types/complex";
import { Developer } from "@/shared/types/developer";
import { District } from "@/shared/types/district";
import Image from "next/image";
import React from "react";
import { complexParams } from "../../utils/complexParams";
import Link from "next/link";
import { DeveloperCard } from "@/entities/developer";
import { apiClient } from "@/shared/api/axios";

export interface ComplexListItemProps {
  complex: Complex;
  district: District;
  developers: Developer[];
  action?: React.ReactNode;
  active?: boolean;
}

const ComplexCard: React.FC<ComplexListItemProps> = ({
  complex,
  district,
  developers,
  action,
  active,
}) => {
  const params = complexParams(complex);

  return (
    <div
      className={
        "max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-[auto_1fr_auto_auto] gap-5"
      }
    >
      <div className="flex items-center lg:w-auto max-lg:w-full">
        <Link href={`/app/complex/${complex.id}`} className="max-lg:w-full">
          <Image
            alt={complex.nameRu}
            src={
              complex.imageFilePath
                ? apiClient.getStaticFileUrl(complex.imageFilePath)
                : "/placeholder.png"
            }
            width={400}
            height={400}
            className="lg:max-w-48 lg:aspect-square object-cover max-lg:w-full max-lg:max-h-48 rounded"
          />
        </Link>
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-primary font-bold text-xl">
          <Link href={`/app/complex/${complex.id}`}>{complex.nameRu}</Link>
        </h2>
        <span className="text-sm">{district.name} район</span>
        {complex.description && (
          <p className="text-sm text-ellipsis line-clamp-2">
            {complex.description}
          </p>
        )}
        <div className="flex gap-5 flex-wrap text-sm">
          {Object.keys(params).map((k) => (
            <div className="" key={k}>
              <span className="font-semibold">{k}: </span>
              <span>{params[k]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:flex-col gap-2 p-2 items-center">
        {developers.map((developer) => (
          <DeveloperCard developer={developer} key={developer.id} />
        ))}
      </div>
      <div
        className={cn(
          "p-2 flex lg:flex-col h-full justify-center transition-colors",
          {
            "bg-green-400/25 rounded": active,
          }
        )}
      >
        {action}
      </div>
    </div>
  );
};

export default React.memo(ComplexCard);
