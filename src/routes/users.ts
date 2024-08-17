import { Router } from "express";

// CONTROLLERS

import UsersController from "../controllers/users";

// ROUTES

const usersRouter = Router()

usersRouter.get("/", UsersController.getAll)
usersRouter.get("/:id", UsersController.getById)
usersRouter.post("/", UsersController.create)


export default usersRouter