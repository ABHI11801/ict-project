const express = require('express')
const app = express()

const db = require('./db')
var users = require('./models/user')
var leads = require('./models/lead')
var teams = require('./models/team')
var teamleads = require('./models/teamlead')

const port = 5000

app.use(express.json())
const cors = require('cors')
app.use(cors())
 
app.get('/view',async(req,res)=>{
    const user = await users.find()
    return res.json(user)
})

app.get('/viewleads',async(req,res)=>{
    const user = await leads.find()
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


//********add new team****************
app.post('/addTeam',async(req,res)=>{
    try {
        await teams(req.body).save()
        res.send('Team added')
    } catch (err) {
        console.log(err)
    }
})


//************view teams********** *
app.get('/viewteams',async(req,res)=>{
    try {
        const teamname = await teams.find({},{TeamName:1, _id:0})
        return res.json(teamname)
    } catch (err) {
        console.log(err)
    }
})


//*********view teamname and completed vs active */
app.get('/getTeamdata',async(req,res)=>{
    try {
        const teamdeets = await teams.find({},{TeamName:1,Active:1,Completed:1,_id:0})
        return res.json(teamdeets)
    } catch (err) {
        console.log(err)
    }
})

app.post('/addActiveTeamdata',async (req,res)=>{
    try {
        const team = await teams.findOneAndUpdate({TeamName:req.body.CurrentTeam},{$inc :{Active:1}})
        res.send("Updated")
    } catch (err) {
        console.log(err)
    }
})

app.put('/updateUser',async(req,res)=>{
    try {
        const {_id,inputs} = req.body
        const user = await users.findByIdAndUpdate(_id,inputs,{new:true})
        return res.json(user)
    } catch (err) {
        console.log(err)
    }
})

app.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        await users.findByIdAndDelete(id)
        res.send("User Deleted")
    } catch (err) {
        console.log(err)
    }
})








app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})