import { User } from "../types/user";

const getUser = async (id: number) => {
  const res: User = {
    email: "test@test.test",
    firstName: "Иван",
    id: id,
    lastName: "Иванов",
  };

  return res;
};

const getAuthUser = async () => {
  const res: User = {
    email: "test@test.test",
    firstName: "Иван",
    id: 1,
    lastName: "Иванов",
  };

  return res;
};

const usersController = {
  getAuthUser,
  getUser,
};

export default usersController;
