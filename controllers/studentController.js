import Student from "../models/studentModel.js";
async function getStudents(req,res){
    // res.status(200).json(students)
    // res.render("talamid", {title:"liste des etudiants", students})
    try{
        const students = await Student.find()
        res.status(200).json(students)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
function formulaireAddStudent(req,res){
    res.render("addStudent")
}
function getStudentByID(req,res){

    const id = Number(req.params.id)
    const student = students.find(s=>s.id ===id)
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
    res.status(200).json(student)  
}
async function addStudent(req,res){
    try {
        const newStudent = await Student.create({
            name:req.body.name,
            age:req.body.age
        })
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }

    // res.status(201).json(newStudent)
    // res.redirect("/students")
}
function updateStudent(req,res){
    const id = Number(req.params.id)
    const student =students.find(s=>s.id===id)
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
    student.name=req.body.name
    student.age=req.body.age
    res.status(200).json(student)
}
function updateStudentByPatch(req,res){
     const id = Number(req.params.id)
    const student =students.find(s=>s.id===id)
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
    if(req.body.name!==undefined){
         student.name=req.body.name
    }
    if(req.body.age!==undefined){
         student.age=req.body.age
    }
    res.status(200).json(student)

}

function deleteStudent(req, res) {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const index = students.indexOf(student)
    students.splice(index, 1)
    res.json(students)
}

export{getStudentByID, getStudents, addStudent, deleteStudent, updateStudent, updateStudentByPatch, formulaireAddStudent}