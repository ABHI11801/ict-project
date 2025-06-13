import React, { useState } from 'react'

import Nav from '../components/Nav'
import { Typography,TextField,Box, Button,Paper } from '@mui/material'
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
const LeadDetails = () => {
   var[inputs,setInputs]=useState({CurrentStatus: "Active"});
  const inputHandler=(e)=>{
      setInputs({...inputs,[e.target.name]:e.target.value});
      console.log(inputs)
  };
   var location=useLocation();
      

       console.log("state:",location.state);
  const submitHandler=()=>{
    console.log("button clicked")
    axios.post('http://localhost:5000/createlead',inputs)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  };

  return (
    <div>
      <Nav/>
      <Paper 
        elevation={3} 
        style={{
          padding: '20px',
          margin: '20px auto',
          maxWidth: '800px'
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
        <br/><br />

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
        <br/><br />

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
        <br/><br />

        <TextField
          fullWidth
          label="Assigned Team"
          placeholder="Specify the team currently handling this lead"
          variant="outlined" 
          onChange={inputHandler} 
          name="CurrentTeam"
        />
        <br/><br />

        

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
        <br/><br />

        <Button 
          variant='contained'
          onClick={submitHandler}
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </Paper>
    </div>  
  )
}

export default LeadDetails
