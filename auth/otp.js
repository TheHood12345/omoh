const express = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/send-otp", async(req,res)=>{
    const {email} = req.body;

    try{
    const token = jwt.sign({email: email}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});

    const transporter = nodemailer.createTransport({
        host: "s1106.usc1.mysecurecloudhost.com",
        port: 465,
        secure: true,
        auth: {
            user: "otp@api.localtunez.com",
            pass: "b!05aOc93C04"
        }
    });
    
    let mailOptions = {
        from: '"Omoh" otp@api.localtunez.com',
        to: email,
        subject: 'Chambit Exchange',
        html: "<h1>018291</h1>"
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(400).json({message:"Failed to send OTP",token:token});
        }else{
            res.status(200).json({message:`Successfully sent OTP to ${email}`});
        }
    })
    
    }catch(err){
        res.status(400).json({message:"Some error occured", reason:err});
    }

})

module.exports = router;
