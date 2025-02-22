import { eq } from "drizzle-orm";
import db from "../db/db.js";
import { Users } from "../drizzle/schema/userSchema.js";
import { prepareSuccessResponse } from "../helpers/helper.js";
import bcrypt from "bcrypt"

const getAllUsers = async (req, res) => {
    const users = await db.select().from(Users).execute();
    return res.status(200).json(prepareSuccessResponse(users, "All users fetched successfully"));
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await db.select().from(Users).where(eq(Users.id, id)).execute();
    return res.status(200).json(prepareSuccessResponse(user, "User fetched successfully"));
}

const createUsers = async (req, res) => {
    const { name, email, password } = req.body;
    const SALT = Number(process.env.SALT)
    const hashedPassword = await bcrypt.hash(password, SALT);
    const user = await db.insert(Users).values({
        name,
        email,
        password: hashedPassword
    })
    return res.status(201).json(prepareSuccessResponse(user, "User created successfully"));
}

const updateUser = async (req, res) => {
    const { id, name, email } = req.body;
    const user = await db.update(Users).set({
        name,
        email,
    }).where(eq(Users.id, id)).execute();
    return res.status(200).json(prepareSuccessResponse(user, "User updated successfully"));
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await db.delete(Users).where(eq(Users.id, id)).execute();
    return res.status(200).json(prepareSuccessResponse(user, "User deleted successfully"));
}

export default { getAllUsers, createUsers, getUserById, updateUser, deleteUser };