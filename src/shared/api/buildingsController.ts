import { Building } from "../types/building";

const getBuilding = async (id: number) => {
  const res: Building = {
    id: id,
    complexId: 1,
    createdDateTime: new Date(),
    updatedDateTime: new Date(),
    name: "1-ая очередь",
  };

  return res;
};

const buildingsController = {
  getBuilding,
};

export default buildingsController;
