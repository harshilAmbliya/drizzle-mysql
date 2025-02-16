import express from "express";
import playerController from "../controller/playerController.js";
const router = express.Router();

router.get("/", playerController.getAllPlayers);
router.post("/", playerController.createPlayer);
router.put("/:playerId", playerController.updatePlayer);
router.delete("/:playerId", playerController.deletePlayer);

export default router;