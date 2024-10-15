import { Complex } from "../types/complex";
import { Developer } from "../types/developer";

const getDeveloper = async (id: number) => {
  const res: Developer = {
    id: id,
    name: "Grinvich",
    nameRu: "Гринвич",
    createdDateTime: new Date(),
    updatedDateTime: new Date(),
  };

  return res;
};

const getAllDevelopers = async () => {
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

const getDeveloperComplexes = async (id: number) => {
  const res: Complex[] = Array(2)
    .fill(0)
    .map((x, i) => ({
      id: i,
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      name: "Novyi",
      nameRu: "Новый",
      developers: [
        {
          developerId: id,
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

const developersController = {
  getAllDevelopers,
  getDeveloper,
  getDeveloperComplexes,
};

export default developersController;
