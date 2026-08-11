import { Request, Response } from "express";

import {
  createUser,
  getUsers
} from "../services/User.service";


export const createUserController = async (
  req: Request,
  res: Response
) => {

  const user = await createUser(
    req.body
  );

  res.status(201).json({
    success: true,
    data: user
  });
};


export const getUsersController = async (
  req: Request,
  res: Response
) => {

  const users = await getUsers();

  res.json({
    success: true,
    data: users
  });
};