import express from "express"
import teacherRoutes from "./teacherRoute.js"
import courseRoutes from "./courseRoutes.js"
import studentRoutes from "./studentRoute.js"
import adminRoutes from "./adminRoutes.js"
const router = express.Router()
router.use("/students", studentRoutes)
router.use("/teachers", teacherRoutes)
router.use("/courses", courseRoutes)
router.use("/admins", adminRoutes)

export default router