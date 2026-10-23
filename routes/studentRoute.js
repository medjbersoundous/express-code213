import { getStudentByID, getStudents, addStudent, 
    updateStudent, updateStudentByPatch, 
    deleteStudent} 
from "../controllers/studentController.js";
import express from "express"
const studentRoutes = express.Router()
studentRoutes.get("/students", getStudents)
studentRoutes.get("/students/:id", getStudentByID)
studentRoutes.post("/students", addStudent)
studentRoutes.put("/students/:id", updateStudent)
studentRoutes.delete("/students/:id", deleteStudent)
studentRoutes.patch("/students/:id", updateStudentByPatch)
export default studentRoutes