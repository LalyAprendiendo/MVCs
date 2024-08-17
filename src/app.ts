import express, { json } from "express";

import errorHandler from "./middlewares/error-handler";

import indexRouter from "./routes";

const app = express()

// MIDDLEWARES

app.use(json())

// ROUTES

app.use("/status", (req, res) => {
    res.status(200).json({
        status: "OK",
        environment: "Development"
    })
})

app.use("/", indexRouter)

app.use(errorHandler)

export default app


// CLIENTE => RUTAS => CONTROLADOR <=> SERVICIOS <=> MODELO <=> BD