import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export interface DeveloperBigCardSkeletonProps {}

const DeveloperBigCardSkeleton: React.FC<
  DeveloperBigCardSkeletonProps
> = ({}) => {
  return (
    <div className="flex gap-5">
      <Skeleton className="w-52 h-52 rounded" />
      <div className="space-y-5">
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
      </div>
    </div>
  );
};

export default React.memo(DeveloperBigCardSkeleton);
