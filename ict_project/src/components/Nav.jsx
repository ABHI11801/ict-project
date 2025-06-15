import { AppBar, Box, Button, Toolbar, Typography, Container } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { Dashboard, Info, ContactMail, ExitToApp } from "@mui/icons-material"

const Nav = ({ role }) => {
  const navigate = useNavigate()

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                background: "linear-gradient(45deg, #fff, #e3f2fd)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CRM Dashboard
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                startIcon={<Info />}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                startIcon={<ContactMail />}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Contact
              </Button>
              {role ? (
                <Button
                  component={Link}
                  to="/dashboard"
                  color="inherit"
                  startIcon={<Dashboard />}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Dashboard
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    navigate("/login", { replace: true })
                    localStorage.clear()
                  }}
                  color="inherit"
                  startIcon={<ExitToApp />}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Nav
