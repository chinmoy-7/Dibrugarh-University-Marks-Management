const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    batchId:String,
    batchYear:String,
    email:String,
    name:String,
    rollno:String,
    password:String,
    course:String
})

const student = mongoose.model("student",StudentSchema);

module.exports = student;