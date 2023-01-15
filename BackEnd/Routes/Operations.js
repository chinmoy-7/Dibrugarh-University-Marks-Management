const router = require("express").Router();
const register = require("../Models/Registeration");
const jwt = require("jsonwebtoken");
const Auth = require("../Middlewares/JWT");

const Batch = require("../Models/Batch");
const student = require("../Models/Students");
//Add Batch Year
router.post("/api/add/batch", Auth, async (req, res) => {
  try {
    const newBatch = await Batch.create(req.body);
    res.json({
      status: "success",
      newBatch,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});
//Get Batches
router.get("/get/batch/:batch", Auth, async (req, res) => {
  try {
    let { batch } = req.params;
    batch = batch.toUpperCase();
    console.log(batch);
    const allBatch = await Batch.find({ course: batch });
    if (allBatch.length == 0) {
      return res.json({
        status: "failed",
        message: "No Batch found",
      });
    }

    res.json({
      status: "success",
      allBatch,
    });
  } catch (e) {
    res.json({
        status:"failed",
        message:e.message
    })
  }
});

//Add Students
router.post("/api/add/students", Auth, async (req, res) => {
  try {
    const { year, course } = req.body;
    const batch = await Batch.find({ year: year, course: course });
    const newStudent = await student.create({
      batchId: batch[0]._id,
      batchYear: year,
      email: req.body.email,
      name: req.body.name,
      rollno: req.body.rollno,
      password: req.body.password,
      course: course,
    });
    console.log(newStudent);
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

//Delete Batch
router.delete("/api/batch/delete/:id",Auth,async(req,res)=>{
  try{
    const {id}=req.params
    console.log(id)
    const deleted=await Batch.deleteOne({_id:id});
    if(deleted.deletedCount==0){
      return res.json({
        status:"failed",
        message:"No Batch Found"
      })
    }
    res.json({
      status:"success"
    })

  }catch(e){
    res.json({
      status:"failed",
      message:e.message
    })
  }
})

module.exports = router;
