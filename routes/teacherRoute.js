import express from "express"
import { addTeacher, getTeachers, getTeacherByID, deleteTeacher } from "../controllers/teacherController.js"
import verifyToken from "../middlewares/auth.js"
const teacherRoutes = express.Router()
teacherRoutes.post("/teacher", addTeacher)
teacherRoutes.get("/teachers", verifyToken, getTeachers)
teacherRoutes.get("/teacher/:id",verifyToken, getTeacherByID) 
teacherRoutes.delete("/delete/:id", verifyToken, deleteTeacher)
export default teacherRoutes