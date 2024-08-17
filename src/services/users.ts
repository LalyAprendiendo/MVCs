import { v4 as uuidv4 } from "uuid"
// MODELS

import UsersModel from "../models/users"

import customError from "../utils/custom-error"

class UsersService {
    static getAll() {
        try {

            const users = UsersModel.getAll()

            return users
        } catch (error) {
            throw error
        }
    }

    static getById(id: string) {
        try {
            const users = UsersModel.getAll()

            const user = users.objects.find((user) => user.id.toString() == id)

            if (!user) customError({ message: "usuario no encontrado", status: 404 })

            return user
        } catch (error) {
            throw error
        }
    }

    static create(data) {
        // LLAMAR A ZOD PARA VALIDAR

        const users = UsersModel.getAll()
        data.id = uuidv4()
        users.objects.push(data)
        const created = UsersModel.write(users)

        if (!created) customError({ message: "Hubo un error al crear el usuario", status: 400 })

        return true
    }
}

export default UsersService