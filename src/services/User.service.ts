import { UserModel } from "../models/User.model";

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export const createUser = async (
  data: CreateUserData
) => {

  const existingUser =
    await UserModel.findOne({
      email: data.email
    });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user =
    await UserModel.create(data);

  return user;
};


export const getUsers = async () => {

  return UserModel.find()
    .select("-password")
    .sort({
      createdAt: -1
    });
};
