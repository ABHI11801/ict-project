
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import { Typography, TextField, Button, Paper, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const UserDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const userData = location.state?.userData || {}

    const [inputs, setInputs] = useState({
        EmpId: userData.EmpId || "",
        Name: userData.Name || "",
        Username: userData.Username || "",
        Email: userData.Email || "",
        Password: userData.Password || "",
        Phone: userData.Phone || "",
        Address: userData.Address || "",
        Role: userData.Role || null,
        Team: userData.Team || null,
    })

    const [teams, setTeams] = useState([])

    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
    }

    const submitHandler = () => {
        console.log("button clicked")
        if (userData) {
            console.log(inputs)
            axios.put("http://localhost:5000/updateUser", { _id: userData._id, inputs })
                .then((res) => {
                    console.log(res)
                    window.alert(`User with EmpId:${inputs.EmpId} updated successfully!`);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            axios
                .post("http://localhost:5000/addUser", inputs)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        axios.get("http://localhost:5000/viewteams").then((res) => {
            setTeams(res.data)
        })
    }, [])

    const saveTeam = (val) => {
        console.log(val)
        setInputs({ ...inputs, Team: val })
        console.log(inputs)
    }

    const saveRole = (val) => {
        console.log(val)
        setInputs({ ...inputs, Role: val })
        console.log(inputs)
    }

    return (
        <div>
            <Nav />
            <Paper
                elevation={3}
                style={{
                    padding: "20px",
                    margin: "20px auto",
                    maxWidth: "80vw",
                    borderRadius: "15px",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "5vw" }}>
                    <div style={{ minWidth: "25vw" }}>
                        <TextField
                            fullWidth
                            label="Employee ID"
                            placeholder="Enter unique employee identifier (e.g., EMP12346)"
                            variant="outlined"
                            onChange={inputHandler}
                            name="EmpId"
                            value={userData.EmpId}
                        />
                        <br />
                        <br />

                        <TextField
                            fullWidth
                            label="Employee Name"
                            placeholder="Enter the name of the employee"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Name"
                            value={inputs.Name}
                        />
                        <br />
                        <br />

                        <TextField
                            fullWidth
                            label="Username"
                            placeholder="Unique username"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Username"
                            value={inputs.Username}
                        />

                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="Email"
                            placeholder="Enter email"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Email"
                            value={inputs.Email}
                        />

                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter Password"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Password"
                            value={inputs.Password}
                        />
                    </div>

                    <div style={{ minWidth: "25vw" }}>
                        <TextField
                            fullWidth
                            label="Phone no"
                            placeholder="Phone no"
                            variant="outlined"
                            onChange={inputHandler}
                            name="Phone"
                            value={inputs.Phone}
                        />

                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="Address"
                            placeholder="Address of the employee"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={inputHandler}
                            name="Address"
                            value={inputs.Address}
                        />
                        <br />
                        <br />

                        <Typography>Role:</Typography>
                        <ToggleButtonGroup value={inputs.Role} onChange={(e, value) => saveRole(value)} exclusive name="Role">
                            <ToggleButton value="admin">Admin</ToggleButton>
                            <ToggleButton value="manager">Manager</ToggleButton>
                            <ToggleButton value="executive">Executive</ToggleButton>
                        </ToggleButtonGroup>

                        <Typography>Team to be assigned to:</Typography>
                        <ToggleButtonGroup value={inputs.Team} onChange={(e, value) => saveTeam(value)} exclusive name="Team">
                            {teams.map((team, index) => (
                                <ToggleButton key={index} value={team.TeamName}>
                                    {team.TeamName}
                                </ToggleButton>
                            ))}
                            <ToggleButton value="admin">Admin</ToggleButton>
                            <ToggleButton value="executive">Executive</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            submitHandler()
                            navigate(-1)
                        }}
                        style={{ marginTop: "20px" }}
                    >
                        Submit
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default UserDetails
