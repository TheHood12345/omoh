const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {User} = require("./db_schema");
const otp = require("./auth/otp");
const signup = require("./auth/signup");
const login = require("./auth/login");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", otp);
app.use("/auth", signup);
app.use("/auth",login);


app.get("/", async(req,res)=>{
    res.send("ALL GOOD");
})

app.get("/create-dummy", async(req,res)=>{
    try{
    const user = await User.find();
    res.status(200).json({message:user});
    }catch{
        res.status(400).json({message:"Not good"});
    }
})

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log(`Server started on http:${process.env.IP}:${process.env.PORT}`);
}); 
