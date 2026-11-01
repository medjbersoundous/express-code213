import { body, validationResult } from "express-validator"
const validateCourse = [
    body("title")
      .trim() // "     " => ""
      .notEmpty()
      .withMessage("the title is mandoraty")
      .bail()
      .isLength({min:3, max:10})
      .withMessage("the title should have at least 3 caracters"),
    body("duree") //req.body.duree
      .trim()
      .notEmpty()
      .withMessage("the duration is mandoraty")
      .bail()
      .isFloat({min:1})
      .withMessage("the duration should be 1h min"),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next()
    }
]
export default validateCourse