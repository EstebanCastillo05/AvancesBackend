import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";

export const sequelize = new Sequelize({
    database: "postgres",
    username: "postgres",
    password: "bansaiko",
    host: "localhost",
    dialect: "postgres",
    models: [User],
})