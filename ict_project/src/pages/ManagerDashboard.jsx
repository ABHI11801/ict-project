import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Container, Grid, Box, Typography, Paper } from "@mui/material"
import { ManageAccounts } from "@mui/icons-material"
import Nav from "../components/Nav"
import TotalLeads from "../components/TotalLeads"
import ActiveLeads from "../components/ActiveLeads"
import DataTable from "../components/DataTable"

const ManagerDashboard = () => {
  const [users, setUsers] = useState([])
  const team = localStorage.getItem("team")

  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewleads/${team}`)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Nav />

      <Container maxWidth="xl" sx={{ py: 4 }}>
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
            <ManageAccounts sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Manager Dashboard
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Team: {(team ? team.charAt(0).toUpperCase() + team.slice(1) : "All Teams")}
              </Typography>

            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TotalLeads />
          </Grid>
          <Grid item xs={12} md={6}>
            <ActiveLeads />
          </Grid>
        </Grid>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#2c3e50",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Team Leads Overview
          </Typography>
          <DataTable data={users} />
        </Box>
      </Container>
    </Box>
  )
}

export default ManagerDashboard
