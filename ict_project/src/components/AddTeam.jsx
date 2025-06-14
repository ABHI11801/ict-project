import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddTeam = () => {
    var [inputs,setInputs] = useState({ TeamName: '' })
    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
    }
    const submitHandler = ()=>{
        axios.post("http://localhost:5000/addTeam",inputs)
        .then((res)=>{
            console.log(res.data)
            window.alert(`Team: ${inputs.TeamName} added succesfully!`)
            setInputs({ TeamName: '' });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div style={{margin:"2vw"}}>
            <TextField
                fullWidth
                label="Team Name"
                placeholder="Enter teamname"
                variant="outlined"
                onChange={inputHandler}
                name="TeamName"
                value={inputs.TeamName}
            />
            <Button onClick={submitHandler}>Submit</Button>
        </div>
    )
}

export default AddTeam