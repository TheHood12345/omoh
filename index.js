const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", async(req,res)=>{
    res.send("ALL GOOD");
})

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log(`Server started on http:${process.env.IP}:${process.env.PORT}`);
});