import students from "../data/studentData.js";
function getStudents(req,res){
    res.status(200).json(students)
}
function getStudentByID(req,res){

    const id = Number(req.params.id)
    const student = students.find(s=>s.id ===id)
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
    res.status(200).json(student)
}
function addStudent(req,res){
    const newStudent={
        id:students.length+1,
        name:req.body.name,
        age:req.body.age
    }
    students.push(newStudent)
    res.status(201).json(newStudent)
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

export{getStudentByID, getStudents, addStudent, deleteStudent, updateStudent, updateStudentByPatch}