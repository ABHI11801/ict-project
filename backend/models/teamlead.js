const mongoose = require('mongoose')

const teamLeadSchema = mongoose.Schema(
    {
        LeadId: String,
        TeamName:String,
        Status:String,
    }
)

const teamLeadModel = mongoose.model("teamlead",teamLeadSchema)

module.exports=teamLeadModel