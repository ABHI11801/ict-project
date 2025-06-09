const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    EmpId:String,
    Name:String,
    Username:String,
    Email:String,
    Password:String,
    Phone:String,
    Address:String,
    Role:String,
    Team:String
})

var userModel = mongoose.model("user",userSchema)

module.exports = userModel