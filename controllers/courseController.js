
import Course from "../models/courseModel.js"
import Teacher from "../models/teacherModel.js"
import Student from "../models/studentModel.js"

async function getCourses(req, res) {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function getCourseByID(req, res) {
    try {
        const course = await Course.findById(req.params.id)

        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }
        const teachers = await Teacher.find({
            course: course._id
        })
        const students = await Student.find({
            courses: course._id
        })

        res.status(200).json({
            course,
            teachers,
            students
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function addCourse(req, res) {
    try {
        const newCourse = await Course.create({
            title: req.body.title,
            duree:req.body.duree
        })

        res.status(201).json(newCourse)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function updateCourse(req, res) {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title
            },
            {
                new: true
            }
        )

        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function updateCourseByPatch(req, res) {
    const updates = {}

    if (req.body.title !== undefined) {
        updates.title = req.body.title
    }
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true }
        )
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
async function deleteCourse(req,res){
    try {
        const course = await Course.findById(req.params.id)
        if(!course){
            return res.status(404).json({message:"course not found"})
        }
        await Teacher.findOneAndDelete({
            course:course._id
        })
        await Course.findByIdAndDelete(course._id)
       res.status(200).json({message:"course and associated deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export {
    getCourses,
    getCourseByID,
    addCourse,
    updateCourse,
    updateCourseByPatch,
    deleteCourse
}
