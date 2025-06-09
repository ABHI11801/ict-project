const mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    LeadId: String,
    Name: String,
    Desc: String,
    DueDate: Date,
    CurrentTeam: String,
    CurrentStatus: String,
    PreviousTeamNotes: String
});

const leadModel = mongoose.model("lead", leadSchema);

module.exports = leadModel;
