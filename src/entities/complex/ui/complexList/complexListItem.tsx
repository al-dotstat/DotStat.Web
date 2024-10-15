import { Complex } from "@/shared/types/complex";
import Image from "next/image";
import React from "react";

export interface ComplexListItemProps {
  complex: Complex;
}

const ComplexListItem: React.FC<ComplexListItemProps> = ({ complex }) => {
  return (
    <div className="">
      <div className="flex items-center w-auto">
        <Image
          alt={complex.nameRu}
          src={"/placeholder.png"}
          width={200}
          height={200}
          className="max-w-48 aspect-square"
        />
      </div>
      <div className="">
        <h2>{complex.nameRu}</h2>
      </div>
      <div className=""></div>
    </div>
  );
};

export default React.memo(ComplexListItem);
