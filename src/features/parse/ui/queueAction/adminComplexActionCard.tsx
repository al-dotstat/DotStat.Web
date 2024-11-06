"use client";

import { AdminComplexCard, AdminComplexCardSkeleton } from "@/entities/complex";
import { useAllDevelopers } from "@/entities/developer";
import { useDistrict } from "@/entities/district";
import { Complex } from "@/shared/types/complex";
import React from "react";
import QueueAction from "./queueAction";

export interface AdminComplexCardProps {
  complex: Complex;
}

const AdminComplexActionCard: React.FC<AdminComplexCardProps> = ({
  complex,
}) => {
  const { data: district, isSuccess: isDistrictSucceed } = useDistrict(
    complex.districtId
  );
  const { data: developers, isSuccess: areDevelopersSucceed } =
    useAllDevelopers();

  if (!isDistrictSucceed || !areDevelopersSucceed)
    return <AdminComplexCardSkeleton />;

  return (
    <AdminComplexCard
      complex={complex}
      district={district}
      developers={developers.filter((d) =>
        complex.developers.some((cd) => cd.developerId === d.id)
      )}
      action={<QueueAction complex={complex} />}
    />
  );
};

export default React.memo(AdminComplexActionCard);
