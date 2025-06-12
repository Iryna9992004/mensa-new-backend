import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../domain/user/user.repository"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
