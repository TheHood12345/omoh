const express = require("express");
const { User } = require("../db_schema");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async(req,res)=>{
    const {email, password, token} = req.body;

    try{
        const ver = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(ver.email == email){
            const user = await User.create({email: email, password: password});
            res.status(200).json({message:`Successfully signed up, ${email}`}); 
        } 
    }catch(err){
        res.status(400).json({message:"Failed to sign up",reason:err});
    }
})

module.exports = router;
