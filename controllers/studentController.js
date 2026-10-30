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
async function getStudentByID(req,res){
    try {
        // const id = Number(req.params.id)
    const student = await Student.findById(req.params.id)
    if(!student){
        return res.status(404).json({message:"student not found"})
    }
    res.status(200).json(student)  
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }    
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
async function updateStudent(req,res){
    // const id = Number(req.params.id)
    // const student =students.find(s=>s.id===id)
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, 
        {name:req.body.name, age:req.body.age}, {new:true})
      if(!student){
        return res.status(404).json({message:"student not found"})
      }
      res.status(200).json(student)
    } catch (error) {
        
    res.status(500).json({message:error.message})
    }
}
async function updateStudentByPatch(req,res){
    const updates={}
    if(req.body.name!==undefined) updates.name=req.body.name //updates={name:"...."}
    if(req.body.age!==undefined) updates.age=req.body.age
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, 
            updates, {new:true})
        if(!student){
        return res.status(404).json({message:"student not found"})
      }
      res.status(200).json(student)
    } catch (error) {
        
    res.status(500).json({message:error.message})
    }
}

async function deleteStudent(req, res) {
    // const id = Number(req.params.id);
    try {
        const student = await Student.findByIdAndDelete(req.params.id)
        if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
        }
        res.status(200).json({message:"deleted succesfully"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

export{getStudentByID, getStudents, addStudent, deleteStudent, updateStudent, updateStudentByPatch, formulaireAddStudent}