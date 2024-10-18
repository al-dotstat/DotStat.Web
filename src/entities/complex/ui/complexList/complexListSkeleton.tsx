import React from "react";
import ComplexCardSkeleton from "./complexCardSkeleton";

const ComplexListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <ComplexCardSkeleton key={i} />
        ))}
    </div>
  );
};

export default ComplexListSkeleton;
