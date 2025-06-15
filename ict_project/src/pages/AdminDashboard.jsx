import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Grid, Typography, Divider } from "@mui/material"
import TotalLeads from "../components/TotalLeads"
import ActiveLeads from "../components/ActiveLeads"
import BarGraph from "../components/BarGraph"
import AddTeam from "../components/AddTeam"
import CreateUser from "../components/CreateUser"
import DataTable from "../components/DataTable"
import Nav from "../components/Nav"

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
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Nav />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Grid container spacing={4} sx={{ mb: 4 }} style={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <TotalLeads />
          </Grid>
          <Grid item xs={12} md={6}>
            <ActiveLeads />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: 4 }} style={{ width: "100%" }}>
          <Grid item xs={12} lg={8}>
            <BarGraph />
          </Grid>
          <Grid item xs={12} lg={4}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <AddTeam />
              <CreateUser />
            </div>
          </Grid>
        </Grid>

        <div style={{ marginBottom: "32px", width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#2c3e50",
            }}
          >
            User Management
          </Typography>
          <DataTable data={users} showButtons={true} />
        </div>

        <Divider sx={{ my: 4 }} style={{ width: "100%" }} />

        <div style={{ marginBottom: "32px", width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#2c3e50",
            }}
          >
            Leads Overview
          </Typography>
          <DataTable data={leads} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard