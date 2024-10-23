import { Developer } from "@/shared/types/developer";
import React from "react";
import DeveloperCard from "./developerCard";

export interface DeveloperListProps {
  items: Developer[];
}

const DeveloperList: React.FC<DeveloperListProps> = ({ items }) => {
  return (
    <div className="flex gap-5 flex-wrap items-start justify-between">
      {items.map((d) => (
        <DeveloperCard developer={d} key={d.id} />
      ))}
    </div>
  );
};

export default React.memo(DeveloperList);
