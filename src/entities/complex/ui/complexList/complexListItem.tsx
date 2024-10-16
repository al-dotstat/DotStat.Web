import { Complex } from "@/shared/types/complex";
import { Developer } from "@/shared/types/developer";
import { District } from "@/shared/types/district";
import Block from "@/shared/ui/block";
import Image from "next/image";
import React from "react";

export interface ComplexListItemProps {
  complex: Complex;
  district: District;
  developers: Developer[];
}

const ComplexListItem: React.FC<ComplexListItemProps> = ({
  complex,
  district,
  developers,
}) => {
  const params: { [key: string]: string | React.ReactNode } = {};
  if (complex.address) params["Адрес"] = complex.address;
  if (complex.area)
    params["Площадь"] = (
      <>
        {complex.area.toString()} м<sup>2</sup>
      </>
    );
  if (complex.completionDate)
    params["Дата сдачи"] = new Date(
      complex.completionDate
    ).toLocaleDateString();

  return (
    <Block className="grid grid-cols-[auto_1fr_auto]">
      <div className="flex items-center w-auto">
        <Image
          alt={complex.nameRu}
          src={"/placeholder.png"}
          width={200}
          height={200}
          className="max-w-48 aspect-square"
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-primary font-bold text-xl">{complex.nameRu}</h2>
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
      <div className="flex flex-col gap-2">
        {developers.map((developer) => (
          <div key={developer.id} className="text-center">
            <Image
              alt={developer.nameRu}
              src={"/placeholder.png"}
              width={100}
              height={100}
              className="max-w-28 aspect-square"
            />
            <p className="text-sm font-semibold mt-1">{developer.nameRu}</p>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default React.memo(ComplexListItem);
