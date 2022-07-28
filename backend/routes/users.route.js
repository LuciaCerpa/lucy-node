import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser, loginController }  from "../controllers/users.controller.js";

const usersRouter = express.Router();

usersRouter.post("/login", loginController)

usersRouter.get("/", getAllUsers)
usersRouter.post("/", createUser)
usersRouter.patch("/", updateUser)
usersRouter.delete("/", deleteUser)

export default usersRouter;