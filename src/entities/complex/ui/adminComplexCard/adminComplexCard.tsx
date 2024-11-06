import { Complex } from "@/shared/types/complex";
import { Developer } from "@/shared/types/developer";
import { District } from "@/shared/types/district";
import React from "react";

export interface AdminComplexCardProps {
  complex: Complex;
  district: District;
  developers: Developer[];
  action?: React.ReactNode;
}

const AdminComplexCard: React.FC<AdminComplexCardProps> = ({
  complex,
  developers,
  district,
  action,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2 py-2">
        <h2 className="text-primary font-bold text-xl">{complex.nameRu}</h2>
        <p className="">{district.name} район</p>
        <p className="">{developers.map((d) => d.nameRu).join(", ")}</p>
      </div>
      {action}
    </div>
  );
};

export default React.memo(AdminComplexCard);
