const jwt = require("jsonwebtoken")

const Auth = async (req,res,next)=>{
    const token = req.headers.authorization;
    if(token!=undefined){
        const user=jwt.verify(token,process.env.JWT_SECRET)
        res.userId=user.userId
        next();
        return res.json({
            status:"success",
        })
    }else{
        res.json({
            status:"failed",
            message:"Access Forbidden"
        })
    }
}

module.exports = Auth;