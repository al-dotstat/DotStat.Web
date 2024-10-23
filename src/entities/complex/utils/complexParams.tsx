import { Complex } from "@/shared/types/complex";

export const complexParams = (complex: Complex) => {
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
  return params;
};
