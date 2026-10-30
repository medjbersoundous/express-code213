import { getStudentByID, getStudents, addStudent, 
    updateStudent, updateStudentByPatch, 
    deleteStudent,
    formulaireAddStudent} 
from "../controllers/studentController.js";
import express from "express"
import upload from "../middlewares/multer.js";
import multer from "multer";
const uploads = multer()
const studentRoutes = express.Router()
studentRoutes.get("/students", getStudents)
studentRoutes.get("/students/new", formulaireAddStudent)
studentRoutes.get("/students/:id", getStudentByID)
studentRoutes.post("/students", addStudent)
studentRoutes.put("/students/:id", uploads.none(),updateStudent)
studentRoutes.delete("/students/:id", deleteStudent)
studentRoutes.patch("/students/:id", updateStudentByPatch)
studentRoutes.post("/addimage", upload.single("image") , (req, res)=>{
    res.json({message:"image uploaded succesfully", file:req.file})
})
export default studentRoutes