import express from "express"
import studentRoutes from "./routes/studentRoute.js"
import logger from "./middlewares/logger.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(logger)
app.use(studentRoutes)
app.use((req,res)=>{
    res.status(404).json({message:"route not found"})
})
const PORT=process.env.NUM_PORT
app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})