const express = require('express')
const app = express()

const db = require('./db')
var users = require('./models/user')

const port = 5000

app.use(express.json())
const cors = require('cors')
app.use(cors())
 
app.get('/view',async(req,res)=>{
    const user = await users.find()
    return res.json(user)
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















app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})