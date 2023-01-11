const router = require("express").Router();
const register = require("../Models/Registeration");
const jwt = require("jsonwebtoken");
const Auth = require("../Middlewares/JWT")
router.get("/test",Auth,(req,res)=>{
    console.log(res.userId)
})

module.exports = router;