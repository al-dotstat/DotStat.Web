import { Building } from "../types/building";
import { Complex, ComplexFiltersParams } from "../types/complex";
import { Developer } from "../types/developer";

const getComplex = async (id: number) => {
  const res: Complex = {
    id: id,
    createdDateTime: new Date(),
    updatedDateTime: new Date(),
    name: "Novyi",
    nameRu: "Новый",
    developers: [
      {
        developerId: 1,
      },
    ],
    district: {
      createdDateTime: new Date(),
      id: 1,
      name: "Свежий",
      updatedDateTime: new Date(),
    },
  };

  return res;
};

export const getAllComplexes = async () => {
  const res: Complex[] = Array(10)
    .fill(0)
    .map((x, i) => ({
      id: i,
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      name: "Novyi",
      nameRu: "Новый",
      developers: [
        {
          developerId: 1,
        },
        {
          developerId: 2,
        },
      ],
      district: {
        createdDateTime: new Date(),
        id: 1,
        name: "Свежий",
        updatedDateTime: new Date(),
      },
    }));

  return res;
};

export const getComplexBuildings = async (id: number) => {
  const res: Building[] = Array(3)
    .fill(0)
    .map((x, i) => ({
      id: i,
      complexId: id,
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      name: i + "-ая очередь",
    }));

  return res;
};

export const getComplexDevelopers = async (id: number) => {
  const res: Developer[] = Array(2)
    .fill(0)
    .map((x, i) => ({
      id: i,
      name: ["Baza", "Grinvich"][i],
      nameRu: ["База", "Гринвич"][i],
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
    }));

  return res;
};

export const searchComplexes = async (data: ComplexFiltersParams) => {
  const res: Complex[] = Array(3)
    .fill(0)
    .map((x, i) => ({
      id: i,
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      name: ["a", "b", "c"][i],
      nameRu: [data.search ?? "Эксклюзивный", "Новый", "Старый"][i],
      developers: [
        {
          developerId: data.developersIds ? data.developersIds[0] : 1,
        },
      ],
      district: {
        createdDateTime: new Date(),
        id: data.developersIds ? data.developersIds[0] : 1,
        name: "Свежий",
        updatedDateTime: new Date(),
      },
    }));

  return res;
};

const complexesController = {
  getComplex,
  getAllComplexes,
  getComplexBuildings,
  getComplexDevelopers,
  searchComplexes,
};

export default complexesController;
