import express from 'express'
import cors from 'cors'
import router from './router'
import db from './config/db'

async function connectDB() {
  try {
    await db.authenticate()   // 👈 también faltaban los paréntesis aquí
    db.sync()
    console.log("Conexion Exitosa")
  } catch (error) {
    console.log(error)
    console.log("Hubo un error al conectar")
  }
}

connectDB()

const server = express()

server.use(cors({
  origin: 'http://localhost:5173'
}))

server.use(express.json())
server.use('/api/guitarras', router)
export default server