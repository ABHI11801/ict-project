"use client"

import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js"
import { Paper, Typography, Box } from "@mui/material"
import axios from "axios"

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarGraph = () => {
  const [teamdeets, setTeamdeets] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/getTeamdata").then((res) => {
      setTeamdeets(res.data)
    })
  }, [])

  const labels = teamdeets.map((team) => team.TeamName)
  const active = teamdeets.map((team) => team.Active)
  const completed = teamdeets.map((team) => team.Completed)

  const data = {
    labels,
    datasets: [
      {
        label: "Active",
        data: active,
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: "Completed",
        data: completed,
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        background: "white",
        height: 400,
        minWidth: 500,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "#2c3e50",
        }}
      >
        Team Performance
      </Typography>
      <Box sx={{ height: 320 }}>
        <Bar data={data} options={options} />
      </Box>
    </Paper>
  )
}

export default BarGraph
