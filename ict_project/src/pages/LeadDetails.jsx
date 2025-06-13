import React, { useState } from 'react'

import Nav from '../components/Nav'
import { Typography, TextField, Box, Button, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const LeadDetails = () => {
  var [inputs, setInputs] = useState({ CurrentStatus: "active" });
  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs)
  };
  var location = useLocation();


  console.log("state:", location.state);
  const submitHandler = () => {
    console.log("button clicked")
    axios.post('http://localhost:5000/createlead', inputs)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

      axios.post('http://localhost:5000/addActiveTeamdata',inputs)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })

  };




  //KB from here..

  const [selectedTeam,selectTeam] = useState(null)
  const [teams,setTeams] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/viewteams')
    .then((res)=>{
      setTeams(res.data)
    })
  },[])

  const saveTeam = (val) =>{
    console.log(val)
    selectTeam(val)
    setInputs({ ...inputs, CurrentTeam: val });
    console.log(inputs)
    
  }

  const navigate = useNavigate()


  //till here

  return (
    <div>
      <Nav />
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          margin: '20px auto',
          maxWidth: '800px',
          borderRadius:"15px"
        }}
      >
        <TextField
          fullWidth
          label="Lead ID"
          placeholder="Enter unique lead identifier (e.g., LD12346)"
          variant="outlined"
          onChange={inputHandler}
          name="LeadId"
        />
        <br /><br />

        <TextField
          fullWidth
          label="Lead Title"
          placeholder="Enter the title of the lead"
          variant="outlined"
          onChange={inputHandler}
          name="Name"
        />
        <br /><br />

        <TextField
          fullWidth
          label="Description"
          placeholder="Briefly describe the project or lead focus"
          multiline
          rows={4}
          variant="outlined"
          onChange={inputHandler}
          name="Desc"
        />
        <br /><br />

        <TextField
          fullWidth
          label="Due Date"
          placeholder="Select or enter the due date (YYYY-MM-DD)"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={inputHandler}
          name="DueDate"
        />
        <br /><br />


        {/* KB from here.. */}
        <Typography>Team to be assigned to:</Typography>
        <ToggleButtonGroup
          value={selectedTeam}
          onChange={(e, value) => saveTeam(value)}
          exclusive
          name="CurrentTeam"
        >
          {teams.map((team,index)=>(
            <ToggleButton key={index} value={team.TeamName}>{team.TeamName}</ToggleButton>
          ))}
        </ToggleButtonGroup>

        
        <br /><br />

        {/* till here */}

        <TextField
          fullWidth
          label="Previous Team Notes"
          placeholder="Add any notes or updates from the previous team"
          multiline
          rows={4}
          variant="outlined"
          onChange={inputHandler}
          name="PreviousTeamNotes"
        />
        <br /><br />

        <Button
          variant='contained'
          onClick={()=>{submitHandler();navigate(-1)}}
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
        
      </Paper>
    </div>
  )
}

export default LeadDetails
