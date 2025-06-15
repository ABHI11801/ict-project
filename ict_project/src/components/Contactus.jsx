import { useState, useEffect } from "react"
import axios from "axios"
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Box,
  Container,
  Paper,
  Chip,
} from "@mui/material"
import { Email, Phone, Share, AdminPanelSettings, ManageAccounts, Business } from "@mui/icons-material"
import Nav from "./Nav"

const ContactUs = () => {
  const [pro, setPro] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/viewcontact")
      .then((res) => {
        console.log(res.data)
        setPro(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const getRoleConfig = (role) => {
    const configs = {
      executive: {
        color: "#4caf50",
        gradient: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
        icon: <Business sx={{ color: "white" }} />,
      },
      manager: {
        color: "#2196f3",
        gradient: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
        icon: <ManageAccounts sx={{ color: "white" }} />,
      },
      admin: {
        color: "#f44336",
        gradient: "linear-gradient(135deg, #f44336 0%, #d32f2f 100%)",
        icon: <AdminPanelSettings sx={{ color: "white" }} />,
      },
    }
    return configs[role.toLowerCase()] || configs.executive
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Nav />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Contact Our Team
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Get in touch with our dedicated professionals
          </Typography>
        </Paper>

        {/* Team Members by Role */}
        {["executive", "manager", "admin"].map((role) => {
          const roleConfig = getRoleConfig(role)
          const roleMembers = pro.filter((val) => val.Role.toLowerCase() === role)

          if (roleMembers.length === 0) return null

          return (
            <Box key={role} sx={{ mb: 6 }}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  mb: 3,
                  borderRadius: 2,
                  background: roleConfig.gradient,
                  color: "white",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {roleConfig.icon}
                  <Typography variant="h5" sx={{ fontWeight: 600, textTransform: "capitalize" }}>
                    {role}s
                  </Typography>
                  <Chip
                    label={`${roleMembers.length} member${roleMembers.length > 1 ? "s" : ""}`}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                </Box>
              </Paper>

              <Grid container spacing={3}>
                {roleMembers.map((val, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Card
                      elevation={3}
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      {/* Header with role color */}
                      <Box
                        sx={{
                          background: roleConfig.gradient,
                          p: 2,
                          textAlign: "center",
                        }}
                      >
                        <Avatar
                          src="https://www.shareicon.net/data/256x256/2017/05/24/886399_user_512x512.png"
                          sx={{
                            width: 80,
                            height: 80,
                            mx: "auto",
                            border: "4px solid white",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          }}
                        />
                      </Box>

                      <CardContent sx={{ p: 3, textAlign: "center" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {val.Name}
                        </Typography>

                        <Chip
                          label={val.Role}
                          size="small"
                          sx={{
                            backgroundColor: roleConfig.color,
                            color: "white",
                            fontWeight: 500,
                            mb: 2,
                          }}
                        />

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                            <Email sx={{ fontSize: 16, color: "text.secondary" }} />
                            <Typography variant="body2" color="text.secondary">
                              {val.Email}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                            <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
                            <Typography variant="body2" color="text.secondary">
                              {val.Phone}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                        <Button
                          size="small"
                          startIcon={<Share />}
                          sx={{
                            color: roleConfig.color,
                            "&:hover": {
                              backgroundColor: `${roleConfig.color}15`,
                            },
                          }}
                        >
                          Share Contact
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}

export default ContactUs
