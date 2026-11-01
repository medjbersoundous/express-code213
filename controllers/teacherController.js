
import Teacher from "../models/teacherModel.js"
async function getTeachers(req, res) {
    try {
        const teachers = await Teacher.find().populate("course")

        res.status(200).json(teachers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function getTeacherByID(req, res) {
    try {
        const teacher = await Teacher.findById(req.params.id)
            .populate("course")

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" })
        }

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function addTeacher(req, res) {
    try {
        const newTeacher = await Teacher.create({
            name: req.body.name,
            course: req.body.course
        })

        res.status(201).json(newTeacher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function updateTeacher(req, res) {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                course: req.body.course
            },
            {
                new: true
            }
        )

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" })
        }

        res.status(200).json(teacher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function updateTeacherByPatch(req, res) {

    
    const updates = {}

    if (req.body.name !== undefined) {
        updates.name = req.body.name
    }

    if (req.body.course !== undefined) {
        updates.course = req.body.course
    }

    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        )

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" })
        }

        res.status(200).json(teacher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function deleteTeacher(req, res) {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id)

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" })
        }

        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export {
    getTeachers,
    getTeacherByID,
    addTeacher,
    updateTeacher,
    updateTeacherByPatch,
    deleteTeacher
}
