import express from "express"
import { addAdmin, login } from "../controllers/adminController.js"
const adminRoutes = express.Router()
adminRoutes.post("/admin", addAdmin)
adminRoutes.post("/login", login)
export default adminRoutes