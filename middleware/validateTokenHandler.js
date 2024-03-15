const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken")

const validateToken=asyncHandler(async (req,res,next)=>{
    let token;
    let autHeader=req.headers.Authorization || req.headers.authorization;
    if(autHeader && authHeader.startsWith("Bearer")) {
        token=autHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user=decoded.user;
            next();
        });

        if(!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports= validateToken;