import express from "express"
import { addCourse, updateCourse, getCourseByID, getCourses, deleteCourse} from "../controllers/courseController.js"
import validateCourse from "../validators/courseValidator.js"
const courseRoutes = express.Router()
courseRoutes.post("/course", validateCourse, addCourse)
courseRoutes.get("/courses", getCourses)
courseRoutes.get("/course/:id", getCourseByID) 
courseRoutes.put("/modify", updateCourse)
courseRoutes.delete("/course/:id", deleteCourse)
export default courseRoutes