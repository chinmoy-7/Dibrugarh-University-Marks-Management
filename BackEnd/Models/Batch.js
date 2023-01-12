const mongoose = require("mongoose");

const BatchSchema = mongoose.Schema({
    course:String,
    year:{type:String}
})

const batch = mongoose.model("batch",BatchSchema);

module.exports = batch;