import express from "express";
import playerRoutes from "./playerRoutes.js";
const router = express.Router();

router.use("/players", playerRoutes)

export default router;