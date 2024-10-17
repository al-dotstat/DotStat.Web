"use client";

import React from "react";
import { useAuthUser } from "../hooks";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/utils";

export interface AuthProfileDataProps {
  className?: string;
}

const AuthProfileData: React.FC<AuthProfileDataProps> = ({ className }) => {
  const { data, isSuccess } = useAuthUser();

  if (!isSuccess) {
    return (
      <div className={cn("space-y-2", className)}>
        <Skeleton className="h-7 w-32 rounded" />
        <Skeleton className="h-7 w-32 rounded" />
        <Skeleton className="h-7 w-32 rounded" />
        <Skeleton className="h-7 w-32 rounded" />
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="">
        <span className="font-semibold">Имя: </span>
        <span>{data.firstName}</span>
      </div>
      {data.lastName && (
        <div className="">
          <span className="font-semibold">Фамилия: </span>
          <span>{data.lastName}</span>
        </div>
      )}
      {data.middleName && (
        <div className="">
          <span className="font-semibold">Отчество: </span>
          <span>{data.lastName}</span>
        </div>
      )}
      <div className="">
        <span className="font-semibold">Email: </span>
        <span>{data.email}</span>
      </div>
    </div>
  );
};

export default React.memo(AuthProfileData);
