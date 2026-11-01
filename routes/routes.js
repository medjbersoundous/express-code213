import express from "express"
import teacherRoutes from "./teacherRoute.js"
import courseRoutes from "./courseRoutes.js"
import studentRoutes from "./studentRoute.js"

const router = express.Router()
router.use("/students", studentRoutes)
router.use("/teachers", teacherRoutes)
router.use("/courses", courseRoutes)

export default router