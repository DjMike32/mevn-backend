import { Router } from "express";
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  newUser,
} from "../controller/user.controller.js";

const router = Router();

router.get("/", getUsers);
router.get("/:name", getUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);
router.post("/", newUser);

export default router;
