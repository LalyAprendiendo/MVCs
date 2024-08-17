import { Router } from "express";

// CONTROLLERS

import ChartsController from "../controllers/charts";

// ROUTES

const chartsRouter = Router()

chartsRouter.get("/", ChartsController.getAll)


export default chartsRouter