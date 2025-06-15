"use client"

import { Button, TextField, Paper, Typography, Box } from "@mui/material"
import { Add } from "@mui/icons-material"
import axios from "axios"
import { useState } from "react"

const AddTeam = () => {
  const [inputs, setInputs] = useState({ TeamName: "" })
  const [loading, setLoading] = useState(false)

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs)
  }

  const submitHandler = async () => {
    if (!inputs.TeamName.trim()) return

    setLoading(true)
    try {
      const res = await axios.post("http://localhost:5000/addTeam", inputs)
      console.log(res.data)
      window.alert(`Team: ${inputs.TeamName} added successfully!`)
      setInputs({ TeamName: "" })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        background: "white",
        minWidth: 300,
        height: "fit-content",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: "#2c3e50",
        }}
      >
        Add New Team
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          label="Team Name"
          placeholder="Enter team name"
          variant="outlined"
          onChange={inputHandler}
          name="TeamName"
          value={inputs.TeamName}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              "&:hover fieldset": {
                borderColor: "#3498db",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3498db",
              },
            },
          }}
        />
        <Button
          onClick={submitHandler}
          disabled={loading || !inputs.TeamName.trim()}
          variant="contained"
          startIcon={<Add />}
          sx={{
            borderRadius: 2,
            py: 1.5,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
            },
            "&:disabled": {
              background: "#e0e0e0",
            },
          }}
        >
          {loading ? "Adding..." : "Add Team"}
        </Button>
      </Box>
    </Paper>
  )
}

export default AddTeam
