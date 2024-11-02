const express = require("express");
const { User } = require("../db_schema");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.get("/login", async(req,res)=>{
    const {email, password} = req.query;

    try{
        const token = jwt.sign({email: email}, process.env.JWT_SECRET_KEY, {expiresIn: "2d"});
        const users = await User.find();
        users.forEach((user)=>{
            if(user.email == email){
                
                res.status(200).json({message:"Successfully logged in", content:{email:user.email,token:token}});
            }
        })
    }catch(err){
        res.status(400).json({message:"Failed to log in",reason:err});
    }

})

module.exports = router;
