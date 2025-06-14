const mongoose = require('mongoose')

const teamschema = mongoose.Schema(
    {
        TeamName: String,
        Active:{type:Number,default:0},
        Completed:{type:Number,default:0},
    }
)

const teamModel = mongoose.model("team",teamschema)

module.exports=teamModel