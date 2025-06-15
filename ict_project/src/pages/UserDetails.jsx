"use client"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import {
  Typography,
  TextField,
  Button,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material"
import { Person, Email, Phone, LocationOn, Security, Group, Save, Badge } from "@mui/icons-material"
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
    console.log(inputs)
    if (userData?._id) {
      console.log(inputs)
      axios
        .put("http://localhost:5000/updateUser", { _id: userData._id, inputs })
        .then((res) => {
          console.log(res)
          window.alert(`User with EmpId:${inputs.EmpId} updated successfully!`)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
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
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Nav />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Person sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {userData?._id ? "Edit User" : "Create User"}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {userData?._id ? "Update user information" : "Add new user to the system"}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Main Form */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            background: "white",
          }}
        >
          <Box sx={{ p: 5 }}>
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} lg={6}>
                <Card
                  elevation={1}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <Badge sx={{ color: "#1976d2" }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                        Personal Information
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Employee ID"
                        placeholder="Enter unique employee identifier (e.g., EMP12346)"
                        variant="outlined"
                        onChange={inputHandler}
                        name="EmpId"
                        value={userData.EmpId}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Employee Name"
                        placeholder="Enter the name of the employee"
                        variant="outlined"
                        onChange={inputHandler}
                        name="Name"
                        value={inputs.Name}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Username"
                        placeholder="Unique username"
                        variant="outlined"
                        onChange={inputHandler}
                        name="Username"
                        value={inputs.Username}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Email"
                        placeholder="Enter email"
                        variant="outlined"
                        onChange={inputHandler}
                        name="Email"
                        value={inputs.Email}
                        InputProps={{
                          startAdornment: <Email sx={{ color: "text.secondary", mr: 1 }} />,
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Password"
                        placeholder="Enter Password"
                        variant="outlined"
                        type="password"
                        onChange={inputHandler}
                        name="Password"
                        value={inputs.Password}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} lg={6}>
                <Card
                  elevation={1}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <Security sx={{ color: "#1976d2" }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                        Contact & Role
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Phone no"
                        placeholder="Phone no"
                        variant="outlined"
                        onChange={inputHandler}
                        name="Phone"
                        value={inputs.Phone}
                        InputProps={{
                          startAdornment: <Phone sx={{ color: "text.secondary", mr: 1 }} />,
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

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
                        InputProps={{
                          startAdornment: (
                            <LocationOn sx={{ color: "text.secondary", mr: 1, alignSelf: "flex-start", mt: 1 }} />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <Box>
                        <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, color: "#555" }}>
                          Role:
                        </Typography>
                        <ToggleButtonGroup
                          value={inputs.Role}
                          onChange={(e, value) => saveRole(value)}
                          exclusive
                          name="Role"
                          sx={{
                            "& .MuiToggleButton-root": {
                              borderRadius: 2,
                              border: "1px solid #ddd",
                              px: 3,
                              py: 1,
                              "&.Mui-selected": {
                                backgroundColor: "#1976d2",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "#1565c0",
                                },
                              },
                            },
                          }}
                        >
                          <ToggleButton value="admin">Admin</ToggleButton>
                          <ToggleButton value="manager">Manager</ToggleButton>
                          <ToggleButton value="executive">Executive</ToggleButton>
                        </ToggleButtonGroup>
                      </Box>

                      <Box>
                        <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, color: "#555" }}>
                          Team to be assigned to:
                        </Typography>
                        <ToggleButtonGroup
                          value={inputs.Team}
                          onChange={(e, value) => saveTeam(value)}
                          exclusive
                          name="Team"
                          sx={{
                            flexWrap: "wrap",
                            gap: 1,
                            "& .MuiToggleButton-root": {
                              borderRadius: 2,
                              border: "1px solid #ddd",
                              px: 2,
                              py: 1,
                              "&.Mui-selected": {
                                backgroundColor: "#1976d2",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "#1565c0",
                                },
                              },
                            },
                          }}
                        >
                          {teams.map((team, index) => (
                            <ToggleButton key={index} value={team.TeamName}>
                              <Group sx={{ mr: 1, fontSize: 16 }} />
                              {team.TeamName}
                            </ToggleButton>
                          ))}
                          <ToggleButton value="admin">Admin</ToggleButton>
                          <ToggleButton value="executive">Executive</ToggleButton>
                        </ToggleButtonGroup>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Submit Section */}
          <Box
            sx={{
              p: 4,
              backgroundColor: "#f8f9fa",
              borderTop: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Save />}
              onClick={() => {
                submitHandler()
                navigate(-1)
              }}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              }}
            >
              {userData?._id ? "Update User" : "Create User"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default UserDetails
