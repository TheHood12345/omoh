const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{
    console.log("Successfully connected to the database");
}).catch(()=>{
    console.log("Could not connect to the database");
});


const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema) 

module.exports = {User}





