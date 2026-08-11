import { Router } from "express";

import {
  createUserController,
  getUsersController
} from "../controllers/User.controller";

const router = Router();

router.get(
  "/",
  getUsersController
);

router.post(
  "/",
  createUserController
);

export default router;