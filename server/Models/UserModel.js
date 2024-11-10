const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new mongoose.Schema({
    emails:{
        type:String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password is Required"],
    }
})

module.exports = mongoose.model("Users", userSchema);