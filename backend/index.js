const express = require('express')
const app = express()

const db = require('./db')
var users = require('./models/user')
var leads = require('./models/lead')

const port = 5000

app.use(express.json())
const cors = require('cors')
app.use(cors())
 
app.get('/view',async(req,res)=>{
    const user = await users.find()
    return res.json(user)
})

app.get('/viewleads/:team',async(req,res)=>{
    const team = req.params.team
    const user = await leads.find({CurrentTeam : team})
    return res.json(user)
})

app.post('/createlead',async(req,res)=>{
    try {
        await leads(req.body).save()
        res.send("lead created")
    } catch (err) {
        console.log(err)
    }  
})


app.post('/addUser',async (req,res)=>{
    try {
        await users(req.body).save()
        res.send('User Added')
    } catch (err) {
        console.log(err)
    }
})

app.post('/login',async (req,res)=>{
    const username = req.body.Username
    const password = req.body.Password
    const user = await users.findOne({ Username: username })

    if(!user || user.Password !== password){
        return res.status(401).json({message: 'Invalid username or password'})
    }

    return res.status(200).json(user)
})
 app.get('/viewcontact',async(req,res)=>{
     const user = await users.find({},'Name Email Phone Role')
        return res.json(user)
})















app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})