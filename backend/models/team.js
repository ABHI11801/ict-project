const mongoose = require('mongoose')

const teamschema = mongoose.Schema(
    {
        TeamName: String,
        Active:Number,
        Completed:Number,
    }
)

const teamModel = mongoose.model("team",teamschema)

module.exports=teamModel