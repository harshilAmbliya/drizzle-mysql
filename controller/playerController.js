import { eq } from "drizzle-orm";
import db from "../db/db.js";
import { Players } from "../drizzle/schema.js";
import { prepareSuccessResponse, prepareErrorResponse } from "../helpers/helper.js";

const getAllPlayers = async (req, res) => {
    try {
        const players = await db.select().from(Players);

        return res.status(200).json(prepareSuccessResponse(players, "Players fetched successfully"));
    } catch (err) {
        return res.status(500).json(prepareErrorResponse(err.message));
    }
};

const updatePlayer = async (req, res) => {
    const { playerId } = req.params;
    const body = req.body;
    try {
        const player = await db.update(Players).set(body).where(eq(Players.id, playerId)).execute();
        res.status(200).json(prepareSuccessResponse(null, "Player updated successfully"));
    } catch (err) {
        res.status(500).json(prepareErrorResponse(err.message));
    }
}

const createPlayer = async (req, res) => {

    try {
        const players = await db.insert(Players).values(req.body).$returningId({

        }).execute();
        //  await db.select().from(Players);
        return res.status(201).json(prepareSuccessResponse(players, "Players fetched successfully"));
    } catch (err) {
        return res.status(500).json(prepareErrorResponse(err.message));
    }
}

const deletePlayer = async (req, res) => {
    const { playerId } = req.params;
    try {
        await db.delete(Players).where(eq(Players.id, playerId)).execute();
        res.status(200).json(prepareSuccessResponse(null, "Player deleted successfully"));
    } catch (err) {
        res.status(500).json(prepareErrorResponse(err.message));
    }
}

export default { getAllPlayers, updatePlayer, createPlayer, deletePlayer };