"use client"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import {
  Typography,
  TextField,
  Box,
  Button,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Grid,
  Divider,
} from "@mui/material"
import { Assignment, CalendarToday, Group, Description, Save } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const LeadDetails = () => {
  const [inputs, setInputs] = useState({ CurrentStatus: "active" })
  const [selectedTeam, selectTeam] = useState(null)
  const [teams, setTeams] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs)
  }

  useEffect(() => {
    axios.get("http://localhost:5000/viewteams").then((res) => {
      setTeams(res.data)
    })
  }, [])

  const saveTeam = (val) => {
    console.log(val)
    selectTeam(val)
    setInputs({ ...inputs, CurrentTeam: val })
    console.log(inputs)
  }

  const submitHandler = () => {
    console.log("button clicked")
    const Input = { ...inputs, PreviousTeamNotes: "" }
    console.log(inputs)
    axios
      .post("http://localhost:5000/createlead", Input)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .post("http://localhost:5000/addActiveTeamdata", Input)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
    .put(`http://localhost:5000/addToTeamLead/${Input.LeadId}/${Input.CurrentTeam}/active`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  console.log("state:", location.state)

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Nav />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Assignment sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Lead Details
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Create and manage lead information
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "white",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Assignment color="primary" />
                <Typography variant="h6" color="primary">
                  Lead Information
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="Lead ID"
                placeholder="Enter unique lead identifier (e.g., LD12346)"
                variant="outlined"
                onChange={inputHandler}
                name="LeadId"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ height: "40px", marginTop: "8px", minWidth: "20vw" }}></Box>
              <TextField
                fullWidth
                label="Lead Title"
                placeholder="Enter the title of the lead"
                variant="outlined"
                onChange={inputHandler}
                name="Name"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <CalendarToday color="primary" />
                <Typography variant="h6" color="primary">
                  Timeline
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="Due Date"
                placeholder="Select or enter the due date (YYYY-MM-DD)"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                onChange={inputHandler}
                name="DueDate"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, minWidth: "33vw" }}>
                <Description color="primary" />
                <Typography variant="h6" color="primary">
                  Project Details
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="Description"
                placeholder="Briefly describe the project or lead focus"
                multiline
                rows={8}
                variant="outlined"
                onChange={inputHandler}
                name="Desc"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Group color="primary" />
                <Typography variant="h6" color="primary">
                  Team Assignment
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Select team to assign this lead to:
              </Typography>
              <ToggleButtonGroup
                value={selectedTeam}
                onChange={(e, value) => saveTeam(value)}
                exclusive
                name="CurrentTeam"
                sx={{
                  flexWrap: "wrap",
                  gap: 1,
                  "& .MuiToggleButton-root": {
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    "&.Mui-selected": {
                      backgroundColor: "#667eea",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#5a6fd8",
                      },
                    },
                  },
                }}
              >
                {teams.map((team, index) => (
                  <ToggleButton key={index} value={team.TeamName}>
                    {team.TeamName}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>


            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                    },
                  }}
                >
                  Submit Lead
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default LeadDetails
