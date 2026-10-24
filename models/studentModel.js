import mongoose from "mongoose";
const studentSchema= new mongoose.Schema(
    {
        name:{
          type:String,
          required:[true, "name is required"],
          minlength:[3, "name must have at least 3 car "] 
        },
        age:{
            type:Number,
            required:[true,"age is required"],
            min:[16,"age must be at least 16"],
            max:[50,"age must be at most 60"]
        },
        image:{
            type:String,
            default:null
        }
    },{timestamps:true}
)
const Student = mongoose.model("Student", studentSchema)
export default Student