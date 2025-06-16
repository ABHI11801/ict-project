import { Group, LocationOn } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PassPopUp = ({ open, onClose, id, leadid, team }) => {
    const [inputs, setInputs] = useState({})
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/viewteams")
            .then((res) => {
                setTeams(res.data)
            })
            .catch((res) => {
                console.log(res)
            })
    }, [])


    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
    }

    const saveTeam = (val) => {
        console.log(val)
        setInputs({ ...inputs, CurrentTeam: val })
        console.log(inputs)
    }
    const submitHandler = () => {
        console.log("button clicked")
        console.log(inputs)
        axios.put(`http://localhost:5000/passlead/${id}`, inputs)
            .then((res) => {
                console.log(res)
            })
            .catch((res) => {
                console.log(res)
            })

        axios
            .put(`http://localhost:5000/addToTeamLead/${leadid}/${team}/completed`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .put(`http://localhost:5000/addToTeamLead/${leadid}/${inputs.CurrentTeam}/active`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .post("http://localhost:5000/addActiveTeamdata", inputs)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .post("http://localhost:5000/addCompletedTeamdata", {CurrentTeam:team})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        window.alert(`Lead passed to team: ${inputs.CurrentTeam}`)
        window.location.reload()
    }
    return (
        <>
            {open && (
                <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: "1vw" } }}>
                    <DialogTitle>Select Team to Pass to:</DialogTitle>
                    <ToggleButtonGroup
                        value={inputs.CurrentTeam}
                        onChange={(e, value) => saveTeam(value)}
                        exclusive
                        name="CurrentTeam"
                        sx={{
                            flexWrap: "wrap",
                            padding: "2vw",
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
                    </ToggleButtonGroup>

                    <TextField
                        fullWidth
                        label="Team notes"
                        placeholder="Add team notes"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={inputHandler}
                        name="PreviousTeamNotes"
                        value={inputs.Address}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                            },
                        }}
                    />

                    <Button onClick={() => { submitHandler() }}>Submit</Button>
                    <DialogActions>
                        <Button onClick={onClose}>Close</Button>
                    </DialogActions>

                </Dialog>
            )}
        </>
    )
}

export default PassPopUp