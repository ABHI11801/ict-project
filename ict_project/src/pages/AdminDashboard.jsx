import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Container, Grid, Typography, Divider, Paper, Box } from "@mui/material"
import { AdminPanelSettings } from "@mui/icons-material"
import Nav from "../components/Nav"
import TotalLeads from "../components/TotalLeads"
import ActiveLeads from "../components/ActiveLeads"
import BarGraph from "../components/BarGraph"
import AddTeam from "../components/AddTeam"
import CreateUser from "../components/CreateUser"
import DataTable from "../components/DataTable"

const AdminDashboard = () => {
  const [users, setUsers] = useState([])
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get("http://localhost:5000/view")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.error(err)
      })

    axios
      .get(`http://localhost:5000/viewleads`)
      .then((res) => {
        setLeads(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

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
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: "150px",
              height: "150px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              transform: "translate(30%, -30%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100px",
              height: "100px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%",
              transform: "translate(-30%, 30%)",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative", zIndex: 1 }}>
            <AdminPanelSettings sx={{ fontSize: 50 }} />
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Admin Dashboard
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

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={8}>
            <BarGraph />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              <AddTeam />

              <CreateUser />

            </Box>
          </Grid>
        </Grid>

        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "white",
            mb: 4,
          }}
        >
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
                "&::before": {
                  content: '""',
                  width: "4px",
                  height: "24px",
                  backgroundColor: "#667eea",
                  borderRadius: "2px",
                },
              }}
            >
              User Management
            </Typography>
            <DataTable data={users} showButtons={true} />
          </Box>

          <Divider
            sx={{
              my: 4,
              borderColor: "#e0e0e0",
              "&::before, &::after": {
                borderColor: "#e0e0e0",
              },
            }}
          />

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
                "&::before": {
                  content: '""',
                  width: "4px",
                  height: "24px",
                  backgroundColor: "#f5576c",
                  borderRadius: "2px",
                },
              }}
            >
              Leads Overview
            </Typography>
            <DataTable data={leads} />
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default AdminDashboard
