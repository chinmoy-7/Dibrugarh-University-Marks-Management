const router = require("express").Router();
const register = require("../Models/Registeration");
const jwt = require("jsonwebtoken");
const Auth = require("../Middlewares/JWT")

const Batch = require("../Models/Batch")
const student = require("../Models/Students")
//Add Batch Year
router.post("/api/add/batch",async (req,res)=>{
    try{
        const newBatch= await Batch.create(req.body)
        res.json({
            status:"success",
            newBatch
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

//Add Students
router.post("/api/add/students",async(req,res)=>{
    try{
        const {year,course}=req.body
        const batch = await Batch.find({year:year,course:course})
        const newStudent = await student.create({
            batchId:batch[0]._id,
            batchYear:year,
            email:req.body.email,
            name:req.body.name,
            rollno:req.body.rollno,
            password:req.body.password,
            course:course
        })
        console.log(newStudent)
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

module.exports = router;