import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import Guitarra from '../models/Guitarra.model'

dotenv.config()

const db = new Sequelize(process.env.DB_URL!, {
    dialect: 'postgres',
    models: [Guitarra],
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
})

export default db