import { NextFunction, Request, Response } from "express";

// SERVICES

import UsersService from "../services/users"
import customError from "../utils/custom-error";

class UsersController {
    static getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const users = UsersService.getAll()

            res.status(200).json({ data: users })
        } catch (error) {
            next(error)
        }
    }

    static getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const user = UsersService.getById(id)

            res.status(200).json({ data: user })
        } catch (error) {
            next(error)
        }
    }

    static create(req: Request, res: Response, next: NextFunction) {
        try {
            UsersService.create(req.body)

            res.status(201)
        } catch (error) {
            next(error)
        }
    }
}

export default UsersController
