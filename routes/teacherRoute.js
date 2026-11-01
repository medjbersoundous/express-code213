import express from "express"
import { addTeacher, getTeachers, getTeacherByID, deleteTeacher } from "../controllers/teacherController.js"
const teacherRoutes = express.Router()
teacherRoutes.post("/teacher", addTeacher)
teacherRoutes.get("/teachers", getTeachers)
teacherRoutes.get("/teacher/:id", getTeacherByID) 
teacherRoutes.delete("/delete/:id", deleteTeacher)
export default teacherRoutes