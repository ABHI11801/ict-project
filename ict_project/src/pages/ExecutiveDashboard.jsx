
import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Grid, Box, Typography, Paper } from "@mui/material"
import { BusinessCenter } from "@mui/icons-material"
import Nav from "../components/Nav"
import TotalLeads from "../components/TotalLeads"
import ActiveLeads from "../components/ActiveLeads"
import CreateLead from "../components/CreateLead"
import DataTable from "../components/DataTable"

const ExecutiveDashboard = () => {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewleads`)
      .then((res) => {
        setLeads(res.data)
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
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg,rgb(227, 101, 241) 0%, #f5576c 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
              height: "200px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              transform: "translate(50%, -50%)",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative", zIndex: 1 }}>
            <BusinessCenter sx={{ fontSize: 50 }} />
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Executive Dashboard
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "white",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <TotalLeads />
            </Grid>
            <Grid item xs={12} md={6}>
              <ActiveLeads />
            </Grid>
          </Grid>

          <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
            <CreateLead />
          </Box>

          <Box sx={{ mb: 2 }}>
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
              Leads Management
            </Typography>
            <DataTable data={leads} />
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ExecutiveDashboard
