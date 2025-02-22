import express from "express";
import userController from "../controller/userController.js";
import { tryCatch } from "../helpers/tryCatch.js";
const router = express.Router();

router.get("/", tryCatch(userController.getAllUsers));
router.get("/:id", tryCatch(userController.getUserById));
router.post("/", tryCatch(userController.createUsers));
router.put("/", tryCatch(userController.updateUser));
router.delete("/:id", tryCatch(userController.deleteUser));

export default router;