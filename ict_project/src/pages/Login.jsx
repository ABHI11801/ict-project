import { useState } from "react"
import { Button, CardContent, TextField, Typography, Box, Container, Paper } from "@mui/material"
import { Login as LoginIcon, Person, Lock } from "@mui/icons-material"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [Username, setUserName] = useState("")
  const [Password, setPassWord] = useState("")
  const [loading, setLoading] = useState(false)

  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassWord(e.target.value)
  }

  const checkUser = async () => {
    console.log("button clicked")
    setLoading(true)
    try {
      const res = await axios.post("http://localhost:5000/login", { Username, Password })
      if (res.status === 200) {
        localStorage.setItem("role", res.data.Role)
        localStorage.setItem("team", res.data.Team)
        navigate(`/${res.data.Role}`, { replace: true})
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,rgb(102, 36, 139) 0%,rgb(67, 10, 124) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "white",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              p: 8,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              CRM Login
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  label="Username"
                  placeholder="Username"
                  name="Username"
                  onChange={userNameHandler}
                  value={Username}
                  InputProps={{
                    startAdornment: <Person sx={{ color: "text.secondary", mr: 1 }} />,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>

              <Box sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  label="Password"
                  name="Password"
                  placeholder="Password"
                  type="password"
                  onChange={passwordHandler}
                  value={Password}
                  InputProps={{
                    startAdornment: <Lock sx={{ color: "text.secondary", mr: 1 }} />,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={checkUser}
                disabled={loading || !Username || !Password}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  mt: 2,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                  },
                  "&:disabled": {
                    background: "#e0e0e0",
                  },
                }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Box>
          </CardContent>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login
