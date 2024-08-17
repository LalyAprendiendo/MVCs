import { writeFile } from "jsonfile"

import users from "../database/users.json"

class UsersModel {
    static getAll() {
        try {
            return users
        } catch (error) {
            throw error
        }
    }

    static write(data) {
        try {
            writeFile("./src/database/users.json", data)

            return true
        } catch (error) {
            throw error
        }
    }
}

export default UsersModel