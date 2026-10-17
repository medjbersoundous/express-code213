import express from "express"
import studentRoutes from "./routes/studentRoute.js"
const app = express()
app.use(express.json())
app.use(studentRoutes)
app.listen(3000, ()=>{
    console.log("server running at port 3000 ")
})