import { Router } from "express";

// ROUTERS

import chartsRouter from "./charts";
import usersRouter from "./users";
import authRouter from "./auth";

const indexRouter = Router()

// ROUTES

indexRouter.use("/auth", authRouter)
indexRouter.use("/users", usersRouter)
indexRouter.use("/charts", chartsRouter)

export default indexRouter