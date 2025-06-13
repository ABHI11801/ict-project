import React, { useState } from 'react'

import Nav from '../components/Nav'
import { Typography, TextField, Box, Button, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const UserDetails = () => {
    var [inputs, setInputs] = useState();
    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs)
    };
    var location = useLocation();


    console.log("state:", location.state);
    const submitHandler = () => {
        console.log("button clicked")
        axios.post('http://localhost:5000/addUser', inputs)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    };
    const navigate = useNavigate()

    const [selectedTeam, selectTeam] = useState(null)
    const [selectedRole, selectRole] = useState(null)
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/viewteams')
            .then((res) => {
                setTeams(res.data)
            })
    }, [])

    const saveTeam = (val) => {
        console.log(val)
        selectTeam(val)
        setInputs({ ...inputs, Team: val });
        console.log(inputs)

    }
    const saveRole = (val) => {
        console.log(val)
        selectRole(val)
        setInputs({ ...inputs, Role: val });
        console.log(inputs)

    }


    return (
        <div>
            <Nav />
            <Paper
                elevation={3}
                style={{
                    padding: '20px',
                    margin: '20px auto',
                    maxWidth:'80vw',
                    borderRadius: "15px"
                }}
            >
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padding:"5vw",}}>
                    <div style={{minWidth:"25vw"}}>
                        <TextField
                            fullWidth
                            label="Employee ID"
                            placeholder="Enter unique employee identifier (e.g., EMP12346)"
                            variant="outlined"
                            onChange={inputHandler}
                            name="EmpId"
                        />
                        <br /><br />

                        <TextField
                            fullWidth
                            label="Employee Name"
                            placeholder="Enter the name of the employee"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Name"
                        />
                        <br /><br />

                        <TextField
                            fullWidth
                            label="Username"
                            placeholder="Unique username"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Username"
                        />

                        <br /><br />
                        <TextField
                            fullWidth
                            label="Email"
                            placeholder="ENter email"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Email"
                        />

                        <br /><br />
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter Password"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Password"
                        />
                    </div>

                    <div style={{minWidth:"25vw"}}>
                        <TextField
                            fullWidth
                            label="Phone no"
                            placeholder="Phone no"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Phone"
                        />

                        <br /><br />
                        <TextField
                            fullWidth
                            label="Address"
                            placeholder="Address of the employee"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={inputHandler}
                            name="Address"
                        />
                        <br /><br />


                        <Typography>Role:</Typography>
                        <ToggleButtonGroup
                            value={selectedRole}
                            onChange={(e, value) => saveRole(value)}
                            exclusive
                            name="Role"
                        >
                            <ToggleButton value={"admin"}>Admin</ToggleButton>
                            <ToggleButton value={"manager"}>Manager</ToggleButton>
                            <ToggleButton value={"executive"}>Executive</ToggleButton>
                        </ToggleButtonGroup>
                        <Typography>Team to be assigned to:</Typography>
                        <ToggleButtonGroup
                            value={selectedTeam}
                            onChange={(e, value) => saveTeam(value)}
                            exclusive
                            name="Team"
                        >
                            {teams.map((team, index) => (
                                <ToggleButton key={index} value={team.TeamName}>{team.TeamName}</ToggleButton>
                            ))}
                            <ToggleButton value={"admin"}>Admin</ToggleButton>
                            <ToggleButton value={"executive"}>Executive</ToggleButton>
                        </ToggleButtonGroup>


                    </div>
                </div>

                <div style={{display:"flex",justifySelf:"center"}}>
                    <Button
                    variant='contained'
                    onClick={() => { submitHandler(); navigate(-1) }}
                    style={{ marginTop: '20px' }}
                >
                    Submit
                </Button>
                </div>

            </Paper>
        </div>
    )
}

export default UserDetails
