const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async(req,res)=>{
    res.send("ALL GOOD");
})

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log(`Server started on http:${process.env.IP}:${process.env.PORT}`);
}); 
