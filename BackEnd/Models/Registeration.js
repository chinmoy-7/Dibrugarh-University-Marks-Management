const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    userId:String,
    username:String,
    email:String,
    password:String
})

const register = mongoose.model("register",registerSchema);

module.exports = register;