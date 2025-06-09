const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://killerbean:Password@cluster0.sddlmmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{console.log("DB_CONNECTED")})
.catch((err)=>{console.log(err)})